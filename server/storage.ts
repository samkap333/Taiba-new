import { users, clarityCallRequests, type User, type InsertUser, type ClarityCallRequest, type InsertClarityCallRequest } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createClarityCallRequest(request: InsertClarityCallRequest): Promise<ClarityCallRequest>;
  getClarityCallRequests(): Promise<ClarityCallRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private clarityCallRequests: Map<number, ClarityCallRequest>;
  private currentUserId: number;
  private currentRequestId: number;

  constructor() {
    this.users = new Map();
    this.clarityCallRequests = new Map();
    this.currentUserId = 1;
    this.currentRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createClarityCallRequest(insertRequest: InsertClarityCallRequest): Promise<ClarityCallRequest> {
    const id = this.currentRequestId++;
    const request: ClarityCallRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date() 
    };
    this.clarityCallRequests.set(id, request);
    return request;
  }

  async getClarityCallRequests(): Promise<ClarityCallRequest[]> {
    return Array.from(this.clarityCallRequests.values());
  }
}

export const storage = new MemStorage();
