import type { Handler } from "@netlify/functions"
import { z } from "zod"
import { GoogleSheetsService } from "../../server/google-sheets-serverless"

// Schema for validation
const clarityCallSchema = z.object({
  businessType: z.string(),
  yearsInBusiness: z.string(),
  annualRevenue: z.string(),
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  biggestChallenge: z.string(),
  customChallenge: z.string().optional(),
  openToContact: z.string(),
})

const googleSheetsService = new GoogleSheetsService()

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed" }),
    }
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body || "{}")

    // Validate the data
    const validatedData = clarityCallSchema.parse(body)

    // Process the data
    const clarityCallData = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      businessType: validatedData.businessType,
      yearsInBusiness: validatedData.yearsInBusiness,
      annualRevenue: validatedData.annualRevenue,
      biggestChallenge: validatedData.biggestChallenge,
      customChallenge: validatedData.customChallenge || undefined,
      openToContact: validatedData.openToContact === "yes",
    }

    // Add to Google Sheets
    await googleSheetsService.addClarityCallRequest(clarityCallData)

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Clarity call request submitted successfully",
        id: Date.now(), // Simple ID generation for serverless function
      }),
    }
  } catch (error) {
    console.error("Error processing clarity call request:", error)

    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Validation error",
          errors: error.errors,
        }),
      }
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
    }
  }
}
