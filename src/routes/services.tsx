import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Briefcase, Globe2, Handshake, LineChart, Rocket, TrendingUp, Building2, Users } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { StickyCta } from "@/components/site/StickyCta";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — World Compass Afric" },
      { name: "description", content: "Market entry, investment facilitation, partnership brokerage, corporate advisory and intelligence services across African markets." },
      { property: "og:title", content: "Services — World Compass Afric" },
      { property: "og:description", content: "A full-stack advisory built for the African continent." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Globe2, title: "Market Entry Strategy", desc: "Sovereign-grade due diligence, regulatory navigation and entry roadmaps for high-growth African economies.", points: ["Country & sector selection", "Regulatory & compliance mapping", "Entity setup & licensing"] },
  { icon: Briefcase, title: "Business Development", desc: "Pipeline construction and revenue strategy tailored to fragmented but high-velocity markets.", points: ["GTM design", "Channel & distribution", "Enterprise sales enablement"] },
  { icon: TrendingUp, title: "Investment Facilitation", desc: "Connecting institutional capital with vetted opportunities across 27 African markets.", points: ["Deal sourcing & DD", "Co-investment structuring", "LP / GP matchmaking"] },
  { icon: LineChart, title: "Trade Expansion", desc: "Cross-border trade corridors leveraging AfCFTA and bilateral frameworks.", points: ["AfCFTA strategy", "Logistics architecture", "Trade finance"] },
  { icon: Handshake, title: "Partnership Brokerage", desc: "Strategic alliances between multinationals, governments and African champions.", points: ["JV structuring", "Government relations", "Strategic alliance design"] },
  { icon: Building2, title: "Corporate Advisory", desc: "Board-level counsel on M&A, regulation, geopolitics and structural transformation.", points: ["M&A advisory", "Board services", "Crisis & reputation"] },
  { icon: BarChart3, title: "African Opportunity Intelligence", desc: "Proprietary data and intelligence on continental opportunity, risk and capital flows.", points: ["Market signal reports", "Executive briefings", "Bespoke research"] },
  { icon: Rocket, title: "Startup & Enterprise Support", desc: "Operational architecture for ventures scaling on the continent.", points: ["Talent & ops", "Fundraising support", "Scale-up advisory"] },
  { icon: Users, title: "International Expansion", desc: "Helping African champions scale into global markets — Europe, MENA, Asia, Americas.", points: ["Outbound strategy", "Diaspora capital", "Global partnerships"] },
];

function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <StickyCta />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="relative container-x max-w-4xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">Our Practice</div>
            <h1 className="text-5xl md:text-7xl leading-[1.05]">
              A consulting practice <span className="text-gradient-gold italic">built for the continent</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              Nine integrated practice areas — designed to compress timelines,
              de-risk capital, and unlock the next decade of African growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.06}>
                <article className="h-full p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 grid place-items-center rounded-2xl bg-navy text-gold mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald hover:text-navy transition-colors">
                    Engage practice <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x text-center max-w-2xl">
          <Reveal>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">Ready to engage?</h2>
            <p className="text-lg text-muted-foreground mb-8">Tell us about your mandate. We'll match you with the right partner within 24 hours.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
              Book Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
