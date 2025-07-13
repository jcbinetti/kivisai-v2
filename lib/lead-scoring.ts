// Advanced Lead Scoring System
export interface LeadAction {
  type: string
  score: number
  timestamp: number
  metadata?: Record<string, any>
}

export interface LeadProfile {
  id: string
  email: string
  score: number
  actions: LeadAction[]
  qualification: "cold" | "warm" | "hot" | "qualified"
  lastActivity: number
  source: string
}

class LeadScoringManager {
  private profiles: Map<string, LeadProfile> = new Map()

  // Scoring rules
  private scoringRules = {
    // Page visits
    page_visit_home: 1,
    page_visit_services: 3,
    page_visit_pricing: 5,
    page_visit_contact: 8,

    // Content engagement
    download_whitepaper: 10,
    newsletter_signup: 5,
    blog_read: 2,
    video_watch: 4,

    // Form interactions
    contact_form_submit: 15,
    demo_request: 20,
    quote_request: 25,

    // Time-based
    session_duration_5min: 3,
    session_duration_10min: 5,
    return_visitor: 2,

    // Negative scoring
    bounce_immediately: -2,
    unsubscribe: -10,
  }

  trackAction(email: string, actionType: string, metadata?: Record<string, any>) {
    const score = this.scoringRules[actionType as keyof typeof this.scoringRules] || 0
    const action: LeadAction = {
      type: actionType,
      score,
      timestamp: Date.now(),
      metadata,
    }

    let profile = this.profiles.get(email)
    if (!profile) {
      profile = {
        id: this.generateId(),
        email,
        score: 0,
        actions: [],
        qualification: "cold",
        lastActivity: Date.now(),
        source: metadata?.source || "unknown",
      }
      this.profiles.set(email, profile)
    }

    profile.actions.push(action)
    profile.score += score
    profile.lastActivity = Date.now()
    profile.qualification = this.calculateQualification(profile.score)

    // Decay old scores
    this.applyScoreDecay(profile)

    // Trigger notifications for qualified leads
    if (profile.qualification === "qualified" && score > 0) {
      this.notifyQualifiedLead(profile)
    }

    return profile
  }

  private calculateQualification(score: number): LeadProfile["qualification"] {
    if (score >= 50) return "qualified"
    if (score >= 25) return "hot"
    if (score >= 10) return "warm"
    return "cold"
  }

  private applyScoreDecay(profile: LeadProfile) {
    const daysSinceLastActivity = (Date.now() - profile.lastActivity) / (1000 * 60 * 60 * 24)

    if (daysSinceLastActivity > 30) {
      profile.score = Math.max(0, profile.score * 0.8) // 20% decay after 30 days
    } else if (daysSinceLastActivity > 7) {
      profile.score = Math.max(0, profile.score * 0.95) // 5% decay after 7 days
    }
  }

  private async notifyQualifiedLead(profile: LeadProfile) {
    try {
      await fetch("/api/lead-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: profile.email,
          score: profile.score,
          qualification: profile.qualification,
          lastActions: profile.actions.slice(-5),
        }),
      })
    } catch (error) {
      console.error("Failed to notify qualified lead:", error)
    }
  }

  getProfile(email: string): LeadProfile | undefined {
    return this.profiles.get(email)
  }

  getQualifiedLeads(): LeadProfile[] {
    return Array.from(this.profiles.values()).filter((profile) => profile.qualification === "qualified")
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9)
  }
}

export const leadScoring = new LeadScoringManager()

// React hook for lead scoring
export function useLeadScoring() {
  return {
    trackAction: (email: string, actionType: string, metadata?: Record<string, any>) =>
      leadScoring.trackAction(email, actionType, metadata),
    getProfile: (email: string) => leadScoring.getProfile(email),
  }
}
