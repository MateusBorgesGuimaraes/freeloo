import type React from "react";

type TitleProps = {
  children: React.ReactNode;
  variants?: "lg" | "md";
};

export default function Title({ children, variants = "md" }: TitleProps) {
  const titleStyles = {
    lg: "text-4xl gap-0.5",
    md: "text-2xl gap-0.5",
  };

  const decStyles = {
    lg: "w-4 h-4 ",
    md: "w-2 h-2 ",
  };

  return (
    <h1 className={`flex items-center ${titleStyles[variants]}`}>
      <span className={`rounded-full bg-primary ${decStyles[variants]}`}></span>
      {children}
    </h1>
  );
}
