import { useAuthStore } from "@/stores/auth.store";
import { UserRole } from "@/types/user";
import { PERMISSIONS } from "@/utils/permissions";

type PermissionKey = keyof typeof PERMISSIONS;

export function useHasPermission(permission: PermissionKey): boolean {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || !user) {
    return false;
  }

  const config = PERMISSIONS[permission];

  if (!config) {
    return false;
  }

  if (user.role === UserRole.ADMIN) {
    if (config.roles && !config.roles.includes(user.role)) {
      return false;
    }
    return true;
  }

  if (config.roles && !config.roles.includes(user.role)) {
    return false;
  }

  if (config.plans && !config.plans.includes(user.plan)) {
    return false;
  }

  return true;
}
