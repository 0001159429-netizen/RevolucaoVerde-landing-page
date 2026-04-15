import { AnimatedSection } from "./AnimatedSection";
import { Activity, BarChart3, Cpu, Wifi } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Diagnóstico Inteligente",
    desc: "Algoritmos de IA que identificam falhas em equipamentos antes que elas aconteçam.",
  },
  {
    icon: Activity,
    title: "Monitoramento em Tempo Real",
    desc: "Sensores e dashboards que acompanham a saúde das máquinas 24/7.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    desc: "Transformamos dados brutos em insights acionáveis para tomada de decisão.",
  },
  {
    icon: Wifi,
    title: "Integração IoT",
    desc: "Conectamos seus equipamentos à nuvem com protocolos industriais seguros.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Soluções completas para modernizar e otimizar sua operação industrial.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={0.1 * i}>
              <div className="group h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
