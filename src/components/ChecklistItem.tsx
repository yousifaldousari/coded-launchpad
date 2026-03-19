import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Props {
  id: string;
  label: string;
  checked: boolean;
  optional?: boolean;
  onToggle: (id: string) => void;
  accentBg: string;
}

export default function ChecklistItem({ id, label, checked, optional, onToggle, accentBg }: Props) {
  return (
    <motion.button
      onClick={() => onToggle(id)}
      className="flex w-full items-center gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-muted-foreground/30"
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
          checked
            ? `${accentBg} border-transparent`
            : "border-muted-foreground/30 bg-transparent"
        }`}
      >
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            <Check className="h-4 w-4 text-white" strokeWidth={3} />
          </motion.div>
        )}
      </div>
      <span className={`text-sm font-medium ${checked ? "text-muted-foreground line-through" : "text-foreground"}`}>
        {label}
      </span>
      {optional && (
        <span className="ml-auto text-xs text-muted-foreground">Optional</span>
      )}
    </motion.button>
  );
}
