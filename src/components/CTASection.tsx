import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container text-center max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground tracking-tight">
          Ready to eliminate manual work?
        </h2>
        <p className="text-secondary-foreground/70 text-lg">
          Join small businesses already using Rush Automations to streamline operations, cut costs, and grow faster.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="hero" size="lg" className="gap-2">
            Book a Demo <ArrowRight size={16} />
          </Button>
          <Button asChild variant="heroOutline" size="lg" className="border-primary/50 text-primary-foreground hover:bg-primary hover:text-primary-foreground">
            <a href="mailto:nathan@rush-automations.com">Contact Sales</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
