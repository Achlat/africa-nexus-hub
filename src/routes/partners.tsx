import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, TrendingUp, Globe2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Investors — World Compass Afric" },
      { name: "description", content: "Strategic partnerships, investor relations and corporate collaboration with World Compass Afric." },
      { property: "og:title", content: "Partners & Investors — World Compass Afric" },
      { property: "og:description", content: "Join the network shaping the next era of African opportunity." },
    ],
  }),
  component: PartnersPage,
});

const tracks = [
  { icon: TrendingUp, title: "Investor Relations", desc: "For sovereign funds, family offices and institutional capital seeking curated African deal flow.", cta: "Apply for access" },
  { icon: Handshake, title: "Strategic Alliances", desc: "For multinationals and African champions building cross-border partnerships at scale.", cta: "Propose alliance" },
  { icon: Globe2, title: "Corporate Collaboration", desc: "For organizations co-publishing research, hosting summits, or sponsoring intelligence.", cta: "Explore collaboration" },
];

function PartnersPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="relative container-x max-w-4xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">Partners & Investors</div>
            <h1 className="text-5xl md:text-7xl leading-[1.05]">
              Join the <span className="text-gradient-gold italic">network</span> behind African growth.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              Three structured tracks for institutions ready to engage the continent at the highest level.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.title} delay={i * 0.08}>
                <article className="h-full p-10 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all">
                  <div className="w-14 h-14 grid place-items-center rounded-2xl bg-gradient-gold text-navy mb-8">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{t.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{t.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-navy transition-colors">
                    {t.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
