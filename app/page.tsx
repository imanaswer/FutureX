import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  BrainCircuit,
  Briefcase,
  Check,
  FlaskConical,
  GraduationCap,
  Layers,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Hero from "@/components/Hero";
import { courses, services } from "@/lib/data";
import { Accordion } from "@/components/ui/accordion";
import { Badge, Chip } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ChatMock } from "@/components/ui/chat-mock";
import { CTASection } from "@/components/ui/cta-section";
import { LevelLadder } from "@/components/ui/level-ladder";
import { Marquee } from "@/components/ui/marquee";
import { Container, Section, SectionHeader } from "@/components/ui/section";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/text";
import { Aurora, DotPattern, GridPattern, Glow, Hairline } from "@/components/ui/background";

const tools = Array.from(new Set(courses.flatMap((c) => c.tools)));
const roles = Array.from(new Set(courses.flatMap((c) => c.roles)));

const serviceIcons = [GraduationCap, Bot, BrainCircuit];

const posters = [
  { src: "/posters/tomorrow-is-futurex.jpeg", alt: "Tomorrow is FutureX" },
  { src: "/posters/learn-ai-the-right-way.jpeg", alt: "Learn AI the right way" },
  { src: "/posters/building-the-future.jpeg", alt: "We are building the future" },
  { src: "/posters/tomorrow-is-loading.jpeg", alt: "Tomorrow is loading" },
  { src: "/posters/genesis-of-a-new-epoch.jpeg", alt: "Genesis of a new epoch" },
  { src: "/posters/ready-to-press-the-key.jpeg", alt: "Ready to press the key" },
  { src: "/posters/holding-our-hands.jpeg", alt: "Holding our hands" },
];

const faqs = [
  {
    title: "Who are the FutureX programs for?",
    content:
      "School and college students who want practical AI skills, working professionals moving into AI and GenAI roles, and schools or parents evaluating VibeKids for grades 3 to 12. Each level has a clear entry point, so you start where you are.",
  },
  {
    title: "Do I need to know how to code?",
    content:
      "Not to begin. Level 1 is built around prompting and applied AI tools. Python and APIs enter at Level 2, when you start building retrieval systems, and the later levels go deeper into agents, deployment, and model operations.",
  },
  {
    title: "How are the four levels connected?",
    content:
      "Each program hands off to the next: Level 1 teaches you to use AI expertly, Level 2 to ground it in your own data, Level 3 to ship agents as real products, and Level 4 to fine-tune, serve, and operate foundation models, with an AWS track for cloud-scale GenAI.",
  },
  {
    title: "What do fees, duration, and batch dates look like?",
    content:
      "We share these on enquiry, because programs run differently for students, professionals, and institutions. Send us a note with your background and goals and we will come back with the specifics.",
  },
  {
    title: "What is VibeKids?",
    content:
      "VibeKids is our AI-powered learning system for grades 3 to 12. At its heart is Vibey, a Socratic AI engine that guides reasoning step by step instead of handing over answers. It is aligned with CBSE Circular Acad-15/2026, NEP 2020, and NCF-SE 2023.",
  },
];

