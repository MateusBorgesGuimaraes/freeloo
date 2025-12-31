export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export enum PlanType {
  FREE = "free",
  PRO = "pro",
  DELUXE = "deluxe",
}

export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  plan: PlanType;
};
