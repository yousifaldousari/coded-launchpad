import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Download, Monitor, Apple } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 16 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }) };

export default function FullStackGitSetup() {
  const navigate = useNavigate();

  const openLink = (url: string) => {
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.assign(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate("/track/fullstack")}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Checklist
          </button>
          <div className="rounded-full bg-track-fullstack px-3 py-1 text-xs font-semibold text-white">
            💻 Full-Stack & AI Bootcamp
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <motion.h1
          className="mb-2 font-display text-2xl font-bold text-foreground"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Git Setup Guide
        </motion.h1>
        <p className="mb-8 text-muted-foreground">
          Follow these steps to download and install Git on your laptop.
        </p>

        {/* Step 1: Download */}
        <motion.div
          className="mb-6 rounded-xl border border-border bg-card p-6"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
            <Download className="h-5 w-5 text-track-fullstack" />
            Step 1 — Download Git
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Head to the official Git website and download the installer for your operating system.
          </p>
          <button
            onClick={() => openLink("https://git-scm.com/downloads")}
            className="flex items-center gap-2 rounded-lg bg-track-fullstack px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Download Git
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </motion.div>

        {/* Step 2: Install */}
        <motion.div
          className="mb-6 rounded-xl border border-border bg-card p-6"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
            🛠️ Step 2 — How to Install Git
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Follow the installation guide for your operating system below.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => openLink("https://kinsta.com/knowledgebase/install-git/#windows-1")}
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-left transition-colors hover:border-track-fullstack/50 hover:bg-track-fullstack/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-track-fullstack/10">
                <Monitor className="h-5 w-5 text-track-fullstack" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Windows Users</p>
                <p className="text-xs text-muted-foreground">Step-by-step guide</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </button>

            <button
              onClick={() => openLink("https://kinsta.com/knowledgebase/install-git/#mac-1")}
              className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 text-left transition-colors hover:border-track-fullstack/50 hover:bg-track-fullstack/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-track-fullstack/10">
                <Apple className="h-5 w-5 text-track-fullstack" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">Mac Users</p>
                <p className="text-xs text-muted-foreground">Step-by-step guide</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
