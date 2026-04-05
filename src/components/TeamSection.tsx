import { motion } from "framer-motion";
import teamPhoto from "@/assets/team-photo.jpg";

export default function TeamSection() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-display mb-10 text-2xl text-foreground md:text-3xl"
        >
          The Curators
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <img
            src={teamPhoto}
            alt="The Conversation curators — Francis Onuorah and Maryjane Ejebughaobi"
            className="mx-auto w-full max-w-md rounded-lg border border-gold-muted/30 shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <p className="text-foreground">
            <span className="font-bold text-gold">Francis Onuorah</span>{" "}
            <span className="text-muted-foreground">— Curator, Final-Year Law Student, UNIZIK</span>
          </p>
          <p className="text-foreground">
            <span className="font-bold text-gold">Maryjane Ejebughaobi</span>{" "}
            <span className="text-muted-foreground">— Co-Curator, Final-Year Law Student, UNIZIK</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
