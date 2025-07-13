import { type NextRequest, NextResponse } from "next/server"

const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || "noreply@kivisai.de"
const BREVO_TEAM_EMAIL = process.env.BREVO_TEAM_EMAIL || "team@kivisai.de"

export async function GET(request: NextRequest) {
  try {
    if (!BREVO_API_KEY) {
      return NextResponse.json({
        status: "error",
        message: "BREVO_API_KEY not configured",
        config: {
          apiKey: "❌ Not set",
          senderEmail: BREVO_SENDER_EMAIL,
          teamEmail: BREVO_TEAM_EMAIL,
        },
      })
    }

    // Test API connection
    const accountResponse = await fetch("https://api.brevo.com/v3/account", {
      headers: {
        Accept: "application/json",
        "api-key": BREVO_API_KEY,
      },
    })

    if (!accountResponse.ok) {
      const error = await accountResponse.text()
      return NextResponse.json({
        status: "error",
        message: "Brevo API connection failed",
        error: `${accountResponse.status} - ${error}`,
        config: {
          apiKey: "❌ Invalid or expired",
          senderEmail: BREVO_SENDER_EMAIL,
          teamEmail: BREVO_TEAM_EMAIL,
        },
      })
    }

    const accountData = await accountResponse.json()

    // Test email sending
    const testEmailData = {
      sender: {
        name: "KIVISAI Test",
        email: BREVO_SENDER_EMAIL,
      },
      to: [
        {
          email: BREVO_TEAM_EMAIL,
          name: "KIVISAI Team",
        },
      ],
      subject: "Brevo Integration Test - KIVISAI",
      htmlContent: `
        <h2>Brevo Integration Test</h2>
        <p>This is a test email to verify the Brevo integration is working correctly.</p>
        <ul>
          <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
          <li><strong>Account:</strong> ${accountData.email}</li>
          <li><strong>Plan:</strong> ${accountData.plan?.type || "Unknown"}</li>
          <li><strong>Credits:</strong> ${accountData.plan?.creditsType || "Unknown"}</li>
        </ul>
        <p>If you receive this email, the integration is working properly!</p>
        <hr>
        <p><small>Sent from KIVISAI Brevo Test API</small></p>
      `,
    }

    const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(testEmailData),
    })

    const emailResult = emailResponse.ok ? await emailResponse.json() : null

    return NextResponse.json({
      status: "success",
      message: "Brevo integration test completed",
      account: {
        email: accountData.email,
        firstName: accountData.firstName,
        lastName: accountData.lastName,
        companyName: accountData.companyName,
        plan: accountData.plan?.type || "Unknown",
        credits: accountData.plan?.credits || "Unknown",
      },
      emailTest: {
        sent: emailResponse.ok,
        messageId: emailResult?.messageId || null,
        error: emailResponse.ok ? null : `${emailResponse.status} - ${await emailResponse.text()}`,
      },
      config: {
        apiKey: "✅ Valid",
        senderEmail: BREVO_SENDER_EMAIL,
        teamEmail: BREVO_TEAM_EMAIL,
        contactListId: process.env.BREVO_CONTACT_LIST_ID || "Not set",
      },
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Brevo test error:", error)

    return NextResponse.json(
      {
        status: "error",
        message: "Brevo test failed",
        error: error instanceof Error ? error.message : "Unknown error",
        config: {
          apiKey: BREVO_API_KEY ? "❓ Set but invalid" : "❌ Not set",
          senderEmail: BREVO_SENDER_EMAIL,
          teamEmail: BREVO_TEAM_EMAIL,
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

// POST endpoint to send a custom test email
export async function POST(request: NextRequest) {
  try {
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        {
          status: "error",
          message: "BREVO_API_KEY not configured",
        },
        { status: 400 },
      )
    }

    const body = await request.json()
    const { to, subject, message } = body

    if (!to || !subject || !message) {
      return NextResponse.json(
        {
          status: "error",
          message: "to, subject, and message are required",
        },
        { status: 400 },
      )
    }

    const testEmailData = {
      sender: {
        name: "KIVISAI Test",
        email: BREVO_SENDER_EMAIL,
      },
      to: [
        {
          email: to,
          name: to.split("@")[0],
        },
      ],
      subject: `[TEST] ${subject}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001F3F;">KIVISAI Test Email</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <hr>
          <p><small>
            This is a test email sent via Brevo API<br>
            Timestamp: ${new Date().toISOString()}
          </small></p>
        </div>
      `,
    }

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(testEmailData),
    })

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json(
        {
          status: "error",
          message: "Failed to send test email",
          error: `${response.status} - ${error}`,
        },
        { status: 500 },
      )
    }

    const result = await response.json()

    return NextResponse.json({
      status: "success",
      message: "Test email sent successfully",
      messageId: result.messageId,
      to,
      subject,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Custom test email error:", error)

    return NextResponse.json(
      {
        status: "error",
        message: "Failed to send custom test email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
