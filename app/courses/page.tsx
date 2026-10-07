import type { Metadata } from "next";
import { ArrowRight, GraduationCap, Layers } from "lucide-react";
import PageHero from "@/components/PageHero";
import CourseExplorer from "@/components/CourseExplorer";
import { courses } from "@/lib/data";
import { ButtonLink } from "@/components/ui/button";
import { CTASection } from "@/components/ui/cta-section";
import { Container, Section, SectionHeader } from "@/components/ui/section";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/text";
import { GridPattern } from "@/components/ui/background";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "The FutureX four-level AI certification ladder: generative AI foundations, RAG systems, AI agents & deployment, foundation models & FMOps, and AWS AI practitioner readiness.",
};

const levelNotes = [
  { n: 1, title: "Use AI expertly", body: "LLM fundamentals, prompting, and applied tools. No coding required to begin." },
  { n: 2, title: "Build with AI", body: "Python, embeddings, vector search, and production-shaped RAG pipelines." },
  { n: 3, title: "Ship AI products", body: "Agents with tools and memory, deployed behind real APIs and monitored." },
  { n: 4, title: "Operate at scale", body: "Fine-tuning, serving, FMOps, and cloud-scale GenAI on AWS." },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        icon={<GraduationCap />}
        title="Five programs. Four levels. One ladder."
        description="Each level hands off to the next. Start where you are, climb to production. Every program includes hands-on labs, a capstone, and career support."
        facts={[
          { label: "Programs", value: String(courses.length) },
          { label: "Levels", value: "4" },
          { label: "Format", value: "Labs + capstone" },
          { label: "Fees & dates", value: "On enquiry" },
        ]}
        compact
      />

      {/* How levels connect */}
      <Section className="pt-8 md:pt-10">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-4">
            {levelNotes.map((l, i) => (
              <StaggerItem key={l.n} className="relative">
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
                      {l.n}
                    </span>
                    {i < levelNotes.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 text-sky-dim md:block" aria-hidden />
                    )}
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-white">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body-soft">{l.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Explorer */}
      <Section tone="paper">
        <GridPattern size={56} mask="radial-gradient(ellipse 60% 40% at 50% 0%, #000 10%, transparent 100%)" />
        <Container className="relative">
          <SectionHeader
            eyebrow="All programs"
            icon={<Layers />}
            title="Pick a level, or browse the whole ladder."
          />
          <FadeIn className="mt-10" delay={0.1}>
            <CourseExplorer />
          </FadeIn>
        </Container>
      </Section>

      <CTASection
        eyebrow="Placement guidance"
        title="Not sure which level fits?"
        description="Tell us your background and goals and we will place you on the right rung, and share fees and batch details."
        primary={{ label: "Get placement guidance", href: "/contact" }}
      />
    </>
  );
}
