import qsrKitchen from "@/assets/qsr-kitchen.jpg";
import { Link } from "react-router-dom";
import { UtensilsCrossed, BarChart3, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Delivery Provider Management",
    description: "Unify DoorDash, UberEats, and Grubhub into a single command center. Automate menu syncing, pricing, and order routing.",
  },
  {
    icon: BarChart3,
    title: "Unified Franchise Dashboards",
    description: "Aggregate data across multiple restaurant ERPs into one real-time view. Track sales, labor, and inventory across all locations.",
  },
  {
    icon: Eye,
    title: "CCTV Labor Analytics",
    description: "AI-powered video analysis turns security footage into labor utilization insights. Identify bottlenecks, optimize staffing, reduce waste.",
  },
];

const QSRSection = () => {
  return (
    <section id="qsr" className="py-20 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-md overflow-hidden border border-border shadow-lg">
              <img src={qsrKitchen} alt="Quick service restaurant with AI analytics" className="w-full h-auto" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald/10 text-emerald px-3 py-1.5 rounded-md text-sm font-medium">
              <UtensilsCrossed size={14} />
              Quick Service Restaurants
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary tracking-tight">
              Built for the speed of <span className="text-primary">QSR operations</span>
            </h2>
            <div className="space-y-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild variant="hero" className="gap-2 mt-2">
              <Link to="/qsr-solutions">
                Explore QSR Solutions <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QSRSection;
