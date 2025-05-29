import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertClarityCallRequestSchema } from "@shared/schema";
import GoogleSheetsService from "./google-sheets";
import { z } from "zod";

type ClarityCallData = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  yearsInBusiness: string;
  annualRevenue: string;
  biggestChallenge: string;
  customChallenge?: string;
  openToContact: boolean;
};


const googleSheetsService = new GoogleSheetsService();

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit clarity call request
  app.post("/api/clarity-call", async (req, res) => {
    try {
      const requestData = insertClarityCallRequestSchema.parse(req.body);
      
      const clarityCallRequest = await storage.createClarityCallRequest(requestData);
      
      try {
        const sheetsData: ClarityCallData = {
          name: clarityCallRequest.name,
          email: clarityCallRequest.email,
          phone: clarityCallRequest.phone,
          businessType: clarityCallRequest.businessType,
          yearsInBusiness: clarityCallRequest.yearsInBusiness,
          annualRevenue: clarityCallRequest.annualRevenue,
          biggestChallenge: clarityCallRequest.biggestChallenge,
          customChallenge: clarityCallRequest.customChallenge || undefined,
          openToContact: Boolean(clarityCallRequest.openToContact)
        };
        
        await googleSheetsService.addClarityCallRequest(sheetsData);
      } catch (sheetsError) {
        console.error("Google Sheets error (non-blocking):", sheetsError);
      }
      
      console.log("Clarity call request received:", clarityCallRequest);
      
      res.json({ 
        success: true, 
        message: "Clarity call request submitted successfully",
        id: clarityCallRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error submitting clarity call request:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  app.get("/api/clarity-calls", async (req, res) => {
    try {
      const requests = await storage.getClarityCallRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching clarity call requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}