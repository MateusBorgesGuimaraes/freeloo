import { type LucideProps } from "lucide-react";

type FeatureProps = {
  title: string;
  content: string;
  icon: React.ComponentType<LucideProps>;
};

export default function Feature({ content, title, icon: Icon }: FeatureProps) {
  return (
    <div
      className="
        group w-full
        rounded-2xl
        border border-stone-200 dark:border-stone-800
        bg-background
        px-8 py-8
        transition-colors duration-200
        hover:border-primary/40
      "
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div
          className="
            rounded-xl p-4
            bg-stone-100 dark:bg-stone-900
            transition-colors duration-200
            group-hover:bg-primary/10
          "
        >
          <Icon
            className="
              h-8 w-8
              text-stone-700 dark:text-stone-300
              transition-colors duration-200
              group-hover:text-primary
            "
          />
        </div>

        <h3 className="text-lg font-semibold text-foreground">{title}</h3>

        <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
          {content}
        </p>
      </div>
    </div>
  );
}
