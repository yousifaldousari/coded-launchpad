import { useNavigate } from "react-router-dom";
import { ArrowLeft, Monitor, Cpu, HardDrive, MemoryStick, MonitorSmartphone, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const specs = [
  { label: "RAM", icon: MemoryStick, min: "8 GB", rec: "16 GB", nice: "32 GB" },
  { label: "Processor", icon: Cpu, min: "Intel i5 / AMD Ryzen 5", rec: "Intel i7 / AMD Ryzen 7", nice: "i9 / Ryzen 9 / Apple M2/M4 Pro" },
  { label: "Storage", icon: HardDrive, min: "256 GB SSD", rec: "512 GB SSD", nice: "1 TB SSD" },
  { label: "Screen Size", icon: MonitorSmartphone, min: '13"', rec: '13–15"', nice: '15"' },
  { label: "Manufacture Year", icon: Calendar, min: "2020+", rec: "2023+", nice: "Latest year" },
  { label: "Operating System", icon: Monitor, min: "Windows 10+ / macOS 12+", rec: "Windows 10+ / macOS Big Sur", nice: "Latest versions" },
];

const recommendations = [
  { name: "Apple MacBook Pro 14-inch Laptop", url: "https://www.xcite.com/apple-macbook-pro-14-inch-laptop/p" },
  { name: "Lenovo Yoga Slim 7 — i5, 16 GB RAM, 1 TB SSD, 13″", url: "https://www.xcite.com/lenovo-yoga-slim-7/p" },
  { name: "HP Envy x360 2-in-1 — i7, 16 GB RAM, 512 GB SSD, 13.3″", url: "https://www.xcite.com/hp-15-2in1-laptop-intel-core-i7-16gb-ram-512gb-ssd-13-3-inch-intel-iris-xe-windows-11-home-13-bf0018ne-silver/p" },
  { name: "Apple MacBook Air M1", url: "https://www.xcite.com/apple-macbook-air-m1/p" },
];

export default function FullStackDeviceRequirements() {
  const navigate = useNavigate();

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
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <h1 className="font-display text-3xl font-bold text-foreground">
            Device Requirements
          </h1>
          <p className="mt-2 text-muted-foreground">
            Every student should have a portable laptop they can bring to campus and take home.
          </p>

          {/* Specs Table - Cards */}
          <div className="mt-8 space-y-3">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-track-fullstack/10">
                    <spec.icon className="h-4 w-4 text-track-fullstack" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{spec.label}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted p-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Minimum</p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground">{spec.min}</p>
                  </div>
                  <div className="rounded-lg border-2 border-track-fullstack/30 bg-track-fullstack/5 p-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-track-fullstack">Recommended</p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground">{spec.rec}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Nice to Have</p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground">{spec.nice}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <h2 className="font-display text-lg font-bold text-foreground">💻 Laptop Recommendations</h2>
            <p className="mt-1 text-sm text-muted-foreground">Example computer recommendations from our side:</p>
            <div className="mt-4 space-y-2">
              {recommendations.map((rec) => (
                <a
                  key={rec.name}
                  href={rec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <span>{rec.name}</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
