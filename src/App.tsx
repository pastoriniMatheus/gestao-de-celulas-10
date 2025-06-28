
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";
import Index from "./pages/Index";
import FormPage from "./pages/FormPage";
import MessagesPage from "./pages/MessagesPage";
import GenealogyPage from "./pages/GenealogyPage";
import KidsPage from "./pages/KidsPage";
import NotificationsPage from "./pages/NotificationsPage";
import { QRRedirect } from "./pages/QRRedirect";
import CellAttendancePage from "./pages/CellAttendancePage";
import MemberAttendancePage from "./pages/MemberAttendancePage";
import NotFound from "./pages/NotFound";
import { AuthCallback } from "./pages/AuthCallback";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/cells" element={<Index />} />
            <Route path="/contacts" element={<Index />} />
            <Route path="/pipeline" element={<Index />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messaging" element={<MessagesPage />} />
            <Route path="/events" element={<Index />} />
            <Route path="/settings" element={<Index />} />
            <Route path="/users" element={<Index />} />
            <Route path="/genealogia" element={<GenealogyPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/notificacoes" element={<NotificationsPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/qr/:keyword" element={<QRRedirect />} />
            <Route path="/cells/:cellId/attendance" element={<CellAttendancePage />} />
            <Route path="/attendance/:cellId" element={<MemberAttendancePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
