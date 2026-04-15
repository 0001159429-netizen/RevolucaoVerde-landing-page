import { motion } from "framer-motion";
import heroImg from "@/assets/hero-industrial.jpg";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fábrica industrial inteligente com diagnósticos por IA"
          className="h-full w-full object-cover opacity-30"
          width={1920}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-dark/80" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-white/80 uppercase backdrop-blur-sm">
            Inovação Industrial com IA
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          Sistema Inteligente de{" "}
          <span className="text-primary">Diagnóstico Industrial</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Transformando a manutenção industrial com inteligência artificial.
          Redução de custos, maior eficiência e sustentabilidade para sua operação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#sobre" className="btn-primary text-base">
            Saiba mais
          </a>
          <a href="#contato" className="btn-outline-hero text-base">
            Fale conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
