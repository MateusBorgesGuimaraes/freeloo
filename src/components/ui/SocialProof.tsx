import { type LucideProps } from "lucide-react";

type SocialProofProps = {
  text: string;
  icon: React.ComponentType<LucideProps>;
};

export default function SocialProof({ text, icon: Icon }: SocialProofProps) {
  return (
    <div className="w-full py-4 px-3 rounded-md bg-muted text-muted-foreground flex flex-col items-center">
      <Icon className="w-8 h-9" />
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
}
