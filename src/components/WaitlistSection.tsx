import { useState } from "react";
import { motion } from "framer-motion";

const hearSources = ["Instagram", "LinkedIn", "A Friend", "WhatsApp", "Other"];

export default function WaitlistSection() {
  const [form, setForm] = useState({
    name: "", whatsapp: "", email: "", school: "", department: "", level: "", source: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, val: string) => setForm({ ...form, [key]: val });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp || !form.email || !form.school || !form.department || !form.level) return;

    const lines = [
      "🔴 NEW WAITING LIST SIGNUP",
      "📍 Source: The Conversation UNIZIK — Landing Page",
      "",
      `👤 Name: ${form.name}`,
      `📱 WhatsApp: ${form.whatsapp}`,
      `📧 Email: ${form.email}`,
      `🏫 School: ${form.school}`,
      `📚 Department: ${form.department}`,
      `📅 Level: ${form.level}`,
      `🔍 How they heard: ${form.source || "Not specified"}`,
      "",
      "— Sent automatically from theconversation.site",
    ];

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/2348133032688?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="waitlist" className="px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="heading-display mb-4 text-2xl text-gold">You're on the List!</h2>
          <p className="text-muted-foreground">We'll reach out when registration opens. Stay tuned.</p>
        </div>
      </section>
    );
  }

  const inputClass = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <section id="waitlist" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="heading-display mb-4 text-2xl text-foreground md:text-3xl">Reserve Your Seat</h2>
          <div className="gold-accent-line mb-6" />
          <p className="text-sm text-muted-foreground">
            Space is limited. Join the waiting list and be the first to know when registration opens.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-border bg-card p-6">
          <input type="text" placeholder="Full Name *" required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClass} />
          <input type="tel" placeholder="WhatsApp Number *" required value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className={inputClass} />
          <input type="email" placeholder="Email Address *" required value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
          <input type="text" placeholder="School / University *" required value={form.school} onChange={(e) => update("school", e.target.value)} className={inputClass} />
          <input type="text" placeholder="Department *" required value={form.department} onChange={(e) => update("department", e.target.value)} className={inputClass} />
          <input type="text" placeholder="Level / Year of Study *" required value={form.level} onChange={(e) => update("level", e.target.value)} className={inputClass} />
          <select
            value={form.source}
            onChange={(e) => update("source", e.target.value)}
            className={`${inputClass} ${!form.source ? "text-muted-foreground" : ""}`}
          >
            <option value="">How did you hear about The Conversation?</option>
            {hearSources.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <div className="pt-2 text-center">
            <button type="submit" className="btn-gold">Add Me to the List</button>
          </div>
        </form>
      </div>
    </section>
  );
}
