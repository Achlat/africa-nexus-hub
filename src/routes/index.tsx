import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, BarChart3, Briefcase, Building2, Compass, Globe2, Handshake, LineChart, Quote, Rocket, ShieldCheck, Sparkles, Star, TrendingUp, Users } from "lucide-react";
import heroSkyline from "@/assets/hero-skyline.jpg";
import africaNetwork from "@/assets/africa-network.jpg";
import executiveMeeting from "@/assets/executive-meeting.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { StickyCta } from "@/components/site/StickyCta";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const stats = [
  { value: "$4.2B+", label: "Capital facilitated across African markets" },
  { value: "27", label: "Active markets covered on the continent" },
  { value: "180+", label: "Cross-border partnerships brokered" },
  { value: "94%", label: "Client retention among Fortune 500 partners" },
];

const services = [
  { icon: Globe2, title: "Market Entry Strategy", desc: "Sovereign-grade due diligence and entry roadmaps for high-growth African economies." },
  { icon: TrendingUp, title: "Investment Facilitation", desc: "Connect institutional capital with vetted opportunities across 27 African markets." },
  { icon: Handshake, title: "Partnership Brokerage", desc: "Strategic alliances between multinationals, governments, and African champions." },
  { icon: Briefcase, title: "Corporate Advisory", desc: "Board-level counsel on M&A, regulation, geopolitics and structural transformation." },
  { icon: BarChart3, title: "Africa Intelligence", desc: "Proprietary data, market signals and executive briefings on continental opportunity." },
  { icon: Rocket, title: "Expansion Services", desc: "Operational architecture, talent and infrastructure for scaling on the continent." },
];

const logos = ["AfDB", "Standard Bank", "MTN Group", "Ecobank", "Dangote", "Orange", "Sanlam", "Sonatrach"];

const testimonials = [
  { quote: "World Compass Afric delivered a market entry blueprint that compressed our Africa launch by 18 months. Unmatched intelligence and access.", name: "Camille Dupont", role: "Managing Partner, Meridian Capital" },
  { quote: "Their network opened doors at the highest level. The most sophisticated advisory we have engaged on the continent — period.", name: "Olumide Adeyemi", role: "Group CEO, Sahara Industries" },
  { quote: "A rare blend of African nuance and global discipline. They have become an extension of our investment committee.", name: "Anika Sharma", role: "Head of Emerging Markets, Helix Sovereign Fund" },
];

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <StickyCta />

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img src={heroSkyline} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy" />
        </div>

        <div className="relative container-x pt-40 pb-32 md:pt-48 md:pb-44">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-8">
              <Sparkles className="w-3.5 h-3.5" /> Strategic Consulting · Africa & Beyond
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] font-medium">
              Architecting Africa's
              <br />
              <span className="text-gradient-gold italic font-normal">next frontier</span>
              <br />
              of opportunity.
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
              We partner with governments, multinationals and institutional investors
              to unlock cross-border growth across 27 African markets — through
              intelligence, capital, and elite networks.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"
              >
                Book Executive Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white/90 hover:bg-white/5 transition-colors"
              >
                Explore Practice
              </Link>
            </div>

            <div className="mt-20 flex items-center gap-6 text-xs text-white/50 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> Vetted Partners</span>
              <span className="hidden sm:flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> Sovereign-grade</span>
              <span className="hidden md:flex items-center gap-2"><Star className="w-4 h-4 text-gold" /> Fortune 500 Trust</span>
            </div>
          </motion.div>
        </div>

        {/* logo strip */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 backdrop-blur-sm bg-navy/40">
          <div className="container-x py-6 overflow-hidden">
            <div className="flex items-center gap-12 md:gap-16 text-white/40 text-sm tracking-[0.25em] uppercase whitespace-nowrap">
              {logos.concat(logos).map((l, i) => (
                <span key={i} className="font-medium">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-24 md:py-32 bg-background">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald font-semibold mb-4">By the numbers</div>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Measurable impact across the continent's most consequential deals.
            </h2>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {stats.map((s, i) => (
              <Reveal key={s.value} delay={i * 0.08} className="bg-background p-8 md:p-10">
                <div className="text-4xl md:text-5xl font-display text-navy">{s.value}</div>
                <div className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-[18ch]">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-24 md:py-36 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald/30 blur-[160px]" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/20 blur-[180px]" />
        </div>

        <div className="relative container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <Reveal className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Practice Areas</div>
              <h2 className="text-4xl md:text-5xl leading-tight">
                A full-stack advisory built for the continent's complexity.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gold hover:text-white transition-colors">
                View all services <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <Link
                    to="/services"
                    className="group relative block h-full p-8 rounded-3xl glass hover:bg-white/[0.07] transition-all duration-500"
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/10 transition-all duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 grid place-items-center rounded-2xl bg-gradient-gold text-navy mb-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-medium mb-3">{s.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                        Engage <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* AFRICA NETWORK */}
      <section className="relative py-24 md:py-36 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-emerald font-semibold mb-4">Pan-African footprint</div>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              An intelligence network spanning <span className="italic text-emerald">27 African economies</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From Lagos to Nairobi, Casablanca to Cape Town — our on-the-ground
              partners, regulators and operators give you real signal where others
              rely on noise.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: Building2, label: "12 Regional offices" },
                { icon: Users, label: "400+ Senior advisors" },
                { icon: LineChart, label: "Live market signal" },
                { icon: Compass, label: "Sovereign access" },
              ].map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-card">
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-navy text-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium">{f.label}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img src={africaNetwork} alt="Global network of African markets" loading="lazy" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 md:py-36 bg-secondary">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald font-semibold mb-4">Trusted by leadership</div>
            <h2 className="text-4xl md:text-5xl leading-tight">
              The room where the continent's largest decisions get made.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <article className="h-full p-8 rounded-3xl bg-card border border-border shadow-soft flex flex-col">
                  <Quote className="w-8 h-8 text-gold mb-6" />
                  <p className="text-base leading-relaxed text-foreground/90 flex-1">{t.quote}</p>
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHT FEATURE */}
      <section className="relative py-24 md:py-36 bg-background overflow-hidden">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald font-semibold mb-4">Executive Briefing</div>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              The 2026 African Opportunity Index.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our flagship report — used by the boards of sovereign funds and
              global multinationals — maps the next decade of capital flows,
              regulatory shifts, and continental champions.
            </p>
            <Link
              to="/insights"
              className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white hover:bg-navy/90 transition-colors"
            >
              Download the report <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={executiveMeeting} alt="Executive boardroom" loading="lazy" className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gold/15 blur-[160px]" />
        <div className="relative container-x text-center max-w-3xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl leading-tight">
              Begin your <span className="text-gradient-gold italic">strategic engagement</span>.
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Schedule a confidential consultation with our senior partners.
              We respond within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform"
              >
                Book Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                Read Insights
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
