import { motion } from "framer-motion";

const fields = [
  { name: "Arts & Entertainment", desc: "Culture, creativity, and influence" },
  { name: "Leadership & Politics", desc: "Power, service, and responsibility" },
  { name: "Spirituality & Faith", desc: "Conviction, calling, and inner life" },
  { name: "Tech & Innovation", desc: "The future and ethical progress" },
  { name: "Activism & Community Building", desc: "Impact beyond comfort" },
  { name: "Media, PR & Influence", desc: "Narrative, truth, and perception" },
  { name: "Health & Wellbeing", desc: "Wholeness, discipline, and longevity" },
  { name: "Finance & Entrepreneurship", desc: "Stewardship, value, and sustainability" },
  { name: "Family & Relationships", desc: "Foundations that shape destiny" },
  { name: "Education & Intellect", desc: "Thought leadership and intellectual formation" },
];

export default function FieldsSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-display mb-12 text-center text-2xl text-foreground md:text-3xl"
        >
          The Conversation Covers
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {fields.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="field-card text-center"
            >
              <h3 className="mb-1 text-sm font-bold text-gold">{f.name}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
