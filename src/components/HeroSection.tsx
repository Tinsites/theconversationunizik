import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-20 pt-16 text-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-red/30 via-background to-background" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading-script text-gold-muted mb-2 text-lg md:text-xl"
        >
          The
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="heading-display text-foreground text-4xl leading-tight md:text-7xl lg:text-8xl"
        >
          Conversation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="heading-script text-gold mb-4 text-lg md:text-2xl"
        >
          Unizik Edition
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="gold-accent-line mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground mb-2 text-sm tracking-widest uppercase md:text-base"
        >
          The Roundtable of Lived and Shared Wisdom
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="heading-display text-gold mb-6 text-base md:text-lg"
        >
          10 Fields. 10 Speakers. 1 Table.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-muted-foreground mb-10 space-y-1 text-sm md:text-base"
        >
          <p>📅 Saturday, June 6, 2026</p>
          <p>📍 ASUU Secretariat Hall, Nnamdi Azikiwe University, Awka</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="flex flex-col items-center gap-4"
        >
          <button onClick={() => scrollTo("#waitlist")} className="btn-gold">
            Join the Waiting List
          </button>
          <button onClick={() => scrollTo("#survey")} className="text-gold-muted text-sm transition-colors hover:text-gold">
            Tell us your questions →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
