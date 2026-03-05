import { Instagram, Phone, Send } from "lucide-react";
import FadeInSection from "@/components/landing/FadeInSection";

export default function ContactsSection() {
  return (
    <section id="contacts" className="px-6 py-24 lg:py-32">
      <div className="container mx-auto max-w-3xl text-center">
        <FadeInSection>
          <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Связаться
          </p>
          <h2 className="mb-12 font-display text-4xl font-light text-foreground sm:text-5xl">Контакты</h2>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-blush flex items-center gap-2 font-body"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blush flex items-center gap-2 font-body"
            >
              <Send size={18} />
              Telegram
            </a>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <a
            href="tel:+375298033681"
            className="mb-12 inline-flex items-center gap-2 font-body text-lg text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone size={18} />
            +375(29)803-36-81
          </a>
        </FadeInSection>

        <FadeInSection delay={300}>
          <div className="pt-4">
            <a href="#contacts" className="btn-blush px-12 py-4 font-body text-base">
              Запись
            </a>
          </div>
        </FadeInSection>
      </div>

      <div className="container mx-auto mt-24 max-w-5xl border-t border-border pt-8">
        <div className="flex flex-col items-center justify-between gap-4 font-body text-xs text-muted-foreground sm:flex-row">
          <span>© 2026 Nail Master Минск</span>
          <span>@your_instagram</span>
        </div>
      </div>
    </section>
  );
}
