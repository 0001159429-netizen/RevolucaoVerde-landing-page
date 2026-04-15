import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionSection } from "@/components/SolutionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { VideoSection } from "@/components/VideoSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SIDI – Sistema Inteligente de Diagnóstico Industrial" },
      {
        name: "description",
        content:
          "Transformando a manutenção industrial com inteligência artificial. Diagnóstico preditivo, monitoramento em tempo real e redução de custos.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SolutionSection />
        <BenefitsSection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
