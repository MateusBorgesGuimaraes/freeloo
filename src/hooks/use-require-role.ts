import { useAuthStore } from "@/stores/auth.store";
import type { UserRole } from "@/types/user";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export function useRequireRole(requiredRole: UserRole) {
  const { user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate({ to: "/login" });
      return;
    }

    if (user.role !== requiredRole) {
      navigate({ to: "/" });
    }
  }, [isAuthenticated, user, requiredRole, navigate]);

  return {
    user,
    hasRole: user?.role === requiredRole,
  };
}
