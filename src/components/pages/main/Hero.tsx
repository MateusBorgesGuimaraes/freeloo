import ButtonLink from "@/components/ui/ButtonLink";
import SocialProof from "@/components/ui/SocialProof";
import { useTheme } from "@/contexts/theme-context";
import { Banknote, CreditCard, Users } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="wrapper flex-col flex gap-3.5 items-center px-4 py-8 md:py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight">
        Manage your clients and <br className="hidden sm:block" /> projects all
        in one place.
      </h1>

      <p className="text-center text-sm sm:text-base md:text-lg text-foreground/80 max-w-2xl">
        A complete platform for freelancers and small businesses{" "}
        <br className="hidden sm:block" /> to organize their services, payments,
        and files.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 pt-3.5 w-full sm:w-auto">
        <ButtonLink
          link="/"
          className="py-2 px-6 sm:px-8 text-lg sm:text-xl md:text-2xl w-full sm:w-auto justify-center"
        >
          Start Free
          <svg
            className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </ButtonLink>

        <ButtonLink
          variants="ghost"
          link="/"
          className="py-2 px-6 sm:px-8 text-lg sm:text-xl md:text-2xl w-full sm:w-auto justify-center"
        >
          View Demo
        </ButtonLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 w-full max-w-4xl">
        <SocialProof text="free forever" icon={Banknote} />
        <SocialProof text="No card required" icon={CreditCard} />
        <SocialProof text="5 clients included" icon={Users} />
      </div>

      <div className="w-full max-w-6xl mt-6 sm:mt-8 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl">
        <img
          src={theme === "light" ? "./dash-1.png" : "./dash-1-dark.png"}
          alt="Dashboard preview"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
