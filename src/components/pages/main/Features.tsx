import Feature from "@/components/ui/Feature";
import Title from "@/components/ui/Title";
import {
  BarChart3,
  Files,
  Lock,
  PiggyBank,
  Briefcase,
  UsersRound,
} from "lucide-react";

export default function Features() {
  const featuresList = [
    {
      title: "Customer Management",
      content:
        "Organize all your clients with complete information and history.",
      icon: UsersRound,
    },
    {
      title: "Service Control",
      content:
        "Manage projects with status, deadlines, and values in a visual Kanban board.",
      icon: Briefcase,
    },
    {
      title: "Simplified Finance",
      content:
        "Control payments, view billing, and know how much is left to receive.",
      icon: PiggyBank,
    },
    {
      title: "Centralized Files",
      content: "Securely store contracts, briefs, and documents.",
      icon: Files,
    },
    {
      title: "Smart Dashboard",
      content: "Visualize metrics and make decisions based on real data.",
      icon: BarChart3,
    },
    {
      title: "Safe and Private",
      content: "Your data is protected with encryption and automatic backups.",
      icon: Lock,
    },
  ];

  return (
    <section className="wrapper flex flex-col gap-8 px-4 py-8 md:py-12">
      <div className="self-center">
        <Title variants="lg">Everything you need to grow your business.</Title>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto w-full">
        {featuresList.map(({ content, icon, title }) => (
          <Feature key={title} title={title} icon={icon} content={content} />
        ))}
      </div>
    </section>
  );
}
