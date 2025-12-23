import { type LucideProps } from "lucide-react";

type SocialProofProps = {
  text: string;
  icon: React.ComponentType<LucideProps>;
};

export default function SocialProof({ text, icon: Icon }: SocialProofProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl bg-linear-to-b from-muted/80 to-muted border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-linear-to-b from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative py-6 px-4 flex flex-col items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl scale-75 group-hover:scale-100 transition-transform duration-500" />
          <div className="relative p-3 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300">
            <Icon className="w-6 h-6 text-accent-foreground group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <p className="text-base font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
          {text}
        </p>
      </div>
    </div>
  );
}
