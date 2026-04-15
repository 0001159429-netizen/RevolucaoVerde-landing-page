import { AnimatedSection } from "./AnimatedSection";
import { AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";

export function SolutionSection() {
  return (
    <section id="solucao" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Problema & <span className="gradient-text">Solução</span>
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid items-stretch gap-8 md:grid-cols-3">
          {/* Problem */}
          <AnimatedSection delay={0.1}>
            <div className="flex h-full flex-col rounded-xl border border-destructive/20 bg-destructive/5 p-8">
              <AlertTriangle className="text-destructive" size={32} />
              <h3 className="mt-4 text-xl font-bold">O Problema</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Falhas inesperadas em equipamentos industriais causam paradas não planejadas,
                desperdício de recursos e custos elevados de manutenção corretiva. A falta de
                monitoramento inteligente dificulta a prevenção.
              </p>
            </div>
          </AnimatedSection>

          {/* Arrow */}
          <AnimatedSection delay={0.2}>
            <div className="flex h-full items-center justify-center">
              <ArrowRight className="hidden text-primary md:block" size={48} />
              <div className="block h-12 w-0.5 bg-primary md:hidden" />
            </div>
          </AnimatedSection>

          {/* Solution */}
          <AnimatedSection delay={0.3}>
            <div className="flex h-full flex-col rounded-xl border border-primary/20 bg-primary/5 p-8">
              <CheckCircle className="text-primary" size={32} />
              <h3 className="mt-4 text-xl font-bold">Nossa Solução</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Utilizamos inteligência artificial e sensores IoT para criar um sistema de
                diagnóstico preditivo. Nosso algoritmo aprende padrões de operação e alerta
                sobre anomalias antes que se tornem falhas críticas.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
