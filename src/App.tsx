import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import OrganizingCommitteePage from './pages/committee/OrganizingCommitteePage';
import AdvisoryCommitteePage from './pages/committee/AdvisoryCommitteePage';
import TechnicalCommitteePage from './pages/committee/TechnicalCommitteePage';
import VolumeEditorsPage from './pages/committee/VolumeEditorsPage';
import ConferenceProceedingsPage from './pages/publication/ConferenceProceedingsPage'; // New import
import JournalPublicationPage from './pages/publication/JournalPublicationPage';     // New import
import PaperStructurePage from './pages/publication/PaperStructurePage';             // New import
import StyleOfReferencingPage from './pages/publication/StyleOfReferencingPage';     // New import
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import Publication from "./pages/Publication";
import Committee from "./pages/Committee";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Navbar />
        <main className="pt-24"> {/* Changed from pt-20 to pt-24 to ensure content clears the fixed Navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/publication/proceedings" element={<ConferenceProceedingsPage />} />
            <Route path="/publication/journal" element={<JournalPublicationPage />} />
            <Route path="/publication/structure" element={<PaperStructurePage />} />
            <Route path="/publication/referencing" element={<StyleOfReferencingPage />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/committee/organizing" element={<OrganizingCommitteePage />} />
            <Route path="/committee/advisory" element={<AdvisoryCommitteePage />} />
            <Route path="/committee/technical" element={<TechnicalCommitteePage />} />
            <Route path="/committee/editors" element={<VolumeEditorsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
