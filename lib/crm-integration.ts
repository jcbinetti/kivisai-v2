// CRM Integration Layer
export interface CRMContact {
  id?: string
  email: string
  firstName?: string
  lastName?: string
  company?: string
  phone?: string
  leadScore: number
  qualification: string
  source: string
  customFields?: Record<string, any>
  activities?: CRMActivity[]
}

export interface CRMActivity {
  type: string
  description: string
  timestamp: number
  metadata?: Record<string, any>
}

export interface CRMDeal {
  id?: string
  contactId: string
  title: string
  value: number
  stage: string
  probability: number
  expectedCloseDate?: number
  source: string
}

class CRMIntegrationManager {
  private apiKey: string
  private baseUrl: string
  private provider: "hubspot" | "salesforce" | "pipedrive"

  constructor() {
    this.apiKey = process.env.CRM_API_KEY || ""
    this.baseUrl = process.env.CRM_BASE_URL || ""
    this.provider = (process.env.CRM_PROVIDER as any) || "hubspot"
  }

  async createOrUpdateContact(contact: CRMContact): Promise<string> {
    try {
      switch (this.provider) {
        case "hubspot":
          return await this.hubspotCreateContact(contact)
        case "salesforce":
          return await this.salesforceCreateContact(contact)
        case "pipedrive":
          return await this.pipedriveCreateContact(contact)
        default:
          throw new Error(`Unsupported CRM provider: ${this.provider}`)
      }
    } catch (error) {
      console.error("CRM contact creation failed:", error)
      throw error
    }
  }

  async addActivity(contactId: string, activity: CRMActivity): Promise<void> {
    try {
      switch (this.provider) {
        case "hubspot":
          await this.hubspotAddActivity(contactId, activity)
          break
        case "salesforce":
          await this.salesforceAddActivity(contactId, activity)
          break
        case "pipedrive":
          await this.pipedriveAddActivity(contactId, activity)
          break
      }
    } catch (error) {
      console.error("CRM activity creation failed:", error)
    }
  }

  async createDeal(deal: CRMDeal): Promise<string> {
    try {
      switch (this.provider) {
        case "hubspot":
          return await this.hubspotCreateDeal(deal)
        case "salesforce":
          return await this.salesforceCreateDeal(deal)
        case "pipedrive":
          return await this.pipedriveCreateDeal(deal)
        default:
          throw new Error(`Unsupported CRM provider: ${this.provider}`)
      }
    } catch (error) {
      console.error("CRM deal creation failed:", error)
      throw error
    }
  }

  // HubSpot Integration
  private async hubspotCreateContact(contact: CRMContact): Promise<string> {
    const response = await fetch(`${this.baseUrl}/crm/v3/objects/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          email: contact.email,
          firstname: contact.firstName,
          lastname: contact.lastName,
          company: contact.company,
          phone: contact.phone,
          hs_lead_status: contact.qualification,
          hubspotscore: contact.leadScore,
          lead_source: contact.source,
          ...contact.customFields,
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.statusText}`)
    }

    const result = await response.json()
    return result.id
  }

  private async hubspotAddActivity(contactId: string, activity: CRMActivity): Promise<void> {
    await fetch(`${this.baseUrl}/crm/v3/objects/notes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          hs_note_body: activity.description,
          hs_timestamp: activity.timestamp,
        },
        associations: [
          {
            to: { id: contactId },
            types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
          },
        ],
      }),
    })
  }

  private async hubspotCreateDeal(deal: CRMDeal): Promise<string> {
    const response = await fetch(`${this.baseUrl}/crm/v3/objects/deals`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        properties: {
          dealname: deal.title,
          amount: deal.value,
          dealstage: deal.stage,
          probability: deal.probability,
          closedate: deal.expectedCloseDate,
          lead_source: deal.source,
        },
        associations: [
          {
            to: { id: deal.contactId },
            types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }],
          },
        ],
      }),
    })

    const result = await response.json()
    return result.id
  }

  // Salesforce Integration (simplified)
  private async salesforceCreateContact(contact: CRMContact): Promise<string> {
    // Implement Salesforce API calls
    throw new Error("Salesforce integration not implemented")
  }

  private async salesforceAddActivity(contactId: string, activity: CRMActivity): Promise<void> {
    // Implement Salesforce API calls
    throw new Error("Salesforce integration not implemented")
  }

  private async salesforceCreateDeal(deal: CRMDeal): Promise<string> {
    // Implement Salesforce API calls
    throw new Error("Salesforce integration not implemented")
  }

  // Pipedrive Integration (simplified)
  private async pipedriveCreateContact(contact: CRMContact): Promise<string> {
    // Implement Pipedrive API calls
    throw new Error("Pipedrive integration not implemented")
  }

  private async pipedriveAddActivity(contactId: string, activity: CRMActivity): Promise<void> {
    // Implement Pipedrive API calls
    throw new Error("Pipedrive integration not implemented")
  }

  private async pipedriveCreateDeal(deal: CRMDeal): Promise<string> {
    // Implement Pipedrive API calls
    throw new Error("Pipedrive integration not implemented")
  }
}

export const crmIntegration = new CRMIntegrationManager()
