import { Brain, Bot, Heart, Eye, Sparkles, Shield, ArrowRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const WhyHuman = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 grass-pattern opacity-50" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Human Intelligence
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Why Human Operators <span className="text-gradient-hero">Beat Robots</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Autonomous mowers are impressive technology. But for a truly perfect lawn, nothing beats the judgment, care, and pride of a real human.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Autonomous Robots */}
            <div className="p-8 bg-muted rounded-2xl border-2 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted-foreground/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-muted-foreground">Autonomous Robots</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Random, unpredictable patterns",
                  "Can't handle obstacles intelligently",
                  "No understanding of lawn health",
                  "Misses edges and corners",
                  "Can damage flower beds",
                  "No aesthetic judgment",
                  "Can't adapt to conditions",
                  "No pride in the result",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Human Operators */}
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">CrowdMow Humans</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Beautiful, intentional stripe patterns",
                  "Skillfully navigates any obstacle",
                  "Understands grass types and needs",
                  "Perfect edge-to-edge coverage",
                  "Respects garden beds and features",
                  "Takes pride in aesthetics",
                  "Adapts to weather and conditions",
                  "Satisfaction in a job well done",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              The Human Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Pattern Recognition</h3>
              <p className="text-muted-foreground">Humans instantly recognize problem areas - dry patches, weeds, uneven ground - and adjust accordingly. AI still struggles with edge cases.</p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Care & Pride</h3>
              <p className="text-muted-foreground">Our Mowernauts take personal pride in their work. They want your lawn to look perfect because it's satisfying. Robots don't care.</p>
            </div>

            <div className="text-center p-8 bg-card rounded-2xl shadow-md">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Aesthetic Judgment</h3>
              <p className="text-muted-foreground">Those beautiful baseball-field stripes? The perfect diagonal patterns? Only a human can create and appreciate that artistry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Best of Both Worlds */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">
              The Best of Both Worlds
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              CrowdMow combines robotic precision with human intelligence. Our mowers are high-tech, reliable machines. But the brains behind them? That's 100% human.
            </p>
            
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary mb-1">🤖</p>
                  <p className="text-sm text-muted-foreground">Robot Precision</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary mb-1">+</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-primary mb-1">🧠</p>
                  <p className="text-sm text-muted-foreground">Human Intelligence</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-display text-4xl font-bold text-primary mb-1">=</p>
                <p className="font-display text-2xl font-bold text-foreground">Perfect Lawns, Every Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 italic">
              "I tried three different autonomous mowers. They all left patches, missed corners, and had no sense of pattern. My CrowdMow operator makes my lawn look like a golf course."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">D</div>
              <div className="text-left">
                <p className="font-semibold text-foreground">David S.</p>
                <p className="text-sm text-muted-foreground">Lawn Owner, Seattle WA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-foreground mb-6">
            Experience the Human Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join thousands of homeowners who've discovered what a truly great lawn looks like.
          </p>
          <Link to="/owners">
            <Button variant="hero" size="xl">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyHuman;
