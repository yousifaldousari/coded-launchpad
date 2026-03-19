import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { tracks } from "@/lib/trackData";
import TrackCard from "@/components/TrackCard";
import codedLogo from "@/assets/CODED_logo_navy_blue.png";

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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 text-sm text-muted-foreground"
      >
        Not sure which track? Ask your advisor or explore all three.
      </motion.p>
    </div>
  );
}
