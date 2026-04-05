import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "The Conversation", href: "#hero" },
  { label: "Survey", href: "#survey" },
  { label: "Join Waitlist", href: "#waitlist" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button onClick={() => scrollTo("#hero")} className="heading-display text-gold text-sm tracking-widest">
          The Conversation
        </button>
        <div className="hidden gap-6 md:flex">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm text-muted-foreground transition-colors hover:text-gold">
              {l.label}
            </button>
          ))}
        </div>
        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="flex flex-col gap-3 border-t border-border px-4 py-4 md:hidden">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-sm text-muted-foreground transition-colors hover:text-gold">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
