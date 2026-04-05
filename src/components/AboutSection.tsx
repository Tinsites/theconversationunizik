import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="gold-accent-line mb-10" />

        <div className="space-y-6 font-serif text-lg leading-relaxed text-foreground md:text-xl">
          <p>
            Across campuses, students graduate with talent, ambition, and questions — but without proximity to the conversations that actually shape judgment, purpose, and responsibility.
          </p>
          <p className="text-gold">The Conversation was born from this gap.</p>
          <p className="text-muted-foreground">
            Not a stage. Not a panel. Not a performance.
          </p>
          <p className="heading-script text-gold text-2xl md:text-3xl">A table.</p>
          <p className="text-muted-foreground">
            A space where individuals who have built, led, failed, learned, and endured speak honestly — while students listen, take notes, and quietly recalibrate their sense of what is possible.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
