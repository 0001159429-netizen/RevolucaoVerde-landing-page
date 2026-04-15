import { AnimatedSection } from "./AnimatedSection";
import { User } from "lucide-react";
import teamImg from "@/assets/team-photo.jpg";

const team = [
  { name: "Ana", role: "Desenvolvedora" },
  { name: "João", role: "Inteligência Artificial" },
  { name: "Maria", role: "Design" },
  { name: "Pedro", role: "Dados" },
  { name: "Lucas", role: "Pesquisa" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Sobre <span className="gradient-text">Nós</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Somos uma equipe multidisciplinar de estudantes e pesquisadores apaixonados por
            inovação. Combinamos inteligência artificial, análise de dados e engenharia
            para criar soluções que transformam a indústria.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl card-shadow">
            <img
              src={teamImg}
              alt="Equipe do projeto SIDI"
              className="h-64 w-full object-cover sm:h-80"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((m, i) => (
            <AnimatedSection key={m.name} delay={0.1 * i}>
              <div className="group flex flex-col items-center rounded-xl bg-card p-5 text-center transition-all duration-300 card-shadow hover:card-shadow-hover hover:-translate-y-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <User size={24} />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{m.name}</h3>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
