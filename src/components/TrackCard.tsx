import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Track } from "@/lib/trackData";
import cyberIcon from "@/assets/Cyber_Icon.png";
import fullstackIcon from "@/assets/Full_Stack_Icon.png";
import datascienceIcon from "@/assets/Data_Science_Icon.png";
import aiappdevIcon from "@/assets/AI_App_Dev_Icon.png";

const iconMap: Record<string, string> = {
  cyber: cyberIcon,
  fullstack: fullstackIcon,
  datascience: datascienceIcon,
  aiappdev: aiappdevIcon,
};

interface Props {
  track: Track;
  index: number;
  hasProgress: boolean;
  onSelect: () => void;
}

export default function TrackCard({ track, index, hasProgress, onSelect }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative overflow-hidden rounded-2xl border-2 ${track.borderClass} bg-card shadow-sm transition-shadow hover:shadow-lg`}
    >
      <div className={`h-1.5 w-full ${track.bgClass}`} />
      <div className="flex flex-col items-center p-6">
        <img
          src={iconMap[track.icon]}
          alt={`${track.name} icon`}
          className="h-16 w-16 object-contain"
        />
        <h3 className="mt-3 font-display font-bold text-foreground whitespace-nowrap text-lg">{track.name}</h3>
        <p className="mt-1 text-center text-sm text-muted-foreground">{track.description}</p>
        <button
          onClick={onSelect}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl ${track.bgClass} px-4 py-3 text-sm font-semibold text-white whitespace-nowrap transition-opacity hover:opacity-90`}
        >
          {hasProgress ? "Continue Setup" : track.buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </button>
        {hasProgress && (
          <p className="mt-2 text-center text-xs text-muted-foreground">
            ↳ You have saved progress
          </p>
        )}
      </div>
    </motion.div>
  );
}
