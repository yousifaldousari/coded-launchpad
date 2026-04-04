import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { tracks } from "@/lib/trackData";
import TrackCard from "@/components/TrackCard";
import codedLogo from "@/assets/CODED_logo_navy_blue.png";
import { MessageCircle } from "lucide-react";

const STORAGE_KEY = "coded-onboarding";

function hasTrackProgress(trackId: string): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const state = JSON.parse(raw);
    const progress = state[trackId];
    return progress && Object.values(progress).some(Boolean);
  } catch {
    return false;
  }
}

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <img src={codedLogo} alt="CODED" className="mb-6 h-12 object-contain" />
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to CODED <span className="inline-block animate-[wave_1.5s_ease-in-out_infinite]">👋</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your journey starts here. Pick your track and let's get you ready.
        </p>
      </motion.div>

      <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {tracks.map((track, i) => (
          <TrackCard
            key={track.id}
            track={track}
            index={i}
            hasProgress={hasTrackProgress(track.id)}
            onSelect={() => navigate(`/track/${track.id}`)}
          />
        ))}
      </div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <a
          href="https://wa.me/96560791018"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">CODED Admission</h4>
            <p className="mt-0.5 text-sm text-muted-foreground">+965 6079 1018</p>
            <p className="mt-1 text-xs text-muted-foreground/70">Before enrolling to the bootcamp</p>
          </div>
        </a>

        <a
          href="https://wa.me/96555421902"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">CODED Education</h4>
            <p className="mt-0.5 text-sm text-muted-foreground">+965 5542 1902</p>
            <p className="mt-1 text-xs text-muted-foreground/70">During the bootcamp — for inquiries, contact your bootcamp lead</p>
          </div>
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-10 text-sm text-muted-foreground"
      >
        Not sure which track? Ask your advisor or explore all three.
      </motion.p>
    </div>
  );
}
