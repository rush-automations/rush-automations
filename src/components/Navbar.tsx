import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <Button variant="hero" size="sm">Contact</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border animate-slide-up">
          <div className="container py-4 flex flex-col gap-3">
            <Button variant="hero" size="sm">Contact</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;