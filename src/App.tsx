import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import TrackChecklist from "./pages/TrackChecklist.tsx";
import CyberDeviceRequirements from "./pages/CyberDeviceRequirements.tsx";
import FullStackDeviceRequirements from "./pages/FullStackDeviceRequirements.tsx";
import FullStackGitSetup from "./pages/FullStackGitSetup.tsx";
import DataScienceColabSetup from "./pages/DataScienceColabSetup.tsx";
import DataScienceDeviceRequirements from "./pages/DataScienceDeviceRequirements.tsx";
import TraineePresenceGuide from "./pages/TraineePresenceGuide.tsx";
import TraineeEvaluationMetrics from "./pages/TraineeEvaluationMetrics.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/track/cybersecurity/device-requirements" element={<CyberDeviceRequirements />} />
          <Route path="/track/fullstack/device-requirements" element={<FullStackDeviceRequirements />} />
          <Route path="/track/fullstack/git-setup" element={<FullStackGitSetup />} />
          <Route path="/track/datascience/device-requirements" element={<DataScienceDeviceRequirements />} />
          <Route path="/track/datascience/colab-setup" element={<DataScienceColabSetup />} />
          <Route path="/track/:trackId/presence-guide" element={<TraineePresenceGuide />} />
          <Route path="/track/:trackId/evaluation-metrics" element={<TraineeEvaluationMetrics />} />
          <Route path="/track/:trackId" element={<TrackChecklist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
