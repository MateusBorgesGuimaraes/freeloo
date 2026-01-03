import { UserRole, PlanType } from "@/types/user";

type PermissionKey =
  | "clients.create"
  | "clients.edit"
  | "clients.delete"
  | "clients.view"
  | "services.create"
  | "services.edit"
  | "services.advanced-status"
  | "financial.view"
  | "financial.reports"
  | "financial.export"
  | "upload.files"
  | "admin.users"
  | "admin.settings";

type PermissionConfig = {
  roles?: UserRole[];
  plans?: PlanType[];
};

export const PERMISSIONS: Record<PermissionKey, PermissionConfig> = {
  "clients.view": {
    plans: [PlanType.FREE, PlanType.PRO, PlanType.DELUXE],
  },
  "clients.create": {
    plans: [PlanType.FREE, PlanType.PRO, PlanType.DELUXE],
  },
  "clients.edit": {
    plans: [PlanType.FREE, PlanType.PRO, PlanType.DELUXE],
  },
  "clients.delete": {
    plans: [PlanType.PRO, PlanType.DELUXE],
  },

  "services.create": {
    plans: [PlanType.FREE, PlanType.PRO, PlanType.DELUXE],
  },
  "services.edit": {
    plans: [PlanType.FREE, PlanType.PRO, PlanType.DELUXE],
  },
  "services.advanced-status": {
    plans: [PlanType.PRO, PlanType.DELUXE],
  },

  "financial.view": {
    plans: [PlanType.FREE, PlanType.PRO, PlanType.DELUXE],
  },
  "financial.reports": {
    plans: [PlanType.PRO, PlanType.DELUXE],
  },
  "financial.export": {
    plans: [PlanType.DELUXE],
  },

  "upload.files": {
    plans: [PlanType.FREE, PlanType.PRO, PlanType.DELUXE],
  },

  "admin.users": {
    roles: [UserRole.ADMIN],
  },
  "admin.settings": {
    roles: [UserRole.ADMIN],
  },
};
