import PlanCard from "@/components/ui/PlanCard";
import Title from "@/components/ui/Title";

export default function Pricing() {
  return (
    <div className="wrapper flex flex-col items-center py-6 px-4">
      <div className="self-center">
        <Title variants="lg">Choose your plan</Title>
      </div>

      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
        <PlanCard variants="free" />
        <PlanCard variants="pro" />
        <PlanCard variants="deluxe" />
      </div>
    </div>
  );
}
