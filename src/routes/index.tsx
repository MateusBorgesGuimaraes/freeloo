import Cta from "@/components/pages/main/Cta";
import Features from "@/components/pages/main/Features";
import Hero from "@/components/pages/main/Hero";
import Pricing from "@/components/pages/main/Pricing";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <div className="pt-12">
        <Hero />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <Cta />
      </div>
    </div>
  );
}
