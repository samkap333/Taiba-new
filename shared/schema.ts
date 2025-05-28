import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const clarityCallRequests = pgTable("clarity_call_requests", {
  id: serial("id").primaryKey(),
  businessType: text("business_type").notNull(),
  yearsInBusiness: text("years_in_business").notNull(),
  annualRevenue: text("annual_revenue").notNull(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  biggestChallenge: text("biggest_challenge").notNull(),
  customChallenge: text("custom_challenge"),
  openToContact: text("open_to_contact").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertClarityCallRequestSchema = createInsertSchema(clarityCallRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ClarityCallRequest = typeof clarityCallRequests.$inferSelect;
export type InsertClarityCallRequest = z.infer<typeof insertClarityCallRequestSchema>;
