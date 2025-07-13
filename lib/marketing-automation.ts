// Marketing Automation Engine
export interface EmailSequence {
  id: string
  name: string
  trigger: {
    type: "lead_score" | "form_submit" | "page_visit" | "time_delay"
    conditions: Record<string, any>
  }
  emails: Array<{
    id: string
    templateId: number
    delay: number // hours
    conditions?: Record<string, any>
  }>
  active: boolean
}

export interface AutomationRule {
  id: string
  name: string
  trigger: {
    event: string
    conditions: Record<string, any>
  }
  actions: Array<{
    type: "send_email" | "update_lead_score" | "create_task" | "notify_sales"
    parameters: Record<string, any>
  }>
  active: boolean
}

class MarketingAutomationManager {
  private sequences: Map<string, EmailSequence> = new Map()
  private rules: Map<string, AutomationRule> = new Map()
  private userSequences: Map<string, Set<string>> = new Map() // email -> sequence IDs

  constructor() {
    this.initializeSequences()
    this.initializeRules()
  }

  private initializeSequences() {
    const sequences: EmailSequence[] = [
      {
        id: "welcome_series",
        name: "Welcome Series",
        trigger: {
          type: "form_submit",
          conditions: { formType: "newsletter" },
        },
        emails: [
          { id: "welcome", templateId: 15, delay: 0 },
          { id: "ki_basics", templateId: 16, delay: 24 },
          { id: "case_studies", templateId: 17, delay: 72 },
          { id: "consultation_offer", templateId: 18, delay: 168 },
        ],
        active: true,
      },
      {
        id: "nurture_warm_leads",
        name: "Warm Lead Nurturing",
        trigger: {
          type: "lead_score",
          conditions: { minScore: 15, maxScore: 30 },
        },
        emails: [
          { id: "value_proposition", templateId: 19, delay: 0 },
          { id: "roi_calculator", templateId: 20, delay: 48 },
          { id: "demo_invitation", templateId: 21, delay: 120 },
        ],
        active: true,
      },
      {
        id: "hot_lead_followup",
        name: "Hot Lead Follow-up",
        trigger: {
          type: "lead_score",
          conditions: { minScore: 30 },
        },
        emails: [
          { id: "urgent_consultation", templateId: 22, delay: 0 },
          { id: "limited_offer", templateId: 23, delay: 24 },
        ],
        active: true,
      },
    ]

    sequences.forEach((seq) => this.sequences.set(seq.id, seq))
  }

  private initializeRules() {
    const rules: AutomationRule[] = [
      {
        id: "high_value_page_visit",
        name: "High Value Page Visit",
        trigger: {
          event: "page_visit",
          conditions: {
            pages: ["/leistungen/ki-potenzialanalyse", "/kontakt", "/termin"],
            minDuration: 30000, // 30 seconds
          },
        },
        actions: [
          {
            type: "update_lead_score",
            parameters: { increment: 5 },
          },
          {
            type: "notify_sales",
            parameters: {
              message: "High-value page visit detected",
              urgency: "medium",
            },
          },
        ],
        active: true,
      },
      {
        id: "qualified_lead_notification",
        name: "Qualified Lead Notification",
        trigger: {
          event: "lead_score_change",
          conditions: { threshold: 50 },
        },
        actions: [
          {
            type: "notify_sales",
            parameters: {
              message: "Lead qualified for immediate contact",
              urgency: "high",
            },
          },
          {
            type: "create_task",
            parameters: {
              title: "Contact qualified lead",
              priority: "high",
              dueDate: 24, // hours
            },
          },
        ],
        active: true,
      },
    ]

    rules.forEach((rule) => this.rules.set(rule.id, rule))
  }

  async triggerSequence(email: string, triggerType: string, conditions: Record<string, any>) {
    const matchingSequences = Array.from(this.sequences.values()).filter(
      (seq) =>
        seq.active && seq.trigger.type === triggerType && this.matchesConditions(conditions, seq.trigger.conditions),
    )

    for (const sequence of matchingSequences) {
      await this.enrollInSequence(email, sequence.id)
    }
  }

  async triggerRule(event: string, data: Record<string, any>) {
    const matchingRules = Array.from(this.rules.values()).filter(
      (rule) => rule.active && rule.trigger.event === event && this.matchesConditions(data, rule.trigger.conditions),
    )

    for (const rule of matchingRules) {
      await this.executeRuleActions(rule, data)
    }
  }

