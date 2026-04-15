import { AnimatedSection } from "./AnimatedSection";
import { DollarSign, Leaf, Zap } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Redução de Custos",
    desc: "Diminua gastos com manutenção corretiva em até 40% através da previsão inteligente de falhas.",
    stat: "40%",
    statLabel: "economia",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    desc: "Menos desperdício de peças e energia. Operações mais eficientes significam menor impacto ambiental.",
    stat: "30%",
    statLabel: "menos resíduos",
  },
  {
    icon: Zap,
    title: "Eficiência Operacional",
    desc: "Aumente a disponibilidade dos seus equipamentos e otimize cada etapa do processo produtivo.",
    stat: "95%",
    statLabel: "uptime",
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Benefícios</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Resultados reais para sua operação industrial.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={0.1 * i}>
              <div className="group relative overflow-hidden rounded-xl bg-card p-8 text-center transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <b.icon size={28} />
                </div>
                <div className="mt-4 text-3xl font-extrabold gradient-text">{b.stat}</div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {b.statLabel}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
