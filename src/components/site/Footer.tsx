import { Link } from "@tanstack/react-router";
import { Compass, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white/80">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="grid place-items-center w-10 h-10 rounded-full bg-gradient-gold">
              <Compass className="w-5 h-5 text-navy" strokeWidth={2.2} />
            </div>
            <div>
              <div className="text-base font-semibold text-white">World Compass</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Afric</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-xs">
            Africa's premier strategic consulting firm — bridging international
            capital, intelligence, and opportunity.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Practice</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="hover:text-white">Market Entry</Link></li>
            <li><Link to="/services" className="hover:text-white">Investment Facilitation</Link></li>
            <li><Link to="/services" className="hover:text-white">Partnership Brokerage</Link></li>
            <li><Link to="/services" className="hover:text-white">Corporate Advisory</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Company</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/insights" className="hover:text-white">Insights</Link></li>
            <li><Link to="/partners" className="hover:text-white">Partners</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Headquarters</div>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-gold" /> Abidjan · Lagos · Nairobi · Paris</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-gold" /> contact@worldcompassafric.com</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-gold" /> +225 00 00 00 00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} World Compass Afric. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
