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
    default: "bg-primary hover:bg-primary-hover dark:text-accent",
    ghost:
      "border border-accent-foreground text-accent-foreground hover:text-muted-foreground",
  };
  return (
    <a
      {...props}
      className={`py-1 inline-block px-4 rounded-md font-semibold transition cursor-pointer ${buttonStyles[variants]}  ${className}`}
    >
      {children}
    </a>
  );
}
