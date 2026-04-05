import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Shirt, MessageCircle, BookOpen, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { TrackId } from "@/lib/trackData";

const trackBadge: Record<string, { bg: string; emoji: string; name: string }> = {
  cybersecurity: { bg: "bg-track-cyber", emoji: "🔐", name: "Cybersecurity Bootcamp" },
  fullstack: { bg: "bg-track-fullstack", emoji: "💻", name: "Full-Stack & AI Bootcamp" },
  datascience: { bg: "bg-track-data", emoji: "📊", name: "AI & Data Science Bootcamp" },
};

const accentMap: Record<string, { text: string; bg10: string; border: string }> = {
  cybersecurity: { text: "text-track-cyber", bg10: "bg-track-cyber/10", border: "border-track-cyber/30" },
  fullstack: { text: "text-track-fullstack", bg10: "bg-track-fullstack/10", border: "border-track-fullstack/30" },
  datascience: { text: "text-track-data", bg10: "bg-track-data/10", border: "border-track-data/30" },
};

interface Section {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const sections: Section[] = [
  {
    icon: Shirt,
    title: "Professional Appearance",
    items: [
      "Dress Code: Smart / Business casual — look professional",
      "No Shorts or Short Skirts — pants, skirts, or dresses must be of appropriate length (longer than knee-length)",
      "No Exposure of the Chest Area — all clothing must cover appropriately",
      "Online Presence: Ensure your profile photo and name are up-to-date and match your real identity across all communication tools",
      "Tattoo Policy: Cover visible tattoos at CODED campus and during class 👘",
      "Accessory Restrictions: Keep it simple — no flashy or noisy accessories 💥",
      "Shirt Sleeve Policy: All must wear shirts with sleeves (no sleeveless tops, tank tops, or spaghetti straps)",
    ],
  },
  {
    icon: MessageCircle,
    title: "Communication & Interaction",
    items: [
      "😊 Positive Engagement — Greet others with a smile, be friendly",
      "👍 Support & Discipline — Request assistance from the education team for help with challenges",
      "🚫 Professional Boundaries — Don't share personal contact info and avoid over-socializing. Be patient when texting the education team",
      "❌ Behavioral Standards — No swearing, bullying, or threats — keep a good attitude",
      "🤝 Calm Conflict Resolution — Stay calm during conflicts and report issues immediately to CODED",
    ],
  },
  {
    icon: BookOpen,
    title: "Inside Our Classroom",
    items: [
      "📵 No Phones — No personal phones during class unless really needed",
      "🎯 Stay Focused — Keep personal talks for after class and make it safe for trainees to ask questions",
      "🚫👥 Trainees Only in Class — No guests allowed; the classroom is for trainees only",
      "🧼 Keep Your Place Clean — Don't leave your desk messy at end of the day",
      "🎙 Announcements — Make sure you turn on your Discord notifications to receive all announcements",
    ],
  },
  {
    icon: Shield,
    title: "Ethics & Professional Development",
    items: [
      "🌍 Respect Everyone — Be kind to all cultures and treat every trainee fairly",
      "⏰ Be Punctual — Start and end classes on time",
      "🔄 Stay Adaptable — Adjust based on feedback and class progress",
      "📈 Keep Improving — Regularly seek feedback to improve",
    ],
  },
  {
    icon: Sparkles,
    title: "Education Communication 📲",
    items: [
      "Always keep your instructor and TAs informed if you will be late, attending online, or can't make it",
      "Make sure to respond when they reach out to you — this way the team can stay aligned with your needs",
    ],
  },
];

export default function TraineePresenceGuide() {
  const navigate = useNavigate();
  const { trackId } = useParams<{ trackId: string }>();
  const tid = (trackId || "cybersecurity") as TrackId;
  const badge = trackBadge[tid] || trackBadge.cybersecurity;
  const accent = accentMap[tid] || accentMap.cybersecurity;

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(`/track/${tid}`)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Checklist
          </button>
          <div className={`rounded-full ${badge.bg} px-3 py-1 text-xs font-semibold text-white`}>
            {badge.emoji} {badge.name}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Trainee Presence Guide
          </h1>
          <p className="mt-2 text-muted-foreground">
            As part of CODED's goal to be a leader in our field, we aim to follow key guidelines for both offline and online presence.
          </p>

          <div className="mt-8 space-y-6">
            {sections.map((section, si) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.06 }}
                className={`rounded-xl border ${accent.border} bg-card p-5`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accent.bg10}`}>
                    <section.icon className={`h-5 w-5 ${accent.text}`} />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-2.5 ml-1">
                  {section.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bg10} ring-1 ${accent.border}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
