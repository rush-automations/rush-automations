import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import qsrKitchen from "@/assets/qsr-kitchen.jpg";
import { UtensilsCrossed, BarChart3, Eye } from "lucide-react";

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

const QSRSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
              <span className="text-primary">QSR Solutions</span> Overview
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Transform your Quick Service Restaurant operations with our comprehensive suite of intelligent tools designed specifically for the fast-paced food service industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <div className="rounded-md overflow-hidden border border-border shadow-lg">
                <img src={qsrKitchen} alt="Quick service restaurant with AI analytics" className="w-full h-auto" />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold font-display">Key Capabilities</h2>
              <div className="space-y-6">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <f.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">{f.title}</h3>
                      <p className="text-muted-foreground mt-2">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QSRSolutions;
