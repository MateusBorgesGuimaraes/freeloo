type PrincingButtonLinkProps = {
  variants: "ghost" | "default" | "premium";
  className?: string;
  children: React.ReactNode;
};

export default function PrincingButtonLink({
  variants,
  className = "",
  children,
}: PrincingButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

  const variantClasses = {
    ghost: `
      border border-stone-300 dark:border-stone-700
      text-stone-700 dark:text-stone-300
      hover:bg-stone-100 dark:hover:bg-stone-900
    `,
    default: `
      bg-primary text-primary-foreground
      hover:bg-primary-hover
    `,
    premium: `
      border border-primary
      text-primary
      hover:bg-primary/10
    `,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variants]} ${className}`}
    >
      {children}
    </button>
  );
}
