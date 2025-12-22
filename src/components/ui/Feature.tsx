import { type LucideProps } from "lucide-react";

type FeatureProps = {
  title: string;
  content: string;
  icon: React.ComponentType<LucideProps>;
};

export default function Feature({ content, title, icon: Icon }: FeatureProps) {
  return (
    <div className="w-full flex flex-col items-center border border-dashed border-subtle rounded-xl py-6 px-12 gap-3">
      <div className="flex flex-col items-center text-primary gap-2">
        <Icon />
        <h3 className="text-accent-foreground">{title}</h3>
      </div>
      <p className="text-balance text-muted-foreground">{content}</p>
    </div>
  );
}
