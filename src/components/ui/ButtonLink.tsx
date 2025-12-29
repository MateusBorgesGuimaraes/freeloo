import type { AnchorHTMLAttributes } from "react";

type ButtonLinkProps = {
  children: React.ReactNode;
  variants?: "default" | "ghost";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink({
  children,
  variants = "default",
  ...props
}: ButtonLinkProps) {
  const { className } = props;
  const buttonStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary-hover",
    ghost:
      "border border-stone-300 font-semibold text-stone-700 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-900",
  };
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold transition-colors duration-200   ${buttonStyles[variants]}  ${className}`}
    >
      {children}
    </a>
  );
}
