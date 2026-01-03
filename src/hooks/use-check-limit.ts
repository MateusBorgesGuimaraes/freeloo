import { useAuthStore } from "@/stores/auth.store";
import { UserRole } from "@/types/user";
import { LIMITS, getLimit } from "@/utils/limits";

type LimitKey = keyof typeof LIMITS;

type LimitResult = {
  hasReached: boolean;
  current: number;
  limit: number;
  remaining: number;
  percentage: number;
  canAdd: (amount?: number) => boolean;
};

export function useCheckLimit(
  limitKey: LimitKey,
  currentUsage: number,
): LimitResult {
  const { user } = useAuthStore();

  if (!user) {
    return {
      hasReached: true,
      current: 0,
      limit: 0,
      remaining: 0,
      percentage: 100,
      canAdd: () => false,
    };
  }

  const limit =
    user.role === UserRole.ADMIN ? Infinity : getLimit(limitKey, user.plan);

  const hasReached = currentUsage >= limit;
  const remaining =
    limit === Infinity ? Infinity : Math.max(0, limit - currentUsage);
  const percentage = limit === Infinity ? 0 : (currentUsage / limit) * 100;

  const canAdd = (amount: number = 1): boolean => {
    if (limit === Infinity) return true;
    return currentUsage + amount <= limit;
  };

  return {
    hasReached,
    current: currentUsage,
    limit,
    remaining,
    percentage: Math.min(percentage, 100),
    canAdd,
  };
}