  private async enrollInSequence(email: string, sequenceId: string) {
    const sequence = this.sequences.get(sequenceId)
    if (!sequence) return

    // Check if already enrolled
    const userSequences = this.userSequences.get(email) || new Set()
    if (userSequences.has(sequenceId)) return

    // Enroll user
    userSequences.add(sequenceId)
    this.userSequences.set(email, userSequences)

    // Schedule emails
    for (const emailConfig of sequence.emails) {
      await this.scheduleEmail(email, emailConfig, sequence.name)
    }

    console.log(`Enrolled ${email} in sequence: ${sequence.name}`)
  }

  private async scheduleEmail(email: string, emailConfig: any, sequenceName: string) {
    // In production, use a job queue like Bull or Agenda
    setTimeout(
      async () => {
        try {
          await this.sendSequenceEmail(email, emailConfig, sequenceName)
        } catch (error) {
          console.error(`Failed to send sequence email:`, error)
        }
      },
      emailConfig.delay * 60 * 60 * 1000,
    ) // Convert hours to milliseconds
  }

  private async sendSequenceEmail(email: string, emailConfig: any, sequenceName: string) {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        to: [{ email }],
        templateId: emailConfig.templateId,
        params: {
          EMAIL: email,
          SEQUENCE_NAME: sequenceName,
        },
        tags: ["automation", "sequence", sequenceName],
      }),
    })

    if (response.ok) {
      console.log(`Sent sequence email to ${email}: ${emailConfig.id}`)
    } else {
      throw new Error(`Failed to send email: ${response.statusText}`)
    }
  }

  private async executeRuleActions(rule: AutomationRule, data: Record<string, any>) {
    for (const action of rule.actions) {
      try {
        switch (action.type) {
          case "send_email":
            await this.sendAutomationEmail(data.email, action.parameters)
            break
          case "update_lead_score":
            await this.updateLeadScore(data.email, action.parameters.increment)
            break
          case "notify_sales":
            await this.notifySalesTeam(data, action.parameters)
            break
          case "create_task":
            await this.createSalesTask(data, action.parameters)
            break
        }
      } catch (error) {
        console.error(`Failed to execute action ${action.type}:`, error)
      }
    }
  }

  private async sendAutomationEmail(email: string, parameters: any) {
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        to: [{ email }],
        templateId: parameters.templateId,
        params: parameters.params || {},
        tags: ["automation", "rule-triggered"],
      }),
    })
  }

  private async updateLeadScore(email: string, increment: number) {
    // Update lead score in your system
    console.log(`Updated lead score for ${email}: +${increment}`)
  }

  private async notifySalesTeam(data: any, parameters: any) {
    // Send notification to sales team
    await fetch("/api/sales-notification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        message: parameters.message,
        urgency: parameters.urgency,
        data,
      }),
    })
  }

  private async createSalesTask(data: any, parameters: any) {
    // Create task in CRM or task management system
    console.log(`Created sales task: ${parameters.title} for ${data.email}`)
  }

  private matchesConditions(data: Record<string, any>, conditions: Record<string, any>): boolean {
    return Object.entries(conditions).every(([key, value]) => {
      if (Array.isArray(value)) {
        return value.includes(data[key])
      }
      if (typeof value === "object" && value !== null) {
        if ("min" in value && data[key] < value.min) return false
        if ("max" in value && data[key] > value.max) return false
        return true
      }
      return data[key] === value
    })
  }

  // Public API methods
  async handleFormSubmit(email: string, formType: string, data: Record<string, any>) {
    await this.triggerSequence(email, "form_submit", { formType, ...data })
    await this.triggerRule("form_submit", { email, formType, ...data })
  }

  async handlePageVisit(email: string, page: string, duration: number) {
    await this.triggerRule("page_visit", { email, page, duration })
  }

  async handleLeadScoreChange(email: string, newScore: number, oldScore: number) {
    await this.triggerSequence(email, "lead_score", { score: newScore })
    await this.triggerRule("lead_score_change", { email, newScore, oldScore, threshold: newScore })
  }
}

export const marketingAutomation = new MarketingAutomationManager()
