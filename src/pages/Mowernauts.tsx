import { ArrowRight, DollarSign, Gamepad2, Monitor, MapPin, Clock, Star, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cockpitMockup from "@/assets/cockpit-mockup.png";

const Mowernauts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-sky blur-3xl" />
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky/20 rounded-full text-sky text-sm font-medium mb-6">
                <Gamepad2 className="w-4 h-4" />
                For Mowernauts
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-background mb-6 leading-tight">
                Earn Money.
                <span className="text-sky block">Mow Lawns.</span>
                <span className="block">From Anywhere.</span>
              </h1>
              <p className="text-xl text-background/80 mb-8 max-w-lg">
                Join our community of remote lawn care operators. Experience the satisfaction of a perfectly mowed lawn while earning real money from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="mowernaut" size="xl">
                  Start Earning Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Cockpit Mockup */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-sky rounded-3xl opacity-20 blur-2xl" />
                <img 
                  src={cockpitMockup} 
                  alt="CrowdMow Control Cockpit" 
                  className="relative rounded-2xl shadow-2xl w-full border border-background/20"
                />
                <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Live Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Earn Real Money, Your Way
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible hours, relaxing work, and competitive pay
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-sky/10 to-primary/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <DollarSign className="w-8 h-8 text-primary" />
                    <span className="font-display text-6xl font-bold text-foreground">5</span>
                    <span className="text-2xl text-muted-foreground">/hour</span>
                  </div>
                  <p className="text-lg text-foreground mb-4">
                    Earn $5 for every hour you spend mowing
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Work when you want
                    </li>
                    <li className="flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-primary" />
                      Mow from your computer
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      No commute required
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-2xl p-6 shadow-md">
                  <h4 className="font-display font-bold text-foreground mb-4">Example Earnings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-muted-foreground">5 hrs/week</span>
                      <span className="font-bold text-foreground">$100/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-muted-foreground">10 hrs/week</span>
                      <span className="font-bold text-foreground">$200/month</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border-2 border-primary">
                      <span className="text-foreground font-medium">20 hrs/week</span>
                      <span className="font-bold text-primary">$400/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cockpit */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              The CrowdMow Cockpit
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your control center for remote lawn care excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-sky" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">HD Camera View</h3>
              <p className="text-sm text-muted-foreground">Crystal clear POV from the mower's onboard camera. See every blade of grass.</p>
            </div>

            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6 text-sky" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Intuitive Controls</h3>
              <p className="text-sm text-muted-foreground">Simple joystick-style controls. If you can play a video game, you can mow.</p>
            </div>

            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-sky" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">SLAM Maps</h3>
              <p className="text-sm text-muted-foreground">AI-generated lawn maps show you exactly where to mow and what to avoid.</p>
            </div>

            <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-sky" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">Special Notes</h3>
              <p className="text-sm text-muted-foreground">Owner comments about garden beds, pet areas, or special conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Why Become a Mowernaut?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Therapeutic Work</h3>
              <p className="text-muted-foreground">Studies show that watching grass being cut is incredibly calming. It's like meditation, but you're getting paid.</p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">There's nothing quite like seeing a perfectly striped lawn when you're done. Pure pride in a job well done.</p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">Join a global community of lawn enthusiasts. Share tips, compete on leaderboards, and make friends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">
            From Our Mowernauts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-2xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">"I work from home as a developer and mow lawns during my lunch break. It's the perfect mental reset, and I'm earning an extra $200 a month!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky/20 flex items-center justify-center text-sky font-bold">A</div>
                <div>
                  <p className="font-semibold text-foreground">Alex T.</p>
                  <p className="text-sm text-muted-foreground">Mowernaut since 2023</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-2xl shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground mb-4">"Retired and looking for something peaceful to do. CrowdMow lets me spend time with nature without leaving my living room. Plus, the extra income is nice!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky/20 flex items-center justify-center text-sky font-bold">R</div>
                <div>
                  <p className="font-semibold text-foreground">Robert M.</p>
                  <p className="text-sm text-muted-foreground">Mowernaut since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-background mb-6">
            Ready to Join the Mowernaut Corps?
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto mb-10">
            No experience needed. Just a love for green grass and a stable internet connection.
          </p>
          <Button variant="mowernaut" size="xl">
            Apply to Become a Mowernaut
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mowernauts;
