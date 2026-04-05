import { motion } from "framer-motion";

const items = [
  { icon: "🪑", title: "One Table", desc: "A single roundtable. No stage, no performance. Just honest conversation." },
  { icon: "🎙️", title: "Ten Voices", desc: "Ten speakers. Ten fields. Real lived experience across every area of life." },
  { icon: "👁️", title: "You Observe", desc: "Students attend as observers. You listen, take notes, and leave changed." },
];

export default function FormatSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-display mb-12 text-center text-2xl text-foreground md:text-3xl"
        >
          What to Expect
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-lg border border-border bg-card p-8 text-center"
            >
              <span className="mb-4 block text-4xl">{item.icon}</span>
              <h3 className="heading-display mb-3 text-lg text-gold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
