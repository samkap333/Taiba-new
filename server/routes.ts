import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertClarityCallRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Submit clarity call request
  app.post("/api/clarity-call", async (req, res) => {
    try {
      const requestData = insertClarityCallRequestSchema.parse(req.body);
      
      // Create the request in storage
      const clarityCallRequest = await storage.createClarityCallRequest(requestData);
      
      // In a real implementation, you would integrate with Google Sheets here
      // For now, we'll just log the data and return success
      console.log("Clarity call request received:", clarityCallRequest);
      
      // Here you would add Google Sheets integration:
      // await sendToGoogleSheets(clarityCallRequest);
      
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

  // Get all clarity call requests (for admin purposes)
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
