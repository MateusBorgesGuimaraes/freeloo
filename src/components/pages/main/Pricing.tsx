import PlanCard from "@/components/ui/PlanCard";
import Title from "@/components/ui/Title";

export default function Pricing() {
  return (
    <div className="wrapper flex flex-col items-center py-6">
      <Title variants="lg"> Choose your plan</Title>
      <div className="pt-8 grid grid-cols-[repeat(3,minmax(280px,1fr))] gap-4">
        <PlanCard variants="free" />
        <PlanCard variants="pro" />
        <PlanCard variants="deluxe" />
      </div>
    </div>
  );
}
