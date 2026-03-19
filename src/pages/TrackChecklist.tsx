import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";
import type { TrackId } from "@/lib/trackData";
import { getTrack, tracks } from "@/lib/trackData";
import { useChecklistProgress } from "@/hooks/useChecklistProgress";
import ChecklistItem from "@/components/ChecklistItem";

const trackClassMap: Record<TrackId, string> = {
  cybersecurity: "track-cyber",
  fullstack: "track-fullstack",
  datascience: "track-data",
};

const accentBgMap: Record<TrackId, string> = {
  cybersecurity: "bg-track-cyber",
  fullstack: "bg-track-fullstack",
  datascience: "bg-track-data",
};

const STEP_STORAGE_KEY = "coded-onboarding-step";

function getSavedStep(trackId: TrackId, stepCount: number) {
  try {
    const raw = localStorage.getItem(STEP_STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    const savedStep = parsed[trackId];

    if (typeof savedStep === "number") {
      return Math.min(Math.max(savedStep, 0), stepCount - 1);
    }
  } catch {}

  return 0;
}

export default function TrackChecklist() {
  const { trackId } = useParams<{ trackId: string }>();
  const navigate = useNavigate();
  const trackExists = tracks.some((t) => t.id === trackId);
  const safeTrackId = (tracks.find((t) => t.id === trackId)?.id ?? "fullstack") as TrackId;
  const track = getTrack(safeTrackId);
  const { checked, toggle, percentage, allDone, isStepComplete, steps } =
    useChecklistProgress(safeTrackId);

  const [currentStep, setCurrentStep] = useState(() => getSavedStep(safeTrackId, steps.length));
  const [helpOpen, setHelpOpen] = useState(false);
  const [showReady, setShowReady] = useState(false);
  const hasShownReadyRef = useRef(false);

  const step = steps[currentStep];
  const isLast = currentStep === steps.length - 1;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STEP_STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as Record<string, number>) : {};
      parsed[safeTrackId] = currentStep;
      localStorage.setItem(STEP_STORAGE_KEY, JSON.stringify(parsed));
    } catch {}
  }, [currentStep, safeTrackId]);

  useEffect(() => {
    if (allDone && !hasShownReadyRef.current) {
      hasShownReadyRef.current = true;
      setShowReady(true);
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
    }

    if (!allDone) {
      hasShownReadyRef.current = false;
    }
  }, [allDone]);

  if (!trackExists) return <Navigate to="/" replace />;

  if (showReady) {
    return (
      <div className={`flex min-h-screen flex-col items-center justify-center px-4 ${trackClassMap[safeTrackId]}`}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="max-w-lg text-center"
        >
          <PartyPopper className="mx-auto h-16 w-16 text-muted-foreground" />
          <h1 className="mt-6 font-display text-5xl font-bold text-foreground">You're Ready 🚀</h1>
          <p className="mt-4 text-lg text-muted-foreground">{track.readyMessage}</p>

          <div className="mt-8 space-y-3">
            <a
              href="#"
              className={`block rounded-xl ${accentBgMap[safeTrackId]} px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90`}
            >
              Open Trainee Presence Guide →
            </a>
            <p className="text-sm text-muted-foreground">
              🎓 Remember to keep your Education Number saved!
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <button
              onClick={() => {
                setCurrentStep(steps.length - 1);
                setShowReady(false);
              }}
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              ← Back to checklist
            </button>
            <button
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Back to track selection
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${trackClassMap[safeTrackId]}`}>
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <button onClick={() => navigate("/")} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Change track
          </button>
          <div className={`rounded-full ${accentBgMap[safeTrackId]} px-3 py-1 text-xs font-semibold text-white`}>
            {track.emoji} {track.name}
          </div>
        </div>
        <div className="h-1 bg-muted">
          <motion.div
            className={`h-full ${accentBgMap[safeTrackId]}`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm font-bold text-foreground">{percentage}% complete</span>
        </div>

        <div className="mb-8 flex gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`h-2 flex-1 rounded-full transition-colors ${
                i === currentStep
                  ? accentBgMap[safeTrackId]
                  : isStepComplete(i)
                    ? `${accentBgMap[safeTrackId]} opacity-40`
                    : "bg-muted"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground">{step.title}</h2>
            <p className="mt-1 text-muted-foreground">{step.subtitle}</p>

            {step.infoContent && (
              <div className="mt-6 space-y-2 rounded-xl border border-border bg-card p-4">
                {step.infoContent.lines.map((line, i) => (
                  <p key={i} className="text-sm text-foreground">{line}</p>
                ))}
              </div>
            )}

            <div className="mt-6 space-y-3">
              {step.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ChecklistItem
                    id={item.id}
                    label={item.label}
                    checked={!!checked[item.id]}
                    optional={item.optional}
                    onToggle={toggle}
                    accentBg={accentBgMap[safeTrackId]}
                  />
                </motion.div>
              ))}
            </div>

            {step.helpSection && (
              <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                <button
                  onClick={() => setHelpOpen(!helpOpen)}
                  className="flex w-full items-center justify-between p-4 text-sm font-medium text-foreground"
                >
                  {step.helpSection.title}
                  {helpOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                <AnimatePresence>
                  {helpOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm text-muted-foreground">
                        {step.helpSection.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
            disabled={currentStep === 0}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
          <button
            onClick={() => {
              if (isLast && allDone) {
                setShowReady(true);
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
              } else {
                setCurrentStep((s) => Math.min(steps.length - 1, s + 1));
              }
            }}
            className={`flex items-center gap-1 rounded-xl ${accentBgMap[safeTrackId]} px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90`}
          >
            {isLast ? (allDone ? "Finish 🎉" : "Next") : "Next"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
