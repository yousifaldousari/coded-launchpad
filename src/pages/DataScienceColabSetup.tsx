import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Monitor, Search, Download, PlusCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Open Google Drive",
    description: 'Go to Google Drive and log in to your account.',
    link: { url: "https://drive.google.com/", text: "Open Google Drive" },
    icon: Monitor,
  },
  {
    number: 2,
    title: "Access the Marketplace",
    description: 'Click the + New button in the top left corner, hover over More, and select Connect more apps.',
    link: { url: "https://workspace.google.com/marketplace/app/colaboratory/1014160490159", text: "Connect More Apps" },
    icon: Search,
  },
  {
    number: 3,
    title: "Search for Colab",
    description: 'In the Google Workspace Marketplace search bar, type "Colaboratory" or "Colab".',
    icon: Search,
  },
  {
    number: 4,
    title: "Install the App",
    description: "Select the official Colaboratory app and click Install. You will need to grant permissions and select your Google account to complete the process.",
    icon: Download,
  },
  {
    number: 5,
    title: "Create a New Notebook",
    description: "Once installed, you can create a new notebook at any time by clicking + New > More > Google Colaboratory.",
    icon: PlusCircle,
  },
];

export default function DataScienceColabSetup() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <motion.button
          onClick={() => navigate("/track/datascience")}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          whileHover={{ x: -3 }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Data Science Checklist
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-2 text-3xl">📊</div>
          <h1 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Google Colab Setup Guide
          </h1>
          <p className="mb-8 text-muted-foreground">
            Install Google Colaboratory in your Google Drive so you can create notebooks directly from the "New" menu.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="rounded-xl border border-border bg-card p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-track-data text-white font-bold">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  {step.link && (
                    <a
                      href={step.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-track-data px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      {step.link.text}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 rounded-xl border border-border bg-card p-5"
        >
          <p className="text-sm text-muted-foreground">
            💡 <strong className="text-foreground">Tip:</strong> After installation, Google Colab will always be available in your Google Drive under <strong>+ New → More → Google Colaboratory</strong>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
