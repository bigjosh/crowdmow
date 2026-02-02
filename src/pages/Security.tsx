import { Shield, Lock, Eye, Camera, UserCheck, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Security & Privacy
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Your Property, <span className="text-gradient-hero">Protected</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We take security seriously. From background-checked operators to encrypted connections, your safety is our top priority.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Vetted Operators</h3>
              <p className="text-muted-foreground">Every Mowernaut undergoes a comprehensive background check before joining our platform. We verify identity, employment history, and conduct criminal background screening.</p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Encrypted Connections</h3>
              <p className="text-muted-foreground">All video feeds and control signals are transmitted over military-grade encrypted connections. No one can intercept or tamper with your mowing session.</p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Lawn-Only Vision</h3>
              <p className="text-muted-foreground">Our mowers are designed to focus on the grass. Camera angles are optimized for lawn view only, and AI blurs any windows or sensitive areas automatically.</p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Camera className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Session Recording</h3>
              <p className="text-muted-foreground">Every mowing session is recorded and stored for 30 days. If any issue arises, you have complete visibility into what happened and when.</p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Full Insurance</h3>
              <p className="text-muted-foreground">Every mowing session is covered by our comprehensive insurance policy. Property damage, equipment malfunction - we've got you covered up to $1M.</p>
            </div>

            <div className="p-8 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Emergency Stop</h3>
              <p className="text-muted-foreground">One-click emergency stop button accessible to both owners and operators. The mower stops instantly if anything unexpected happens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-primary mb-2">50K+</p>
              <p className="text-muted-foreground">Mowing Sessions</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-primary mb-2">0</p>
              <p className="text-muted-foreground">Security Incidents</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-muted-foreground">Uptime</p>
            </div>
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-primary mb-2">4.9★</p>
              <p className="text-muted-foreground">Trust Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Commitment */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-foreground mb-4">
                Our Privacy Commitment
              </h2>
              <p className="text-xl text-muted-foreground">
                We believe in transparency. Here's exactly what we do (and don't do) with your data.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { text: "We never sell your data to third parties", do: true },
                { text: "Video feeds are encrypted end-to-end", do: true },
                { text: "Mowernauts cannot see inside your home", do: true },
                { text: "You can delete all your data at any time", do: true },
                { text: "Session recordings auto-delete after 30 days", do: true },
                { text: "No facial recognition or people tracking", do: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-card rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
            Feel Safe with CrowdMow
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Questions about security? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/owners">
              <Button variant="hero" size="xl">
                Get Started
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              Contact Security Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
