import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Shield, MessageCircle, Brain, BookOpen, Code, Clock, Lock, BarChart3, Target, Users, Lightbulb, Wrench, Bug, Swords } from "lucide-react";
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

const cyberSections: Section[] = [
  {
    icon: Shield,
    title: "Threat Detection and Analysis",
    items: [
      "How well does the trainee identify malicious or suspicious activity?",
      "How effectively does the trainee interpret logs, alerts, and threat intel?",
      "Does the trainee prioritize threats based on impact and likelihood?",
    ],
  },
  {
    icon: MessageCircle,
    title: "Communication and Reporting",
    items: [
      "How clearly does the trainee document incidents or findings?",
      "Does the trainee communicate incident severity and urgency appropriately?",
      "Does the trainee adjust communication for technical and non-technical audiences?",
    ],
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    items: [
      "How well does the trainee assess the root cause of an incident or event?",
      "How well does the trainee evaluate multiple hypotheses or potential attack paths?",
      "Does the trainee use structured frameworks for analysis (e.g., MITRE ATT&CK, Kill Chain)?",
    ],
  },
  {
    icon: BookOpen,
    title: "Best Practices and Compliance",
    items: [
      "Does the trainee follow cybersecurity policies and procedures?",
      "How well does the trainee document actions and maintain audit trails?",
      "Does the trainee consider regulatory frameworks (e.g., GDPR, NIST, ISO)?",
    ],
  },
  {
    icon: Wrench,
    title: "Tools and Techniques",
    items: [
      "How proficient is the trainee with core security tools (e.g., SIEM, IDS, scanners)?",
      "How effectively does the trainee script or automate security tasks?",
      "Does the trainee stay current with new tools and capabilities?",
    ],
  },
  {
    icon: Bug,
    title: "Incident Response and Forensics",
    items: [
      "How well does the trainee follow an incident response process?",
      "How well does the trainee collect and preserve forensic evidence?",
      "Does the trainee document response steps and findings?",
    ],
  },
  {
    icon: Swords,
    title: "Exploitation and Penetration Testing",
    items: [
      "How well does the trainee conduct vulnerability scans and manual testing?",
      "Does the trainee validate findings and avoid false positives?",
      "Does the trainee operate ethically and within defined scopes?",
    ],
  },
];

const fullstackSections: Section[] = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    items: [
      "How does the trainee typically approach unfamiliar problems?",
      "How well does the trainee debug issues?",
      "Does the trainee consistently attempt to solve a problem before asking for help?",
    ],
  },
  {
    icon: Target,
    title: "System Design",
    items: [
      "How structured is the student's approach to building applications/components?",
      "Does the trainee understand and implement appropriate data flow?",
      "Does the trainee show awareness of design decisions (e.g., when to use components, services, etc.)?",
    ],
  },
  {
    icon: Users,
    title: "Collaboration & Communication",
    items: [
      "How well does the trainee explain their code and decisions?",
      "How actively does the trainee contribute to group work?",
      "Does the trainee accept and apply feedback constructively?",
    ],
  },
  {
    icon: Code,
    title: "Code Quality & Best Practices",
    items: [
      "How clean and maintainable is the trainee's code?",
      "Does the trainee write code with reusability and scalability in mind?",
      "Does the trainee follow naming conventions and file organization standards?",
    ],
  },
  {
    icon: Bug,
    title: "Testing & Debugging",
    items: [
      "How often does the trainee test their work?",
      "How effective are their debugging skills?",
      "Does the trainee write or understand automated tests (where relevant)?",
    ],
  },
  {
    icon: Clock,
    title: "Time Management",
    items: [
      "How does the trainee handle deadlines and deliverables?",
      "How well does the trainee manage their daily or weekly tasks?",
      "Does the trainee attend sessions and participate regularly?",
    ],
  },
  {
    icon: Lock,
    title: "Secure Coding",
    items: [
      "How does the trainee handle user input and data?",
      "Does the trainee write code that avoids common vulnerabilities?",
      "Has the trainee demonstrated awareness of authentication, authorization, or encryption (if relevant)?",
    ],
  },
];

const datascienceSections: Section[] = [
  {
    icon: BarChart3,
    title: "Data Manipulation and Analysis",
    items: [
      "How effectively does the trainee clean and prepare data for analysis or reporting?",
      "How well does the trainee choose and apply appropriate transformations and aggregations?",
      "Does the trainee validate and sanity-check outputs before using them in further steps?",
    ],
  },
  {
    icon: MessageCircle,
    title: "Communication and Storytelling",
    items: [
      "How clear and engaging is the trainee's explanation of data insights or results?",
      "Does the trainee adapt their communication style to the audience (technical/non-technical)?",
      "Does the trainee use visuals effectively to support their message?",
    ],
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    items: [
      "How well does the trainee identify relevant questions or problems to solve?",
      "How rigorously does the trainee evaluate results or assumptions?",
      "Does the trainee suggest alternative approaches or interpretations when faced with uncertainty?",
    ],
  },
  {
    icon: Code,
    title: "Code and Workflow Best Practices",
    items: [
      "How clean and maintainable is the trainee's code?",
      "How effectively does the trainee organize and manage Colab notebooks?",
      "Does the trainee follow reproducibility best practices (e.g., notebook runs top-to-bottom, consistent outputs)?",
    ],
  },
  {
    icon: Target,
    title: "Modeling and Machine Learning",
    items: [
      "How well does the trainee select appropriate models based on the problem and data?",
      "Does the trainee evaluate model performance properly using relevant metrics?",
      "Does the trainee consider overfitting, data leakage, or feature importance?",
    ],
  },
  {
    icon: Lightbulb,
    title: "Business Acumen",
    items: [
      "How well does the trainee align their work with business goals?",
      "Does the trainee understand the stakeholders and their priorities?",
      "Does the trainee translate technical outcomes into business implications?",
    ],
  },
];

const trackSections: Record<string, Section[]> = {
  cybersecurity: cyberSections,
  fullstack: fullstackSections,
  datascience: datascienceSections,
};

const trackTitles: Record<string, string> = {
  cybersecurity: "Cybersecurity Trainee Evaluation Metrics",
  fullstack: "Fullstack Trainee Evaluation Metrics",
  datascience: "Data Science Trainee Evaluation Metrics",
};

export default function TraineeEvaluationMetrics() {
  const navigate = useNavigate();
  const { trackId } = useParams<{ trackId: string }>();
  const tid = (trackId || "cybersecurity") as TrackId;
  const badge = trackBadge[tid] || trackBadge.cybersecurity;
  const accent = accentMap[tid] || accentMap.cybersecurity;
  const sections = trackSections[tid] || cyberSections;
  const title = trackTitles[tid] || trackTitles.cybersecurity;

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
            {title}
          </h1>
          <p className="mt-2 text-muted-foreground">
            These are the key areas you'll be evaluated on throughout the bootcamp. Understanding them early will help you focus your growth.
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
