
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { LanguageProvider } from "@/providers/LanguageProvider";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import InstitutionsPage from "@/pages/InstitutionsPage";
import ExamResultsPage from "@/pages/ExamResultsPage";
import BaccalaureateResultsPage from "@/pages/BaccalaureateResultsPage";
import ApplicationGuidancePage from "@/pages/ApplicationGuidancePage";
import ArchivePage from "@/pages/ArchivePage";
import InstitutionsGuidePage from "@/pages/InstitutionsGuidePage";
import CulturalSportSeasonPage from "@/pages/CulturalSportSeasonPage";
import WhatsappGroupsPage from "@/pages/WhatsappGroupsPage";
import InstitutionDetailPage from "@/pages/InstitutionDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="/institutions" element={<InstitutionsPage />} />
                <Route path="/institutions/:id" element={<InstitutionDetailPage />} />
                <Route path="/exam-results" element={<ExamResultsPage />} />
                <Route path="/baccalaureate-results" element={<BaccalaureateResultsPage />} />
                <Route path="/application-guidance" element={<ApplicationGuidancePage />} />
                <Route path="/archive" element={<ArchivePage />} />
                <Route path="/institutions-guide" element={<InstitutionsGuidePage />} />
                <Route path="/cultural-sport-season" element={<CulturalSportSeasonPage />} />
                <Route path="/whatsapp-groups" element={<WhatsappGroupsPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
