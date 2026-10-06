/*
DIRECTION CONTRACT
THESIS: AI education as an ascent — one continuous trajectory from Level 1 to
Level 4. Refuses the category default: three equal neon cards on near-black.
OWN-WORLD: "Flight Path" — mission-control dark (ink #070B14, sky-blue lines,
accent signals) over engineering-paper light (warm #F7F5F0, blueprint grid,
stamped cards). Bricolage Grotesque display, Schibsted Grotesk body,
JetBrains Mono strictly for data. Recognizable with all content removed.
STORY: a learner lands in mission control, sees the ascent path, understands
"I can climb from first prompt to production", and enquires.
FIRST VIEWPORT: dark hero — headline left at display scale, live telemetry
column right, ascent trajectory drawing beneath, accent "Explore programs" CTA.
FORM: hybrid dark-hero/light-content (user-pinned), self-derived direction
(concept-seed returned a degraded empty roll; noted in DESIGN.md).
*/
import type { Metadata } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});
const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "FutureX AI Lab — AI Education, Certification & Careers",
    template: "%s — FutureX AI Lab",
  },
  description:
    "FutureX AI Lab, an initiative of G-TEC Education: a four-level AI certification ladder from generative AI foundations to foundation-model operations, plus VibeKids Socratic AI learning for grades 3–12.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${schibsted.variable} ${jetbrains.variable}`}>
        <Preloader />
        <SmoothScroll>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
