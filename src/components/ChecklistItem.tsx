import type { MouseEvent, PointerEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";

interface Props {
  id: string;
  label: string;
  checked: boolean;
  optional?: boolean;
  onToggle: (id: string) => void;
  accentBg: string;
  link?: { url: string; text: string };
  links?: { url: string; text: string }[];
  note?: string;
}

export default function ChecklistItem({ id, label, checked, optional, onToggle, accentBg, link, links, note }: Props) {
  const navigate = useNavigate();

  const allLinks = links ? links : link ? [link] : [];

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, linkItem: { url: string; text: string }) => {
    event.stopPropagation();

    const isInternal = linkItem.url.startsWith("/");
    const isDiscord = /discord\.(com|gg)/i.test(linkItem.url);

    if (isInternal) {
      event.preventDefault();
      navigate(linkItem.url);
      return;
    }

    if (isDiscord) {
      event.preventDefault();
      window.open(linkItem.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleLinkPointerDown = (event: PointerEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-full items-center gap-2">
        <motion.button
          type="button"
          onClick={() => onToggle(id)}
          className="flex flex-1 items-center gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-muted-foreground/30"
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

        {allLinks.map((linkItem, i) => (
          <a
            key={i}
            href={linkItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 flex shrink-0 items-center gap-1.5 rounded-lg ${accentBg} px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90`}
            onClick={(e) => handleLinkClick(e, linkItem)}
            onPointerDown={handleLinkPointerDown}
          >
            {linkItem.text}
            <ExternalLink className="h-3 w-3" />
          </a>
        ))}
      </div>
      {note && (
        <p className="ml-9 text-muted-foreground italic text-base">{note}</p>
      )}
    </div>
  );
}
