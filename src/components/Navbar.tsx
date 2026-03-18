import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Rush Automations" className="h-8 w-8" />
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            Rush <span className="text-primary">Automations</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="/#qsr" onClick={(e) => handleNavClick(e, '#qsr')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Restaurants</a>
          <a href="/#industrial" onClick={(e) => handleNavClick(e, '#industrial')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Industrial</a>
          <Button variant="hero" size="sm">Get Started</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border animate-slide-up">
          <div className="container py-4 flex flex-col gap-3">
            <a href="/#services" onClick={(e) => handleNavClick(e, '#services')} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Services</a>
            <a href="/#qsr" onClick={(e) => handleNavClick(e, '#qsr')} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Restaurants</a>
            <a href="/#industrial" onClick={(e) => handleNavClick(e, '#industrial')} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">Industrial</a>
            <Button variant="hero" size="sm">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
