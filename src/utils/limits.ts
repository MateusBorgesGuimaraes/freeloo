import { PlanType } from "@/types/user";

type LimitKey =
  | "clients.max"
  | "services.max"
  | "upload.size"
  | "upload.total"
  | "financial.transactions.max";

type LimitConfig = Record<PlanType, number>;

export const LIMITS: Record<LimitKey, LimitConfig> = {
  "clients.max": {
    [PlanType.FREE]: 5,
    [PlanType.PRO]: 50,
    [PlanType.DELUXE]: Infinity,
  },
  "services.max": {
    [PlanType.FREE]: 10,
    [PlanType.PRO]: 100,
    [PlanType.DELUXE]: Infinity,
  },
  "upload.size": {
    [PlanType.FREE]: 10,
    [PlanType.PRO]: 100,
    [PlanType.DELUXE]: 1000,
  },
  "upload.total": {
    [PlanType.FREE]: 100,
    [PlanType.PRO]: 10240,
    [PlanType.DELUXE]: Infinity,
  },
  "financial.transactions.max": {
    [PlanType.FREE]: 20,
    [PlanType.PRO]: 200,
    [PlanType.DELUXE]: Infinity,
  },
};

export function getLimit(limitKey: LimitKey, plan: PlanType): number {
  return LIMITS[limitKey][plan];
}

export function formatLimit(limit: number): string {
  return limit === Infinity ? "Ilimitado" : limit.toString();
}
