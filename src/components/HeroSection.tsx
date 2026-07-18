import { ArrowUpRight } from "lucide-react";

const apps = [
  {
    name: "Tribe",
    description: "Agentic workplace communication",
    url: "https://tribe-platform.netlify.app/",
  },
  {
    name: "Drive Draw",
    description: "Cloud enabled diagramming",
    url: "https://draw.rush-automation.com/",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-secondary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] border border-primary/5 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter">
            <span className="text-foreground">Rush</span>
            <span className="text-primary">.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Automations
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-card border border-border rounded-md px-6 py-4 hover:border-primary/50 transition-colors"
            >
              <div className="text-left">
                <p className="font-display font-semibold text-foreground">{app.name}</p>
                <p className="text-sm text-muted-foreground">{app.description}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.3
        }} />
      </div>
    </section>
  );
};

export default HeroSection;