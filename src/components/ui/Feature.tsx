import { type LucideProps } from "lucide-react";

type FeatureProps = {
  title: string;
  content: string;
  icon: React.ComponentType<LucideProps>;
};

export default function Feature({ content, title, icon: Icon }: FeatureProps) {
  return (
    <div className="group w-full rounded-2xl border border-border bg-background py-8 px-8 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 rounded-xl bg-linear-to-b from-primary/10 to-accent/10 transition-all duration-300 group-hover:from-primary/15 group-hover:to-accent/15">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>

        <p className="text-center text-muted-foreground leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}
