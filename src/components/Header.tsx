import { Link } from "react-router-dom";
import { Scissors } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <Scissors className="w-5 h-5 text-primary-foreground rotate-45" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Crowd<span className="text-gradient-hero">Mow</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/owners" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            For Lawn Owners
          </Link>
          <Link to="/mowernauts" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            For Mowernauts
          </Link>
          <Link to="/security" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Security
          </Link>
          <Link to="/why-human" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Why Human?
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
