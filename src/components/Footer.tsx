import { Link } from "react-router-dom";
import { Scissors, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Scissors className="w-5 h-5 text-primary-foreground rotate-45" />
              </div>
              <span className="font-display text-xl font-bold">
                CrowdMow
              </span>
            </Link>
            <p className="text-background/70 text-sm">
              Connecting lawn lovers with lawn owners through the magic of remote mowing.
            </p>
          </div>

          {/* For Owners */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">For Owners</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/owners" className="hover:text-background transition-colors">How It Works</Link></li>
              <li><Link to="/owners" className="hover:text-background transition-colors">Pricing</Link></li>
              <li><Link to="/security" className="hover:text-background transition-colors">Security</Link></li>
              <li><Link to="/why-human" className="hover:text-background transition-colors">Why Human Operators</Link></li>
            </ul>
          </div>

          {/* For Mowernauts */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">For Mowernauts</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/mowernauts" className="hover:text-background transition-colors">Start Earning</Link></li>
              <li><Link to="/mowernauts" className="hover:text-background transition-colors">The Cockpit</Link></li>
              <li><Link to="/mowernauts" className="hover:text-background transition-colors">Community</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                hello@crowdmow.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                1-800-CROWDMOW
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>© 2024 CrowdMow. All rights reserved. Making lawns beautiful, one remote mow at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