const vibeyChat = [
  { from: "student" as const, text: "What's 3/4 of 240?" },
  { from: "vibey" as const, text: "Let's take it one quarter at a time. What is 1/4 of 240?" },
  { from: "student" as const, text: "240 ÷ 4… that's 60." },
  { from: "vibey" as const, text: "Right. So if one quarter is 60, how much would three quarters be?" },
  { from: "student" as const, text: "60 × 3 = 180!" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Tools & roles marquee */}
      <section className="relative border-y border-white/8 bg-ink py-10">
        <Container className="mb-6 flex items-center justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-dim">
            Tools and roles across the five programs
          </p>
        </Container>
        <div className="space-y-4">
          <Marquee duration="55s">
            {tools.map((t) => (
              <span
                key={t}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-body"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {t}
              </span>
            ))}
          </Marquee>
          <Marquee duration="70s" reverse>
            {roles.map((r) => (
              <span key={r} className="whitespace-nowrap text-sm font-medium text-sky-dim">
                {r}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* What we do — bento */}
      <Section>
        <GridPattern size={64} mask="radial-gradient(ellipse 50% 50% at 100% 0%, #000 10%, transparent 100%)" />
        <Container className="relative">
          <SectionHeader
            eyebrow="What we do"
            icon={<Layers />}
            title="Training, solutions, and research under one roof."
            description="Three practices, one goal: learners who can design, build, and deploy AI, not just talk about it."
          />

          <Stagger className="mt-14 grid gap-5 md:grid-cols-6">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              const span = i === 0 ? "md:col-span-6 lg:col-span-4" : "md:col-span-3 lg:col-span-2";
              return (
                <StaggerItem key={s.title} className={span}>
                  <SpotlightCard className="h-full" innerClassName="flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="font-mono text-[0.7rem] font-semibold text-sky-dim">0{i + 1}</span>
                    </div>
                    <h3 className="font-display mt-6 text-xl font-bold text-white md:text-2xl">{s.title}</h3>
                    <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-body-soft">{s.body}</p>
                    {i === 0 && (
                      <div className="mt-8 grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((l) => (
                          <div key={l} className="rounded-xl border border-white/8 bg-ink/50 p-3">
                            <div className="flex items-end gap-1" aria-hidden>
                              {[...Array(l)].map((_, k) => (
                                <span key={k} className="h-2 w-2 rounded-[3px] bg-accent" style={{ opacity: 0.35 + k * 0.2 }} />
                              ))}
                            </div>
                            <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-wider text-sky-dim">
                              Level {l}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-body">
                              {courses.find((c) => c.level === l)?.shortName}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                    <Link
                      href={i === 0 ? "/courses" : "/about"}
                      className="group/l mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-white transition-colors hover:text-accent"
                    >
                      {i === 0 ? "See the programs" : "Learn more"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/l:translate-x-1" aria-hidden />
                    </Link>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}

            <StaggerItem className="md:col-span-3">
              <SpotlightCard className="h-full" innerClassName="flex h-full flex-col p-7 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <FlaskConical className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display mt-6 text-xl font-bold text-white md:text-2xl">Hands-on labs and capstones</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-body-soft">
                  Every program ends in a project you can show: a shipped AI workflow, a grounded Q&amp;A
                  system, a deployed agent, or a fine-tuned and monitored model.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-body sm:grid-cols-2">
                  {["Guided labs each module", "Capstone with a live demo", "Mentor review", "Portfolio-ready output"].map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" aria-hidden /> {x}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </StaggerItem>

            <StaggerItem className="md:col-span-3">
              <SpotlightCard className="h-full" innerClassName="flex h-full flex-col p-7 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <Briefcase className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display mt-6 text-xl font-bold text-white md:text-2xl">Careers, not just certificates</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-body-soft">
                  Internships, industry projects, and placement support are built into the ladder, and
                  every level maps to roles that are hiring right now.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {roles.slice(0, 6).map((r) => (
                    <Chip key={r}>{r}</Chip>
                  ))}
                </div>
              </SpotlightCard>
            </StaggerItem>
          </Stagger>
        </Container>
      </Section>

      {/* Ladder */}
      <Section tone="paper" className="overflow-hidden">
        <Glow className="left-1/2 top-0 h-[30rem] w-[70rem] -translate-x-1/2 -translate-y-1/2" color="rgba(32,104,216,0.18)" />
        <Container className="relative">
          <SectionHeader
            eyebrow="The certification ladder"
            icon={<GraduationCap />}
            title="Four levels. One continuous climb."
            description="Start with tools, move on to building, then shipping, then operating models at scale. Each level maps to named job roles."
            action={
              <ButtonLink href="/courses" variant="secondary" arrow="right">
                All five programs
              </ButtonLink>
            }
          />
          <div className="mt-14">
            <LevelLadder />
          </div>
        </Container>
      </Section>

      {/* VibeKids */}
      <Section className="overflow-hidden">
        <DotPattern mask="radial-gradient(ellipse 50% 60% at 80% 50%, #000 10%, transparent 100%)" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <FadeIn>
                <Badge icon={<MessageSquareQuote />} className="mb-5">
                  VibeKids · Grades 3–12
                </Badge>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h2 className="font-display text-balance text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
                  An AI tutor that asks the next question instead of giving the answer.
                </h2>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mt-5 text-lg leading-relaxed text-body-soft">
                  Vibey, the Socratic engine inside VibeKids, guides students through reasoning step by
                  step. It maps how each child thinks, finds the foundational gap that is actually
                  blocking them, and routes practice there before coming back to today&apos;s problem.
                </p>
              </FadeIn>
              <Stagger className="mt-8 grid gap-3 sm:grid-cols-2" delay={0.2}>
                {[
                  { Icon: BrainCircuit, t: "Real-time cognitive mapping" },
                  { Icon: BookOpenCheck, t: "Aligned to CBSE, NEP 2020, NCF-SE 2023" },
                  { Icon: ShieldCheck, t: "Dashboards for schools, teachers, parents" },
                  { Icon: Sparkles, t: "AI literacy and virtual STEM labs" },
                ].map(({ Icon, t }) => (
                  <StaggerItem key={t}>
                    <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium text-body">
                      <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {t}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <FadeIn delay={0.3} className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/vibekids" arrow="right">
                  Explore VibeKids
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Book a school demo
                </ButtonLink>
              </FadeIn>
            </div>
            <div className="relative lg:col-span-6">
              <Glow className="inset-x-10 top-10 h-[70%]" color="rgba(52,198,247,0.22)" />
              <FadeIn delay={0.15} blur>
                <ChatMock messages={vibeyChat} subtitle="Socratic AI tutor · Class 6 Maths" />
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Poster gallery */}
      <section className="relative overflow-hidden bg-paper py-20 md:py-28">
        <Hairline className="absolute inset-x-0 top-0" />
        <Container>
          <SectionHeader
            eyebrow="From the studio"
            icon={<Sparkles />}
            title="Tomorrow is FutureX."
            description="A few pieces from the brand series that follows the FutureX community on social."
            action={
              <ButtonLink href="https://www.instagram.com/futurexailab" external variant="secondary" arrow="up">
                Follow on Instagram
              </ButtonLink>
            }
          />
        </Container>
        <div className="mt-14">
          <Marquee duration="90s" gap="1.25rem">
            {posters.map((p) => (
              <figure
                key={p.src}
                className="group relative aspect-[3/4] w-[16rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-ink-2 shadow-card transition-transform duration-500 hover:-translate-y-2 sm:w-[18rem]"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="288px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </Marquee>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Good to know"
                title="Questions people ask before they enquire."
                description="If yours is not here, the contact page is the quickest way to reach us."
              />
              <FadeIn delay={0.2} className="mt-8">
                <div className="border-gradient relative overflow-hidden rounded-2xl bg-ink-2/60 p-6">
                  <Aurora intensity={0.6} />
                  <div className="relative">
                    <p className="text-sm font-semibold text-white">Not sure which level fits?</p>
                    <p className="mt-2 text-sm leading-relaxed text-body-soft">
                      Tell us your background and goals and we will place you on the right rung.
                    </p>
                    <ButtonLink href="/contact" size="sm" className="mt-5" arrow="right">
                      Get placement guidance
                    </ButtonLink>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn className="lg:col-span-7" delay={0.1}>
              <Accordion items={faqs} />
            </FadeIn>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready to start climbing?"
        description="Tell us where you are today, a student, a professional, or a school, and we will map your route up the ladder."
        primary={{ label: "Start the conversation", href: "/contact" }}
        secondary={{ label: "Browse programs", href: "/courses" }}
      />
    </>
  );
}
