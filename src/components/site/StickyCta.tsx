import { Link } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-medium text-navy shadow-gold hover:scale-[1.03] transition-transform animate-fade-in"
    >
      <Calendar className="w-4 h-4" />
      Book Consultation
    </Link>
  );
}
