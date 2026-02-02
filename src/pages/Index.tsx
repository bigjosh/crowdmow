import { Link } from "react-router-dom";
import { Home, Gamepad2, ArrowRight, Shield, Brain, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroLawn from "@/assets/hero-lawn.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroLawn} 
            alt="Beautiful mowed lawn" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              The Future of
              <span className="block text-gradient-gold">Lawn Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-12">
              Remote-controlled precision mowing by humans who love lawns.
              No autonomous robots. Real people. Perfect results.
            </p>
          </div>
          
          {/* Audience Selector */}
          <div className="animate-fade-in flex flex-col md:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
            <Link to="/owners" className="w-full md:w-auto">
              <div className="group relative p-8 bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-primary/20">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Home className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">I Have a Lawn</h3>
                <p className="text-muted-foreground mb-4">Get your lawn mowed perfectly by a human who cares</p>
                <Button variant="owner" size="lg" className="w-full">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
            
            <Link to="/mowernauts" className="w-full md:w-auto">
              <div className="group relative p-8 bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-sky/20">
                <div className="w-16 h-16 rounded-xl bg-sky flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">I Love Mowing</h3>
                <p className="text-muted-foreground mb-4">Earn money remotely mowing lawns from anywhere</p>
                <Button variant="mowernaut" size="lg" className="w-full">
                  Start Earning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background grass-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              How CrowdMow Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The perfect blend of human expertise and robotic precision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                1
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Get Your Mower</h3>
              <p className="text-muted-foreground">We ship our exclusive CrowdMow robot directly to your door. Simple setup takes 5 minutes.</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                2
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Schedule a Mow</h3>
              <p className="text-muted-foreground">Pick a time that works for you. Our Mowernauts are available 7 days a week.</p>
            </div>
            
            <div className="text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                3
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Enjoy Perfection</h3>
              <p className="text-muted-foreground">Watch as your lawn is expertly mowed by a human operator who takes pride in their work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Complete coverage for your property and our equipment.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Human Intelligence</h3>
              <p className="text-sm text-muted-foreground">Real people who understand your lawn's unique needs.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Star className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">5-Star Results</h3>
              <p className="text-sm text-muted-foreground">Rated operators who take pride in perfect lawns.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">Join thousands of happy lawn owners and operators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">
            What People Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-card rounded-2xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">"I never thought I'd say this, but I actually look forward to my lawn being mowed. The Mowernaut knows exactly what my lawn needs!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">S</div>
                <div>
                  <p className="font-semibold text-foreground">Sarah M.</p>
                  <p className="text-sm text-muted-foreground">Lawn Owner, Austin TX</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-2xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">"As a Mowernaut, I get to relax with a beautiful view of green grass while earning money. It's incredibly zen and satisfying."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky/20 flex items-center justify-center text-sky font-bold">J</div>
                <div>
                  <p className="font-semibold text-foreground">James K.</p>
                  <p className="text-sm text-muted-foreground">Mowernaut, Portland OR</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-2xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">"The app is so easy to use. I can see exactly when my lawn was last mowed and schedule the next one in seconds."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">M</div>
                <div>
                  <p className="font-semibold text-foreground">Michael R.</p>
                  <p className="text-sm text-muted-foreground">Lawn Owner, Denver CO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Join the Lawn Revolution?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Whether you have a lawn that needs love or you want to become a Mowernaut, we're ready for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/owners">
              <Button variant="hero" size="xl">
                I Have a Lawn
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/mowernauts">
              <Button variant="heroOutline" size="xl">
                I Want to Mow
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
