import { useNavigate } from "react-router-dom";
import { ArrowLeft, Monitor, Cpu, HardDrive, MemoryStick, Layers, MonitorSmartphone, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const specs = [
  { label: "Operating System", icon: Monitor, min: "Windows 10 / Ubuntu", rec: "Windows 11 / Ubuntu Linux (24.04)", nice: "Linux (24+) Latest versions" },
  { label: "RAM", icon: MemoryStick, min: "16 GB", rec: "16 GB", nice: "32 GB" },
  { label: "Processor", icon: Cpu, min: "Intel i5", rec: "Intel i7", nice: "i9 / AMD" },
  { label: "Storage", icon: HardDrive, min: "256 GB SSD", rec: "500 GB SSD", nice: "1 TB SSD" },
  { label: "Virtualization", icon: Layers, min: "VT-x / AMD-V", rec: "VT-x / AMD-V", nice: "VT-x / AMD-V" },
  { label: "Video Card", icon: MonitorSmartphone, min: "Integrated", rec: "Dedicated", nice: "Dedicated" },
  { label: "Screen Size", icon: Monitor, min: '13"', rec: '13–15"', nice: '15"' },
  { label: "Manufacture Year", icon: Calendar, min: "2018+", rec: "2020+", nice: "Latest year" },
];

export default function CyberDeviceRequirements() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate("/track/cybersecurity")}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Checklist
          </button>
          <div className="rounded-full bg-track-cyber px-3 py-1 text-xs font-semibold text-white">
            🔐 Cybersecurity Bootcamp
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-track-cyber/10">
                    <spec.icon className="h-4 w-4 text-track-cyber" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{spec.label}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-muted p-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Minimum</p>
                    <p className="mt-0.5 text-xs font-semibold text-foreground">{spec.min}</p>
                  </div>
                  <div className="rounded-lg border-2 border-track-cyber/30 bg-track-cyber/5 p-2.5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-track-cyber">Recommended</p>
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

          {/* Recommendation */}
          <div className="mt-8 rounded-xl border border-border bg-card p-5">
            <h2 className="font-display text-lg font-bold text-foreground">💻 Laptop Recommendation</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              HP Envy x360 2-in-1 Laptop — Intel Core i7, 16 GB RAM, 512 GB SSD, 13.3″
            </p>
            <a
              href="https://www.xcite.com/hp-15-2in1-laptop-intel-core-i7-16gb-ram-512gb-ssd-13-3-inch-intel-iris-xe-windows-11-home-13-bf0018ne-silver/p"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-track-cyber px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              View on Xcite <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
