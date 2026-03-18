const stats = [
  { value: "3x", label: "Faster Onboarding", color: "text-primary" },
  { value: "40%", label: "Labor Cost Reduction", color: "text-emerald" },
  { value: "12+", label: "ERP Integrations", color: "text-primary" },
  { value: "99.9%", label: "Platform Uptime", color: "text-emerald" },
];

const StatsSection = () => {
  return (
    <section id="services" className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className={`text-3xl md:text-4xl font-display font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-sm text-secondary-foreground/70 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
