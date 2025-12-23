import { Check, Sparkles, Crown, Gift } from "lucide-react";
import PrincingButtonLink from "./PrincingButtonLink";

type PlanCardProps = {
  variants: "free" | "pro" | "deluxe";
};

export default function PlanCard({ variants }: PlanCardProps) {
  const planConfig = {
    free: {
      title: "FREE",
      subtitle: "Grátis para sempre",
      icon: Gift,
      benefits: ["5 clientes", "10 serviços", "Upload de arquivos"],
      buttonVariant: "ghost",
      bgClass: "bg-background",
      badge: null,
      iconBg: "bg-secondary",
      iconColor: "text-muted-foreground",
      titleColor: "text-foreground",
      borderColor: "border-border",
    },
    pro: {
      title: "PRO",
      subtitle: "Para negócios em crescimento",
      icon: Sparkles,
      benefits: [
        "50 clientes",
        "Serviços ilimitados",
        "Suporte prioritário",
        "Análises avançadas",
      ],
      buttonVariant: "default",
      bgClass: "bg-secondary",
      badge: "Mais Popular",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
      titleColor: "text-foreground",
      borderColor: "border-primary/30",
    },
    deluxe: {
      title: "DELUXE",
      subtitle: "Tudo que você precisa",
      icon: Crown,
      benefits: [
        "Clientes ilimitados",
        "Serviços ilimitados",
        "Suporte 24/7 Premium",
        "Integrações customizadas",
        "Opção white-label",
      ],
      buttonVariant: "premium",
      bgClass: "bg-accent/30",
      badge: "Melhor Valor",
      iconBg: "bg-accent",
      iconColor: "text-accent-foreground",
      titleColor: "text-foreground",
      borderColor: "border-accent",
    },
  };

  const config = planConfig[variants];
  const Icon = config.icon;

  return (
    <div
      className={`relative border-2 ${config.borderColor} p-8 rounded-2xl flex flex-col gap-6 min-h-96 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${config.bgClass} overflow-hidden group`}
    >
      {config.badge && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-2xl rounded-tr-xl text-sm font-bold shadow-lg">
          {config.badge}
        </div>
      )}

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`p-2 rounded-lg ${config.iconBg} shadow-md ${config.iconColor}`}
          >
            <Icon size={28} />
          </div>
          <h2 className={`text-3xl font-bold ${config.titleColor}`}>
            {config.title}
          </h2>
        </div>
        <p className="text-muted-foreground font-medium">{config.subtitle}</p>
      </div>

      <div className="relative z-10 grow">
        <h4
          className={`text-sm font-semibold uppercase tracking-wider mb-4 ${config.titleColor}`}
        >
          O que está incluído
        </h4>
        <ul className="space-y-3">
          {config.benefits.map((benefit, index) => (
            <li key={index} className="flex gap-3 items-start group/item">
              <div className="mt-1 bg-primary rounded-full p-1 shadow-md group-hover/item:scale-110 transition-transform">
                <Check
                  size={16}
                  className="text-primary-foreground"
                  strokeWidth={3}
                />
              </div>
              <span className="font-medium text-foreground/80 group-hover/item:text-foreground transition-colors">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-auto">
        <PrincingButtonLink
          variants={config.buttonVariant as "ghost" | "default" | "premium"}
          className="w-full"
        >
          COMEÇAR
        </PrincingButtonLink>
      </div>
    </div>
  );
}
