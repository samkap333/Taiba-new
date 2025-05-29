import { google } from "googleapis"

interface ClarityCallData {
  name: string
  email: string
  phone: string
  businessType: string
  yearsInBusiness: string
  annualRevenue: string
  biggestChallenge: string
  customChallenge?: string
  openToContact: boolean
}

export class GoogleSheetsService {
  private auth: any
  private sheets: any

  constructor() {
    // Initialize Google Sheets API
    try {
      if (!process.env.GOOGLE_SHEETS_PRIVATE_KEY || !process.env.GOOGLE_SHEETS_CLIENT_EMAIL) {
        console.warn("Google Sheets credentials not found. Google Sheets integration will be disabled.")
        return
      }

      this.auth = new google.auth.GoogleAuth({
        credentials: {
          type: "service_account",
          private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
          client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      })

      this.sheets = google.sheets({ version: "v4", auth: this.auth })
      console.log("Google Sheets service initialized successfully")
    } catch (error) {
      console.error("Failed to initialize Google Sheets service:", error)
    }
  }

  async addClarityCallRequest(data: ClarityCallData): Promise<void> {
    try {
      const spreadsheetId = process.env.GOOGLE_SHEET_ID

      if (!spreadsheetId) {
        console.error("Google Sheet ID not configured")
        throw new Error("Google Sheet ID not configured")
      }

      if (!this.sheets || !this.auth) {
        console.error("Google Sheets service not properly initialized")
        throw new Error("Google Sheets service not properly initialized")
      }

      // Check if this person should be added (student/fresher AND less than 1 year)
      const shouldAddToSheet = data.businessType === "student-fresher" && data.yearsInBusiness === "less-than-1"

      console.log(
        `Checking criteria: businessType=${data.businessType}, yearsInBusiness=${data.yearsInBusiness}, shouldAdd=${shouldAddToSheet}`,
      )

      if (!shouldAddToSheet) {
        console.log(
          "Skipping Google Sheets entry - does not meet criteria (must be student-fresher with less-than-1 year)",
        )
        return
      }

      console.log("Criteria met! Adding to Google Sheets...")

      // Prepare the row data
      const rowData = [
        new Date().toISOString(),
        data.name,
        data.email,
        data.phone,
        data.businessType,
        data.yearsInBusiness,
        data.annualRevenue,
        data.biggestChallenge,
        data.customChallenge || "",
        data.openToContact,
      ]

      console.log("Row data prepared:", rowData)

      // Check if headers exist, if not create them
      await this.ensureHeaders(spreadsheetId)

      // Append the data
      const result = await this.sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:J",
        valueInputOption: "RAW",
        requestBody: {
          values: [rowData],
        },
      })

      console.log("Successfully added data to Google Sheets. Response:", result.data)
    } catch (error) {
      console.error("Error adding data to Google Sheets:", error)
      if (error instanceof Error) {
        console.error("Error message:", error.message)
        console.error("Error stack:", error.stack)
      }
      throw error
    }
  }

  private async ensureHeaders(spreadsheetId: string): Promise<void> {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Sheet1!1:1", // Check only the first row
      })

      const values = response.data.values

      if (!values || values.length === 0 || values[0].length === 0) {
        // Headers do not exist, create them
        const headerRow = [
          "Timestamp",
          "Name",
          "Email",
          "Phone",
          "Business Type",
          "Years in Business",
          "Annual Revenue",
          "Biggest Challenge",
          "Custom Challenge",
          "Open to Contact",
        ]

        await this.sheets.spreadsheets.values.update({
          spreadsheetId,
          range: "Sheet1!A1:J1",
          valueInputOption: "RAW",
          requestBody: {
            values: [headerRow],
          },
        })

        console.log("Headers created in Google Sheets.")
      } else {
        console.log("Headers already exist in Google Sheets.")
      }
    } catch (error) {
      console.error("Error ensuring headers in Google Sheets:", error)
      throw error
    }
  }
}
