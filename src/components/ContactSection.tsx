import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Send } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contato" className="section-padding bg-surface">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
            Quer saber mais sobre nosso projeto? Envie uma mensagem.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {submitted ? (
            <div className="mt-10 rounded-xl bg-primary/10 p-8 text-center">
              <p className="text-lg font-semibold text-primary">Mensagem enviada!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Obrigado pelo interesse. Entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button type="submit" className="btn-primary w-full gap-2 text-base">
                <Send size={16} />
                Enviar mensagem
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
