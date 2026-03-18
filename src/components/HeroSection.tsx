import heroDashboard from "@/assets/hero-dashboard.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, BarChart3, Eye, Truck } from "lucide-react";

const bentoItems = [
  { icon: Zap, label: "AI Automations", value: "50+ workflows", delay: "0ms" },
  { icon: BarChart3, label: "Unified Dashboards", value: "Real-time data", delay: "50ms" },
  { icon: Eye, label: "CCTV Analytics", value: "Labor insights", delay: "100ms" },
  { icon: Truck, label: "Supply Chain", value: "End-to-end", delay: "150ms" },
];

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-md text-sm font-medium animate-fade-in">
              <Zap size={14} />
              AI-Powered Automation for Small Business
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-secondary tracking-tight leading-[1.1] animate-slide-up">
              Automate operations.{" "}
              <span className="text-primary">Accelerate growth.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-slide-up" style={{ animationDelay: "80ms" }}>
              From quick-service restaurants to manufacturing floors, Rush Automations connects your systems, analyzes your data, and eliminates manual work.
            </p>
            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: "160ms" }}>
              <Button variant="hero" size="lg" className="gap-2">
                Book a Demo <ArrowRight size={16} />
              </Button>
              <Button variant="heroOutline" size="lg">
                See How It Works
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {bentoItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border border-border rounded-md p-4 animate-slide-up hover:border-primary/30 transition-colors duration-150"
                  style={{ animationDelay: item.delay }}
                >
                  <item.icon size={20} className="text-primary mb-2" />
                  <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                  <p className="text-sm font-display font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-md overflow-hidden border border-border animate-fade-in shadow-lg" style={{ animationDelay: "200ms" }}>
              <img src={heroDashboard} alt="Rush Automations unified dashboard" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
