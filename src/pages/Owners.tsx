import { Check, ArrowRight, Calendar, Clock, Sparkles, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ownerAppMockup from "@/assets/owner-app-mockup.png";

const Owners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-sky relative overflow-hidden">
        <div className="absolute inset-0 grass-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                For Lawn Owners
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Perfect Lawn,
                <span className="text-gradient-hero block">Zero Effort</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Get your lawn mowed by a real human who understands grass, takes pride in their work, and delivers professional results every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="owner" size="xl">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="xl">
                  See How It Works
                </Button>
              </div>
            </div>

            {/* App Mockup */}
            <div className="animate-fade-in flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
                <img 
                  src={ownerAppMockup} 
                  alt="CrowdMow Owner App" 
                  className="relative rounded-3xl shadow-lg max-w-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              The CrowdMow Owner Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your lawn looking its best
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Track Your Lawn</h3>
              <p className="text-muted-foreground">See exactly when your lawn was last mowed and when it's due for the next session.</p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Easy Scheduling</h3>
              <p className="text-muted-foreground">Book a mow with just a few taps. Choose your preferred time and service level.</p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Service Levels</h3>
              <p className="text-muted-foreground">From quick trims to full premium treatments - choose what works for your lawn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              No hidden fees. No surprises. Just beautiful lawns.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-gradient-hero p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">CrowdMow Complete</h3>
                <p className="text-primary-foreground/80">Everything you need for a perfect lawn</p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-muted rounded-2xl">
                    <p className="text-sm text-muted-foreground mb-2">One-Time Mower Deposit</p>
                    <p className="font-display text-5xl font-bold text-foreground">$999</p>
                    <p className="text-sm text-muted-foreground mt-2">Shipping included</p>
                  </div>
                  
                  <div className="text-center p-6 bg-muted rounded-2xl">
                    <p className="text-sm text-muted-foreground mb-2">Mowing Time</p>
                    <p className="font-display text-5xl font-bold text-foreground">$15<span className="text-2xl">/hr</span></p>
                    <p className="text-sm text-muted-foreground mt-2">Pay only for what you use</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Exclusive CrowdMow robotic mower",
                    "Human-operated for perfect results",
                    "Real-time video during mowing",
                    "SLAM-generated lawn maps",
                    "Fully insured operations",
                    "24/7 customer support",
                    "Flexible scheduling",
                    "No long-term contracts"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="owner" size="xl" className="w-full">
                  Get Your Mower Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">100% Insured</h3>
              <p className="text-muted-foreground">Full coverage for your property and our equipment. Peace of mind guaranteed.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Vetted Operators</h3>
              <p className="text-muted-foreground">Every Mowernaut is background-checked and trained to deliver excellence.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Always Available</h3>
              <p className="text-muted-foreground">Mowernauts are online 7 days a week, ready when you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
            Ready for the Perfect Lawn?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join thousands of happy homeowners who've discovered the CrowdMow difference.
          </p>
          <Button variant="hero" size="xl">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Owners;
