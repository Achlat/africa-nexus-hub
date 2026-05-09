import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — World Compass Afric" },
      { name: "description", content: "Schedule a confidential consultation with a senior partner. We respond within 24 hours." },
      { property: "og:title", content: "Book a Consultation — World Compass Afric" },
      { property: "og:description", content: "Begin your strategic engagement with World Compass Afric." },
    ],
  }),
  component: ContactPage,
});

const interests = ["Market Entry", "Investment Facilitation", "Partnership Brokerage", "Corporate Advisory", "Intelligence & Research", "Other"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="relative pt-40 pb-12 md:pt-48 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="relative container-x max-w-4xl">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">Book Consultation</div>
            <h1 className="text-5xl md:text-7xl leading-[1.05]">
              A confidential <span className="text-gradient-gold italic">conversation</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/70 leading-relaxed">
              Tell us about your mandate. A senior partner will respond personally within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container-x grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl bg-card border border-border shadow-elegant p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 grid place-items-center rounded-full bg-emerald text-white mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Inquiry received.</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">A senior partner will reach out personally within 24 hours.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" required />
                    <Field label="Company" name="company" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Work email" name="email" type="email" required />
                    <Field label="Country / market" name="country" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Area of interest</label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {interests.map((i) => (
                        <label key={i} className="cursor-pointer">
                          <input type="radio" name="interest" value={i} className="peer sr-only" />
                          <span className="inline-block px-4 py-2 rounded-full text-sm border border-border peer-checked:bg-navy peer-checked:text-white peer-checked:border-navy transition-colors hover:border-navy">
                            {i}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">Briefly describe your mandate</label>
                    <textarea
                      required
                      rows={5}
                      className="mt-3 w-full rounded-2xl px-4 py-3.5 bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      placeholder="The strategic challenge or opportunity you'd like to discuss..."
                    />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-navy shadow-gold hover:scale-[1.02] transition-transform">
                    Submit inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-muted-foreground">By submitting, you consent to a confidential follow-up. Your information is never shared.</p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-3xl bg-navy text-white">
              <div className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-6">Direct lines</div>
              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-gold mt-0.5" /><div><div className="text-white/60 text-xs">Email</div>contact@worldcompassafric.com</div></li>
                <li className="flex items-start gap-3"><Phone className="w-5 h-5 text-gold mt-0.5" /><div><div className="text-white/60 text-xs">Phone</div>+225 00 00 00 00</div></li>
                <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-gold mt-0.5" /><div><div className="text-white/60 text-xs">Offices</div>Abidjan · Lagos · Nairobi · Paris</div></li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-border bg-card">
              <div className="text-xs uppercase tracking-[0.2em] text-emerald font-semibold mb-3">Response time</div>
              <p className="text-sm text-muted-foreground">All inquiries reviewed by senior partners within 24 hours. Engagements begin under NDA.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full rounded-2xl px-4 py-3.5 bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}
