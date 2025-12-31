import { Check, Sparkles, Crown, Gift } from "lucide-react";
import PrincingButtonLink from "./PrincingButtonLink";

type PlanCardProps = {
  variants: "free" | "pro" | "deluxe";
};

export default function PlanCard({ variants }: PlanCardProps) {
  const planConfig = {
    free: {
      title: "FREE",
      subtitle: "Free forever",
      icon: Gift,
      benefits: ["5 customers", "10 services", "File uploads"],
      buttonVariant: "ghost",
      highlighted: false,
      badge: null,
    },
    pro: {
      title: "PRO",
      subtitle: "For growing businesses",
      icon: Sparkles,
      benefits: [
        "50 customers",
        "Unlimited services",
        "Priority support",
        "Advanced analytics",
      ],
      buttonVariant: "default",
      highlighted: true,
      badge: "Most Popular",
    },
    deluxe: {
      title: "DELUXE",
      subtitle: "Everything you need",
      icon: Crown,
      benefits: [
        "Unlimited customers",
        "Unlimited services",
        "24/7 Premium support",
        "Custom integrations",
        "White-label option",
      ],
      buttonVariant: "premium",
      highlighted: false,
      badge: "Best Value",
    },
  };

  const config = planConfig[variants];
  const Icon = config.icon;

  return (
    <div
      className={`
        relative flex min-h-96 flex-col gap-4 sm:gap-6
        rounded-xl sm:rounded-2xl
        p-6 sm:p-8
        border
        max-w-sm mx-auto w-full
        ${
          config.highlighted
            ? "border-primary/40 shadow-lg shadow-primary/5"
            : "border-stone-200 dark:border-stone-800"
        }
        bg-background
        transition-all duration-200
        hover:shadow-xl
        ${config.highlighted ? "scale-100 md:scale-105" : ""}
      `}
    >
      {config.badge && (
        <div
          className="
            absolute right-3 top-3 sm:right-4 sm:top-4
            rounded-full
            bg-primary/10 text-primary
            px-2.5 py-1 sm:px-3 sm:py-1
            text-xs font-semibold
          "
        >
          {config.badge}
        </div>
      )}

      <div>
        <div className="mb-2 flex items-center gap-2 sm:gap-3">
          <div
            className={`
              rounded-lg p-1.5 sm:p-2
              ${
                config.highlighted
                  ? "bg-primary/10 text-primary"
                  : "bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400"
              }
            `}
          >
            <Icon size={20} className="sm:w-6 sm:h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            {config.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
          {config.subtitle}
        </p>
      </div>

      <div className="flex-1">
        <h4 className="mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
          What's included
        </h4>
        <ul className="space-y-2.5 sm:space-y-3">
          {config.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 sm:gap-3">
              <Check
                size={16}
                className="mt-0.5 shrink-0 text-primary"
                strokeWidth={2.5}
              />
              <span className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <PrincingButtonLink
        variants={config.buttonVariant as "ghost" | "default" | "premium"}
        className="w-full text-sm sm:text-base py-2 sm:py-2.5"
      >
        Start now
      </PrincingButtonLink>
    </div>
  );
}
