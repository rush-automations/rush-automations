import industrialImg from "@/assets/industrial-automation.jpg";
import { Factory, BookOpen, Receipt, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Factory,
    title: "Supply Chain Connectivity",
    description: "Connect builders directly with manufacturers. AI analyzes sourcing options, lead times, and pricing to optimize your supply chain.",
  },
  {
    icon: BookOpen,
    title: "Training & Onboarding Material",
    description: "Automatically generate step-by-step guides for complex physical tasks—assembly, cooking, maintenance—from existing SOPs and video.",
  },
  {
    icon: Receipt,
    title: "Financial Analytics",
    description: "Layer intelligent analytics on top of QuickBooks, ERPs, and bank transactions. Surface margin insights, flag anomalies, forecast cash flow.",
  },
];

const IndustrialSection = () => {
  return (
    <section id="industrial" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-md text-sm font-medium">
              <Factory size={14} />
              Industrial & General Automations
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary tracking-tight">
              Scale operations with{" "}
              <span className="text-primary">intelligent automation</span>
            </h2>
            <div className="space-y-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center">
                    <f.icon size={18} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="hero" className="gap-2 mt-2">
              Explore Solutions <ArrowRight size={16} />
            </Button>
          </div>
          <div>
            <div className="rounded-md overflow-hidden border border-border shadow-lg">
              <img src={industrialImg} alt="Industrial automation and supply chain" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialSection;
