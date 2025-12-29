import ButtonLink from "@/components/ui/ButtonLink";

export default function Cta() {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="wrapper">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">
              Get started today
            </span>
          </div>

          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Ready to organize
            <br />
            <span className="text-primary">your business?</span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400 md:text-xl">
            Join hundreds of freelancers and small businesses that have already
            transformed their management. No credit card required. No
            commitment.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <ButtonLink>
              Start Free
              <svg
                className="ml-2 h-5 w-5"
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

            <ButtonLink variants="ghost">I already have an account</ButtonLink>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-stone-600 dark:text-stone-400">
            {["Free forever", "No credit card", "Cancel whenever you want"].map(
              (text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{text}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
