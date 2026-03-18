import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import industrialImg from "@/assets/industrial-automation.jpg";
import { Factory, BookOpen, Receipt } from "lucide-react";

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

const IndustrialSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-20">
        <div className="container">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
              <span className="text-primary">Industrial</span> Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Scale your industrial operations with intelligent automation designed to optimize supply chains, streamline training, and deliver deep financial insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <div className="rounded-md overflow-hidden border border-border shadow-lg">
                <img src={industrialImg} alt="Industrial automation and supply chain" className="w-full h-auto" />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold font-display">Key Capabilities</h2>
              <div className="space-y-6">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-secondary/10 flex items-center justify-center">
                      <f.icon size={24} className="text-secondary" />
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

export default IndustrialSolutions;
