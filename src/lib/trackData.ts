export type TrackId = "cybersecurity" | "fullstack" | "datascience";

export interface ChecklistItem {
  id: string;
  label: string;
  optional?: boolean;
  link?: { url: string; text: string };
  note?: string;
}

export interface Step {
  id: number;
  title: string;
  subtitle: string;
  items: ChecklistItem[];
  helpSection?: { title: string; content: string };
  infoContent?: { lines: string[]; copyable?: { label: string; value: string } };
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

const pictureNote = "We will not use this picture in any media, and will only be for the team to know you faster 😊";

const pictureLinks: Record<TrackId, string> = {
  cybersecurity: "https://airtable.com/appGSMF2eEC2s4abA/pagKwJxgkC1a2JebE/form",
  fullstack: "https://airtable.com/appGSMF2eEC2s4abA/pagxHeida0bCbwok3/form",
  datascience: "https://airtable.com/appGSMF2eEC2s4abA/paguOET0VHvKo4BJL/form",
};

const deviceLinks: Record<TrackId, string> = {
  cybersecurity: "/track/cybersecurity/device-requirements",
  fullstack: "/track/fullstack/device-requirements",
  datascience: "/track/datascience/device-requirements",
};

function getStep1(trackId: TrackId): Step {
  return {
    id: 1,
    title: "Confirm Your Spot",
    subtitle: "Lock in your commitment and make it official.",
    items: [
      { id: "enrollment", label: "Read & sign Enrollment Agreement", link: { url: "https://app.coded.kw/sign-in", text: "CODED App" }, note: "The EA can be found in CODED App" },
      { id: "device", label: "Confirm device meets requirements", link: { url: deviceLinks[trackId], text: "View Requirements" } },
      { id: "picture", label: "Submit your picture", link: { url: pictureLinks[trackId], text: "Submit Picture" }, note: pictureNote },
      { id: "edu-number", label: "Save CODED Education Number" },
    ],
  };
}

const sharedStep2: Step =
  {
    id: 2,
    title: "Join the CODED System",
    subtitle: "Get connected with your cohort and instructors.",
    items: [
      { id: "discord-download", label: "Download Discord (Laptop + Mobile)", link: { url: "https://discord.com/download", text: "Download Discord" } },
      { id: "discord-join", label: "Join CODED Discord server", link: { url: "https://discord.gg/4RJPMEM6W5", text: "Join Server" } },
      { id: "discord-rename", label: "Rename to First + Last Name" },
      { id: "discord-pic", label: "Add profile picture", optional: true },
    ],
    helpSection: {
      title: "Need help?",
      content: "Check the #onboarding channel on Discord for step-by-step video tutorials, or reach out to the CODED team directly.",
    },
  };

const envSteps: Record<TrackId, Step> = {
  cybersecurity: {
    id: 3,
    title: "Build Your Security Lab",
    subtitle: "Set up the tools you'll use to hack and defend.",
    items: [
      { id: "virtualbox", label: "Download & Install VirtualBox 7.x", link: { url: "https://www.virtualbox.org/", text: "Get VirtualBox" } },
      { id: "extension-pack", label: "Install VirtualBox Extension Pack", link: { url: "https://www.virtualbox.org/wiki/Downloads", text: "Extension Pack" } },
      { id: "browser", label: "Install Chrome or Firefox", link: { url: "https://www.google.com/chrome/", text: "Chrome" } },
      { id: "browser-firefox", label: "Or download Firefox instead", optional: true, link: { url: "https://www.mozilla.org/en-US/firefox/new/", text: "Firefox" } },
      { id: "zoom", label: "Install Zoom", link: { url: "https://zoom.us/download", text: "Download Zoom" } },
      { id: "ctf", label: "Create CTF account (use your registered email)", link: { url: "https://ctfd.hack.kw", text: "Open CTF" } },
    ],
  },
  fullstack: {
    id: 3,
    title: "Configure Your Engineering Workspace",
    subtitle: "Get your dev environment ready to ship code.",
    items: [
      { id: "chrome", label: "Download Chrome on your laptop", link: { url: "https://www.google.com/chrome/", text: "Download Chrome" } },
      { id: "cursor", label: "Install Cursor", link: { url: "https://cursor.com/download", text: "Download Cursor" } },
      { id: "git", label: "Download & Install Git on your laptop", link: { url: "/track/fullstack/git-setup", text: "Git Setup Guide" } },
      { id: "github", label: "Create GitHub account", link: { url: "https://github.com/join", text: "GitHub" } },
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
      "📶 WiFi Name: Students or Students2",
      "🔑 WiFi Password: joincoded.com",
      "🎓 Keep your Education Number handy — you'll need it!",
    ],
    copyable: { label: "WiFi Password", value: "joincoded.com" },
  },
};

export function getStepsForTrack(trackId: TrackId): Step[] {
  return [getStep1(trackId), sharedStep2, envSteps[trackId], step4, step5];
}

export function getTrack(trackId: TrackId): Track {
  return tracks.find((t) => t.id === trackId)!;
}
