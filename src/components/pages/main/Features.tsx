import Feature from "@/components/ui/Feature";
import Title from "@/components/ui/Title";
import {
  ChartColumnDecreasingIcon,
  FilesIcon,
  LockIcon,
  PiggyBankIcon,
  ToolCaseIcon,
  UsersRoundIcon,
} from "lucide-react";

export default function Features() {
  const featuresList = [
    {
      title: "Customer Management",
      content:
        "Organize all your clients with complete information and history.",
      icon: UsersRoundIcon,
    },
    {
      title: "Service Control",
      content:
        "Manage projects with status, deadlines, and values in a visual Kanban board.",
      icon: ToolCaseIcon,
    },
    {
      title: "Simplified Finance",
      content:
        "Control payments, view billing, and know how much is left to receive.",
      icon: PiggyBankIcon,
    },
    {
      title: "Centralized Files",
      content: "Securely store contracts, briefs, and documents.",
      icon: FilesIcon,
    },
    {
      title: "Smart Dashboard",
      content: "Visualize metrics and make decisions based on real data.",
      icon: ChartColumnDecreasingIcon,
    },
    {
      title: "Safe and Private",
      content: "Your data is protected with encryption and automatic backups.",
      icon: LockIcon,
    },
  ];

  return (
    <section className="wrapper flex flex-col gap-8">
      <Title variants="lg">Everything you need to grow your business.</Title>
      <div className="grid grid-cols-[repeat(3,minmax(120px,1fr))] gap-4">
        {featuresList.map(({ content, icon, title }) => (
          <Feature key={title} title={title} icon={icon} content={content} />
        ))}
      </div>
    </section>
  );
}
