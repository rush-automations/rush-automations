import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Rush Automations" className="h-6 w-6" />
            <span className="font-display font-bold text-sm text-foreground">
              Rush <span className="text-primary">Automations</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rush Automations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
