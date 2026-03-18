import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import jennaHero from "@/assets/jenna-hero.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-soft-gradient min-h-[90vh] flex items-center">
      {/* Decorative blur elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blush/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Floating Hearts, Stars & Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top area decorations */}
        <Heart className="absolute top-[8%] left-[10%] w-6 h-6 text-primary/70 fill-primary/40 animate-float" style={{ animationDelay: "0s" }} />
        <Sparkles className="absolute top-[5%] left-[25%] w-5 h-5 text-accent/80 animate-sparkle" style={{ animationDelay: "0.3s" }} />
        <Heart className="absolute top-[12%] right-[30%] w-8 h-8 text-primary/60 fill-primary/30 animate-float-slow rotate-12" style={{ animationDelay: "0.5s" }} />
        <Star className="absolute top-[6%] right-[15%] w-5 h-5 text-accent/70 fill-accent/40 animate-sparkle" style={{ animationDelay: "0.8s" }} />
        <Heart className="absolute top-[15%] right-[8%] w-5 h-5 text-primary/80 fill-primary/50 animate-heart-drift -rotate-12" style={{ animationDelay: "1.2s" }} />

        {/* Left side decorations (near image) */}
        <Sparkles className="absolute top-[25%] left-[5%] w-6 h-6 text-accent/70 animate-sparkle" style={{ animationDelay: "0.4s" }} />
        <Heart className="absolute top-[40%] left-[3%] w-7 h-7 text-primary/70 fill-primary/40 animate-float-reverse rotate-6" style={{ animationDelay: "0.7s" }} />
        <Star className="absolute top-[55%] left-[8%] w-4 h-4 text-accent/80 fill-accent/50 animate-sparkle" style={{ animationDelay: "1s" }} />
        <Heart className="absolute top-[70%] left-[4%] w-5 h-5 text-primary/60 fill-primary/30 animate-heart-drift -rotate-6" style={{ animationDelay: "1.5s" }} />

        {/* Right side decorations (near text) */}
        <Heart className="absolute top-[30%] right-[5%] w-6 h-6 text-primary/70 fill-primary/40 animate-float rotate-12" style={{ animationDelay: "0.2s" }} />
        <Sparkles className="absolute top-[45%] right-[3%] w-5 h-5 text-accent/80 animate-sparkle" style={{ animationDelay: "0.6s" }} />
        <Heart className="absolute top-[60%] right-[7%] w-8 h-8 text-primary/60 fill-primary/30 animate-float-slow -rotate-12" style={{ animationDelay: "0.9s" }} />
        <Star className="absolute top-[75%] right-[4%] w-5 h-5 text-accent/70 fill-accent/40 animate-sparkle" style={{ animationDelay: "1.3s" }} />

        {/* Bottom area decorations */}
        <Heart className="absolute bottom-[15%] left-[20%] w-5 h-5 text-primary/70 fill-primary/40 animate-heart-drift rotate-6" style={{ animationDelay: "0.4s" }} />
        <Sparkles className="absolute bottom-[10%] left-[35%] w-4 h-4 text-accent/70 animate-sparkle" style={{ animationDelay: "1.1s" }} />
        <Heart className="absolute bottom-[12%] right-[25%] w-6 h-6 text-primary/60 fill-primary/30 animate-float -rotate-6" style={{ animationDelay: "0.8s" }} />
        <Star className="absolute bottom-[8%] right-[40%] w-5 h-5 text-accent/80 fill-accent/50 animate-sparkle" style={{ animationDelay: "1.4s" }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-2 lg:order-1">
            <img 
              src={jennaHero} 
              alt="Jenna Ahrens - Your Builder Bestie" 
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
            />
          </div>

          {/* Right Column - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold mb-8 animate-fade-in shadow-pink-lg">
              <Sparkles size={18} className="text-white" />
              <span>Meet Your Builder Bestie</span>
              <Heart size={16} className="text-white fill-white" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="text-gradient">Jenna!</span>
              <br />
              Your Builder Bestie!
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              I help people make smart, strategic real estate decisions. Not emotional. Not rushed. 
              Whether you're buying your first home, selling to move up, or leading a sales team that needs real systems, I've got you.
            </p>

            {/* Split CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/consulting">
                <Button size="lg" className="shadow-pink-lg group text-base px-8 py-6 font-bold rounded-full">
                  I'm a Sales Leader
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/real-estate">
                <Button size="lg" variant="outline" className="text-base px-8 py-6 font-bold rounded-full border-2 border-primary hover:bg-primary/10">
                  I'm Buying or Selling
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by builders across Texas</p>
              <div className="flex items-center justify-center lg:justify-start gap-8 flex-wrap">
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">200+</p>
                  <p className="text-sm text-muted-foreground font-medium">Homes Sold</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">$100M+</p>
                  <p className="text-sm text-muted-foreground font-medium">In Home Sales</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground font-medium">Sales Leaders Trained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
