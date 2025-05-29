// This file is for Vercel deployment
import type { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import { GoogleSheetsService } from "../server/google-sheets-serverless"

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    // Validate the data
    const validatedData = clarityCallSchema.parse(req.body)

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

    return res.status(200).json({
      success: true,
      message: "Clarity call request submitted successfully",
      id: Date.now(), // Simple ID generation for serverless function
    })
  } catch (error) {
    console.error("Error processing clarity call request:", error)

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors,
      })
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    })
  }
}
