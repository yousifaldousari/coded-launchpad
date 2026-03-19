import { useState, useEffect, useCallback } from "react";
import type { TrackId } from "@/lib/trackData";
import { getStepsForTrack } from "@/lib/trackData";

const STORAGE_KEY = "coded-onboarding";

interface ProgressState {
  [trackId: string]: {
    [itemId: string]: boolean;
  };
}

export function useChecklistProgress(trackId: TrackId) {
  const steps = getStepsForTrack(trackId);
  const allItems = steps.flatMap((s) => s.items);

  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: ProgressState = JSON.parse(raw);
        return parsed[trackId] || {};
      }
    } catch {}
    return {};
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const state: ProgressState = raw ? JSON.parse(raw) : {};
      state[trackId] = checked;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [checked, trackId]);

  const toggle = useCallback((itemId: string) => {
    setChecked((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  }, []);

  const completedCount = allItems.filter((i) => checked[i.id]).length;
  const totalCount = allItems.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const allDone = completedCount === totalCount;

  const isStepComplete = (stepIndex: number) => {
    const step = steps[stepIndex];
    return step.items.every((i) => checked[i.id]);
  };

  return { checked, toggle, completedCount, totalCount, percentage, allDone, isStepComplete, steps };
}
