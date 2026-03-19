export type TrackId = "cybersecurity" | "fullstack" | "datascience";

export interface ChecklistItem {
  id: string;
  label: string;
  optional?: boolean;
}

export interface Step {
  id: number;
  title: string;
  subtitle: string;
  items: ChecklistItem[];
  helpSection?: { title: string; content: string };
  infoContent?: { lines: string[] };
}

export interface Track {
  id: TrackId;
  name: string;
  emoji: string;
  icon: string;
  tagline: string;
  description: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  readyMessage: string;
  buttonLabel: string;
}

export const tracks: Track[] = [
  {
    id: "cybersecurity",
    name: "Cybersecurity Bootcamp",
    emoji: "🔐",
    icon: "cyber",
    tagline: "Defend. Detect. Dominate.",
    description: "Protect systems, hack ethically, and become a security expert.",
    colorClass: "text-track-cyber",
    bgClass: "bg-track-cyber",
    borderClass: "border-track-cyber",
    readyMessage: "Your security journey starts now.",
    buttonLabel: "CyS Checklist",
  },
  {
    id: "fullstack",
    name: "Full-Stack & AI Bootcamp",
    emoji: "💻",
    icon: "fullstack",
    tagline: "Build. Ship. Scale.",
    description: "Master frontend, backend, and everything in between.",
    colorClass: "text-track-fullstack",
    bgClass: "bg-track-fullstack",
    borderClass: "border-track-fullstack",
    readyMessage: "Time to build real systems.",
    buttonLabel: "FS Checklist",
  },
  {
    id: "datascience",
    name: "AI & Data Science Bootcamp",
    emoji: "📊",
    icon: "datascience",
    tagline: "Analyze. Predict. Transform.",
    description: "Turn raw data into powerful insights and intelligent models.",
    colorClass: "text-track-data",
    bgClass: "bg-track-data",
    borderClass: "border-track-data",
    readyMessage: "Let's turn data into insight.",
    buttonLabel: "DS Checklist",
  },
];

const sharedSteps: Step[] = [
  {
    id: 1,
    title: "Confirm Your Spot",
    subtitle: "Lock in your commitment and make it official.",
    items: [
      { id: "enrollment", label: "Read & sign Enrollment Agreement" },
      { id: "device", label: "Confirm device meets requirements" },
      { id: "picture", label: "Submit your picture" },
      { id: "edu-number", label: "Save CODED Education Number" },
    ],
  },
  {
    id: 2,
    title: "Join the CODED System",
    subtitle: "Get connected with your cohort and instructors.",
    items: [
      { id: "discord-download", label: "Download Discord (Laptop + Mobile)" },
      { id: "discord-join", label: "Join CODED Discord server" },
      { id: "discord-rename", label: "Rename to First + Last Name" },
      { id: "discord-pic", label: "Add profile picture", optional: true },
    ],
    helpSection: {
      title: "Need help?",
      content: "Check the #onboarding channel on Discord for step-by-step video tutorials, or reach out to the CODED team directly.",
    },
  },
];

const envSteps: Record<TrackId, Step> = {
  cybersecurity: {
    id: 3,
    title: "Build Your Security Lab",
    subtitle: "Set up the tools you'll use to hack and defend.",
    items: [
      { id: "virtualbox", label: "Install VirtualBox" },
      { id: "extension-pack", label: "Install Extension Pack" },
      { id: "browser", label: "Install Browser" },
      { id: "zoom", label: "Install Zoom" },
      { id: "ctf", label: "Create CTF account" },
    ],
  },
  fullstack: {
    id: 3,
    title: "Configure Your Engineering Workspace",
    subtitle: "Get your dev environment ready to ship code.",
    items: [
      { id: "vscode", label: "Install VSCode" },
      { id: "git", label: "Install Git" },
      { id: "chrome", label: "Install Chrome" },
      { id: "github", label: "Create GitHub account" },
      { id: "github-local", label: "Connect GitHub locally" },
    ],
  },
  datascience: {
    id: 3,
    title: "Prepare Your Analytical Workspace",
    subtitle: "Set up your data science toolkit.",
    items: [
      { id: "kaggle", label: "Create Kaggle account" },
      { id: "colab", label: "Access Google Colab" },
      { id: "notebook", label: "Open test notebook" },
      { id: "colab-login", label: "Confirm login" },
    ],
  },
};

const step4: Step = {
  id: 4,
  title: "Understand How This Bootcamp Works",
  subtitle: "Know the rules of the game before it begins.",
  items: [
    { id: "eval-metrics", label: "Review evaluation metrics" },
    { id: "presence-guide", label: "Read trainee presence guide" },
    { id: "attendance", label: "Understand attendance policy" },
    { id: "performance", label: "Know how performance is measured" },
  ],
};

const step5: Step = {
  id: 5,
  title: "Campus Essentials",
  subtitle: "Everything you need for day one on campus.",
  items: [
    { id: "wifi-noted", label: "Note the WiFi details" },
    { id: "edu-saved", label: "Education Number saved" },
  ],
  infoContent: {
    lines: [
      "📶 WiFi Name: CODED_Campus",
      "🔑 WiFi Password: Ask the team on day one",
      "🎓 Keep your Education Number handy — you'll need it!",
    ],
  },
};

export function getStepsForTrack(trackId: TrackId): Step[] {
  return [...sharedSteps, envSteps[trackId], step4, step5];
}

export function getTrack(trackId: TrackId): Track {
  return tracks.find((t) => t.id === trackId)!;
}
