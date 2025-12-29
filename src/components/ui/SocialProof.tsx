import { type LucideProps } from "lucide-react";

type SocialProofProps = {
  text: string;
  icon: React.ComponentType<LucideProps>;
};

export default function SocialProof({ text, icon: Icon }: SocialProofProps) {
  return (
    <div
      className="
        group relative w-full
        rounded-xl border border-stone-200 dark:border-stone-800
        bg-background
        transition-colors duration-200
        hover:border-primary/40
      "
    >
      <div className="py-6 px-4 flex flex-col items-center gap-3">
        <div
          className="
            flex items-center justify-center
            rounded-full p-3
            bg-stone-100 dark:bg-stone-900
            transition-colors duration-200
            group-hover:bg-primary/10
          "
        >
          <Icon
            className="
              h-6 w-6
              text-stone-600 dark:text-stone-400
              transition-colors duration-200
              group-hover:text-primary
            "
          />
        </div>

        <p
          className="
            text-center text-sm font-medium
            text-stone-600 dark:text-stone-400
            transition-colors duration-200
            group-hover:text-foreground
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}
