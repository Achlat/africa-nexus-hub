import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — World Compass Afric" },
      { name: "description", content: "Executive briefings, market intelligence and the African Opportunity Index — used by the boards of sovereign funds and global multinationals." },
      { property: "og:title", content: "Insights — World Compass Afric" },
      { property: "og:description", content: "African business intelligence for global decision-makers." },
    ],
  }),
  component: InsightsPage,
});

const articles = [
  { tag: "Report", title: "The 2026 African Opportunity Index", date: "Jan 2026", excerpt: "Our flagship annual report mapping the next decade of continental growth, capital flows and champions." },
  { tag: "Briefing", title: "AfCFTA: The Trillion-Dollar Trade Corridor", date: "Dec 2025", excerpt: "How the African Continental Free Trade Area is rewriting cross-border industrial strategy." },
  { tag: "Analysis", title: "Sovereign Capital Returns to Lagos", date: "Nov 2025", excerpt: "Gulf and Asian sovereign funds are quietly building positions across Nigerian infrastructure." },
  { tag: "Interview", title: "In Conversation: The Next Generation of African CEOs", date: "Oct 2025", excerpt: "Six leaders shaping the continent's most consequential industries." },
  { tag: "Market Signal", title: "East Africa's Fintech Inflection", date: "Sep 2025", excerpt: "Why Nairobi is becoming the regulatory model for the continent — and what comes next." },
  { tag: "Briefing", title: "Energy Transition: Africa's Strategic Window", date: "Aug 2025", excerpt: "Critical minerals, green hydrogen and the continent's leverage in the global transition." },
];

function InsightsPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="relative container-x max-w-4xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">Insights</div>
            <h1 className="text-5xl md:text-7xl leading-[1.05]">
              Intelligence the <span className="text-gradient-gold italic">boardroom</span> reads.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              Briefings, reports and analysis from our senior partners — published for the executives, investors, and policymakers shaping Africa's future.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06}>
                <article className="group h-full p-8 rounded-3xl bg-card border border-border hover:border-gold/40 hover:shadow-elegant transition-all duration-500 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-emerald font-semibold">{a.tag}</span>
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {a.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 leading-snug group-hover:text-emerald transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy">
                    Read briefing <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-center">
        <div className="container-x max-w-xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl leading-tight mb-4">Subscribe to the Briefing.</h2>
            <p className="text-muted-foreground mb-8">Monthly intelligence delivered to senior decision-makers. No noise.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="executive@company.com"
                className="flex-1 rounded-full px-5 py-3.5 bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy/90 transition-colors">
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
