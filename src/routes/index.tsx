import Features from "@/components/pages/main/Features";
import Hero from "@/components/pages/main/Hero";
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
    </div>
  );
}
