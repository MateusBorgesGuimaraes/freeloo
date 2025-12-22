import ButtonLink from "@/components/ui/ButtonLink";
import SocialProof from "@/components/ui/SocialProof";
import { useTheme } from "@/contexts/theme-context";
import {
  BanknoteXIcon,
  CreditCardIcon,
  PersonStandingIcon,
} from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section className="wrapper flex-col flex gap-3.5 items-center">
      <h1 className="text-5xl">
        Manage your clients and <br /> projects all in one place.
      </h1>
      <p>
        A complete platform for freelancers and small businesses <br /> to
        organize their services, payments, and files.
      </p>
      <div className="flex items-center gap-5 pt-3.5">
        <ButtonLink href="/" className="py-2 px-8 text-2xl">
          Start Free
        </ButtonLink>

        <ButtonLink variants="ghost" href="/" className="py-2 px-8 text-2xl">
          View Demo
        </ButtonLink>
      </div>
      <div className="grid grid-cols-[repeat(3,minmax(220px,1fr))] gap-4 mt-4">
        <SocialProof text="free foverer" icon={BanknoteXIcon} />
        <SocialProof text="No card required" icon={CreditCardIcon} />
        <SocialProof text="5 clients included" icon={PersonStandingIcon} />
      </div>

      <div className="h-125 overflow-hidden rounded-2xl">
        <img
          src={theme === "light" ? "./dash-1.png" : "./dash-1-dark.png"}
          className="object-cover"
        />
      </div>
    </section>
  );
}
