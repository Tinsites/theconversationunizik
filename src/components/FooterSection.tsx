import { Instagram, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="footer" className="border-t border-border px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="heading-display mb-2 text-lg text-gold">The Conversation</h3>
        <p className="mb-6 text-sm text-muted-foreground">The Roundtable of Lived and Shared Wisdom</p>

        <div className="mb-6 flex items-center justify-center gap-6">
          <a href="https://www.instagram.com/theconversation_community" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-gold" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="mailto:theconversation2026@gmail.com" className="text-muted-foreground transition-colors hover:text-gold" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          A student-led initiative at Nnamdi Azikiwe University, Awka.
        </p>
      </div>
    </footer>
  );
}
