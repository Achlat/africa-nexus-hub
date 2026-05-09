import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const nav = [
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-x">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-elegant"
              : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-60 blur-md group-hover:opacity-100 transition-opacity" />
              <div className="relative grid place-items-center w-9 h-9 rounded-full bg-gradient-gold">
                <Compass className="w-5 h-5 text-navy" strokeWidth={2.2} />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-white">
                World Compass
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                Afric
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm text-white/75 hover:text-white transition-colors rounded-full"
                activeProps={{ className: "text-white bg-white/10" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-navy shadow-gold hover:scale-[1.02] transition-transform"
            >
              Book Consultation
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-3xl glass p-4 space-y-1 animate-fade-in">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-white/85 rounded-2xl hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block text-center rounded-2xl bg-gradient-gold px-4 py-3 text-sm font-medium text-navy mt-2"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
