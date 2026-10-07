import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Aurora, GridPattern } from "@/components/ui/background";
import { BlurIn, FadeIn } from "@/components/ui/text";

export function CTASection({
  eyebrow = "Ready when you are",
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative bg-ink py-20 md:py-28">
      <Container>
        <FadeIn blur>
          <div className="border-gradient noise relative overflow-hidden rounded-[2rem] bg-ink-2/60 px-6 py-16 text-center sm:px-10 md:py-24">
            <Aurora intensity={1.2} />
            <GridPattern size={40} mask="radial-gradient(ellipse 60% 70% at 50% 100%, #000 20%, transparent 100%)" />
            <div className="relative mx-auto max-w-2xl">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </p>
              <BlurIn
                as="h2"
                text={title}
                className="font-display mt-4 text-balance text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl"
              />
              <p className="mt-5 text-pretty text-lg leading-relaxed text-body-soft">{description}</p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink href={primary.href} size="lg" arrow="right">
                  {primary.label}
                </ButtonLink>
                {secondary && (
                  <ButtonLink href={secondary.href} size="lg" variant="secondary">
                    {secondary.label}
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
