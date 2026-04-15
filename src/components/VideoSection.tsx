import { AnimatedSection } from "./AnimatedSection";

export function VideoSection() {
  return (
    <section id="video" className="section-padding bg-background">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Veja o <span className="gradient-text">Projeto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
            Assista ao vídeo de apresentação do nosso sistema.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 overflow-hidden rounded-2xl card-shadow">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo do projeto SIDI"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Substitua o link acima pelo vídeo do seu projeto no YouTube.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
