import { useNavigate } from "react-router-dom";
import { ArrowLeft, Monitor, HardDrive, MemoryStick, MonitorSmartphone, Calendar, Tablet } from "lucide-react";
import { motion } from "framer-motion";

const specs = [
  { label: "Device", icon: Tablet, min: "iPad with Keyboard or Laptop", rec: "Laptop", nice: "Laptop" },
  { label: "RAM", icon: MemoryStick, min: "8 GB", rec: "8 GB", nice: "16 GB" },
  { label: "Storage", icon: HardDrive, min: "128 GB SSD", rec: "256 GB SSD", nice: "512 GB SSD" },
  { label: "Screen Size", icon: MonitorSmartphone, min: '13"', rec: '13–15"', nice: '15"' },
  { label: "Manufacture Year", icon: Calendar, min: "2021+", rec: "2023+", nice: "Latest year" },
  { label: "Operating System", icon: Monitor, min: "Windows 10+ / macOS 12+", rec: "Windows 10+ / macOS", nice: "Latest versions" },
];

export default function DataScienceDeviceRequirements() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate("/track/datascience")}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Checklist
          </button>
          <div className="rounded-full bg-track-data px-3 py-1 text-xs font-semibold text-white">
            📊 AI & Data Science Bootcamp
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-track-data/10">
                    <spec.icon className="h-4 w-4 text-track-data" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{spec.label}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted p-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Minimum</p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground">{spec.min}</p>
                  </div>
                  <div className="rounded-lg border-2 border-track-data/30 bg-track-data/5 p-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-track-data">Recommended</p>
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
        </motion.div>
      </div>
    </div>
  );
}
