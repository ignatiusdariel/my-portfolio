import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DottedCursor from "./components/DottedCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Cursor */}
        <DottedCursor />

        <div className="scanlines" />

        <div className="scratch s1" />
        <div className="scratch s2" />
        <div className="scratch s3" />

        <div className="strip top">
          {Array.from({ length: 40 }).map((_, i) => <div key={i} className="sprocket" />)}
        </div>

        <div className="strip bot">
          {Array.from({ length: 40 }).map((_, i) => <div key={i} className="sprocket" />)}
        </div>

        <div className="sidestrip left">
          {Array.from({ length: 18 }).map((_, i) => <div key={i} className="sprocket-vert" />)}
        </div>

        <div className="sidestrip right">
          {Array.from({ length: 18 }).map((_, i) => <div key={i} className="sprocket-vert" />)}
        </div>

        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
