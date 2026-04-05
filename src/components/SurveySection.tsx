import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const surveyFields = [
  { key: "arts", title: "Arts & Entertainment", prompt: "Expression, creativity, and turning talent into something meaningful. Are you trying to express yourself or grow your talent? What questions do you carry?" },
  { key: "leadership", title: "Leadership & Politics", prompt: "Influence, responsibility, and shaping systems. Are you trying to lead or navigate power? What do you need clarity on?" },
  { key: "spirituality", title: "Spirituality & Faith", prompt: "God, purpose, doubt, and personal conviction. What do you struggle to understand? What have you been searching for?" },
  { key: "tech", title: "Tech & Innovation", prompt: "Building, learning, and entering the digital space. What confuses or intimidates you about tech? Where do you want to start but don't know how?" },
  { key: "activism", title: "Activism & Community Building", prompt: "Change, impact, and using your voice. Do you care about making change but don't know how to start? Share your questions." },
  { key: "media", title: "Media, PR & Influence", prompt: "Visibility, storytelling, and shaping perception. Are you trying to build a brand or be taken seriously? What challenges do you face?" },
  { key: "health", title: "Health & Wellbeing", prompt: "Mental, emotional, and physical balance. Are you struggling with stress, burnout, or staying stable in school? What questions do you have?" },
  { key: "finance", title: "Finance & Entrepreneurship", prompt: "Money, survival, and building stability. What confuses you about money, earning, or growing what you have?" },
  { key: "family", title: "Family & Relationships", prompt: "Love, expectations, pressure, and connection. What situations are you navigating? What do you need clarity on?" },
  { key: "education", title: "Education & Intellect", prompt: "Learning, thinking, and life beyond the classroom. Does school feel like it's not preparing you for real life? What questions do you carry?" },
];

export default function SurveySection() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contactInfo, setContactInfo] = useState({ name: "", whatsapp: "", email: "" });
  const [openField, setOpenField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInfo.name || !contactInfo.whatsapp || !contactInfo.email) return;

    const fieldLabels = [
      "Arts & Entertainment", "Leadership & Politics", "Spirituality & Faith",
      "Tech & Innovation", "Activism & Community", "Media & PR",
      "Health & Wellbeing", "Finance & Entrepreneurship", "Family & Relationships",
      "Education & Intellect",
    ];
    const keys = surveyFields.map((f) => f.key);

    const lines = [
      "🟡 NEW SURVEY RESPONSE",
      "📍 Source: The Conversation UNIZIK — Landing Page",
      "",
      `👤 Name: ${contactInfo.name}`,
      `📱 WhatsApp: ${contactInfo.whatsapp}`,
      `📧 Email: ${contactInfo.email}`,
      "",
      "📋 THEIR QUESTIONS:",
      "",
      ...keys.map((k, i) => `${i + 1}. ${fieldLabels[i]}: ${answers[k] || "Skipped"}`),
      `💬 Other: ${answers.other || "None"}`,
      "",
      "— Sent automatically from theconversation.site",
    ];

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/2348133032688?text=${message}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="survey" className="px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="heading-display mb-4 text-2xl text-gold">Thank You!</h2>
          <p className="text-muted-foreground">Your responses have been recorded. We'll shape The Conversation around real questions like yours.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="survey" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="heading-display mb-4 text-2xl text-foreground md:text-3xl">
            What Questions Do You Carry?
          </h2>
          <div className="gold-accent-line mb-6" />
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            The Conversation is built around real questions from students like you. Below are the ten areas we'll be exploring. Tell us what's on your mind — what confuses you, what you want clarity on, what you've been carrying but haven't had space to ask.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-6 space-y-3 rounded-lg border border-border bg-card p-4 sm:p-5">
            <h3 className="text-sm font-bold text-gold">Your Info (required)</h3>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={contactInfo.name}
              onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <input
              type="tel"
              placeholder="WhatsApp Number"
              required
              value={contactInfo.whatsapp}
              onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={contactInfo.email}
              onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {surveyFields.map((field) => (
            <div key={field.key} className="rounded-lg border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenField(openField === field.key ? null : field.key)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-bold text-gold">{field.title}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform ${openField === field.key ? "rotate-180" : ""}`}
                />
              </button>
              {openField === field.key && (
                <div className="border-t border-border px-5 pb-5 pt-3">
                  <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{field.prompt}</p>
                  <textarea
                    rows={3}
                    placeholder="Type your question or what's on your mind here..."
                    value={answers[field.key] || ""}
                    onChange={(e) => setAnswers({ ...answers, [field.key]: e.target.value })}
                    className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              )}
            </div>
          ))}

          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="mb-2 text-sm font-bold text-gold">Anything else on your mind?</h3>
            <p className="mb-3 text-xs text-muted-foreground">
              Something you've been thinking about, struggling with, or trying to understand that doesn't fit any of the categories above? Drop it here.
            </p>
            <textarea
              rows={3}
              placeholder="Type here..."
              value={answers.other || ""}
              onChange={(e) => setAnswers({ ...answers, other: e.target.value })}
              className="w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          <div className="pt-4 text-center">
            <button type="submit" className="btn-gold">
              Submit Your Questions
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
