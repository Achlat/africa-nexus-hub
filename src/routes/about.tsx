import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import executiveMeeting from "@/assets/executive-meeting.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — World Compass Afric" },
      { name: "description", content: "Africa's premier strategic consulting firm — bridging international capital, intelligence and opportunity across 27 markets." },
      { property: "og:title", content: "About — World Compass Afric" },
      { property: "og:description", content: "The strategic compass for executives entering and scaling across Africa." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="relative container-x max-w-4xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">About</div>
            <h1 className="text-5xl md:text-7xl leading-[1.05]">
              The compass for <span className="text-gradient-gold italic">global capital</span> entering Africa.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              World Compass Afric is the trusted advisor to the executives,
              sovereign funds, and multinationals shaping the continent's next era.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-emerald font-semibold mb-4">Our Mandate</div>
            <h2 className="text-4xl leading-tight mb-6">Where intelligence meets access.</h2>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>Founded by senior operators across finance, government and industry, we have spent over a decade architecting the partnerships that move African economies forward.</p>
              <p>Our model is simple: combine the rigor of global consulting with the on-the-ground intelligence only earned through generations of relationships on the continent.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={executiveMeeting} alt="Senior partners in session" loading="lazy" className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald font-semibold mb-4">Principles</div>
            <h2 className="text-4xl md:text-5xl leading-tight">Discretion. Discipline. Deep access.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Discretion", d: "Every mandate is held in absolute confidence. Our reputation depends on it." },
              { n: "02", t: "Discipline", d: "We deliver outcomes — not decks. Every recommendation is execution-ready." },
              { n: "03", t: "Access", d: "Decades of trust open doors that capital alone cannot." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="p-8 rounded-3xl bg-card border border-border shadow-soft h-full">
                  <div className="text-sm text-gold font-display mb-4">{p.n}</div>
                  <h3 className="text-xl font-semibold mb-3">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white text-center">
        <div className="container-x max-w-2xl">
          <h2 className="text-4xl md:text-5xl leading-tight mb-6">Engage our partners.</h2>
          <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
