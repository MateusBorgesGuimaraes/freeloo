type PrincingButtonLink = {
  variants: "ghost" | "default" | "premium";
  className: string;
  children: React.ReactNode;
};

export default function PrincingButtonLink({
  variants,
  className,
  children,
}: PrincingButtonLink) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";
  const variantClasses = {
    ghost: "border-2 border-border text-foreground hover:bg-secondary",
    default:
      "bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg hover:shadow-xl",
    premium:
      "bg-accent text-accent-foreground hover:bg-accent-hover shadow-lg hover:shadow-2xl",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variants]} ${className}`}
    >
      {children}
    </button>
  );
}
