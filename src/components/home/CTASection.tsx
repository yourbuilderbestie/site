import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import jennaCta from "@/assets/jenna-cta.png";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-pink-gradient text-foreground relative overflow-hidden">
      {/* Background blur orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-background/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-background/15 rounded-full blur-3xl" />
      </div>

      {/* Floating hearts and sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left area */}
        <Heart 
          size={28} 
          className="absolute top-[10%] left-[8%] text-white/70 fill-white/50 animate-float-slow rotate-[-15deg]" 
        />
        <Heart 
          size={18} 
          className="absolute top-[18%] left-[15%] text-white/60 fill-white/40 animate-heart-drift rotate-12" 
          style={{ animationDelay: "0.5s" }}
        />
        <Sparkles 
          size={20} 
          className="absolute top-[8%] left-[20%] text-white/80 animate-sparkle" 
          style={{ animationDelay: "1s" }}
        />

        {/* Top right area */}
        <Heart 
          size={32} 
          className="absolute top-[12%] right-[10%] text-white/80 fill-white/60 animate-float rotate-[20deg]" 
        />
        <Heart 
          size={16} 
          className="absolute top-[22%] right-[18%] text-white/50 fill-white/30 animate-float-reverse rotate-[-8deg]" 
          style={{ animationDelay: "0.8s" }}
        />
        <Sparkles 
          size={24} 
          className="absolute top-[6%] right-[25%] text-white/70 animate-sparkle" 
          style={{ animationDelay: "0.3s" }}
        />

        {/* Left side mid */}
        <Heart 
          size={36} 
          className="absolute top-[45%] left-[5%] text-white/60 fill-white/40 animate-heart-drift rotate-[-25deg]" 
          style={{ animationDelay: "1.2s" }}
        />
        <Sparkles 
          size={18} 
          className="absolute top-[55%] left-[12%] text-white/70 animate-sparkle" 
          style={{ animationDelay: "0.7s" }}
        />

        {/* Right side mid */}
        <Heart 
          size={24} 
          className="absolute top-[40%] right-[6%] text-white/70 fill-white/50 animate-float-slow rotate-[30deg]" 
          style={{ animationDelay: "0.4s" }}
        />
        <Heart 
          size={20} 
          className="absolute top-[60%] right-[15%] text-white/50 fill-white/30 animate-float-reverse rotate-[-12deg]" 
          style={{ animationDelay: "1.5s" }}
        />
        <Sparkles 
          size={22} 
          className="absolute top-[50%] right-[3%] text-white/60 animate-sparkle" 
          style={{ animationDelay: "2s" }}
        />

        {/* Bottom area */}
        <Heart 
          size={22} 
          className="absolute bottom-[15%] left-[10%] text-white/60 fill-white/40 animate-float rotate-[18deg]" 
          style={{ animationDelay: "0.6s" }}
        />
        <Heart 
          size={26} 
          className="absolute bottom-[20%] right-[8%] text-white/70 fill-white/50 animate-heart-drift rotate-[-22deg]" 
          style={{ animationDelay: "1.8s" }}
        />
        <Sparkles 
          size={16} 
          className="absolute bottom-[10%] left-[25%] text-white/50 animate-sparkle" 
          style={{ animationDelay: "1.3s" }}
        />
        <Sparkles 
          size={20} 
          className="absolute bottom-[8%] right-[30%] text-white/60 animate-sparkle" 
          style={{ animationDelay: "0.9s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main hearts cluster above heading */}
          <div className="inline-flex items-center gap-3 mb-6">
            <Heart size={20} className="text-white/70 fill-white/50 animate-float-reverse rotate-[-20deg]" />
            <Heart size={32} className="text-white fill-white animate-float" />
            <Sparkles size={24} className="text-white/80 animate-sparkle" />
            <Heart size={20} className="text-white/70 fill-white/50 animate-float-slow rotate-[20deg]" style={{ animationDelay: "0.5s" }} />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
            Ready to Find Your Bestie?
          </h2>

          {/* Jenna image with hand pointing */}
          <div className="flex justify-center mb-8">
            <img 
              src={jennaCta} 
              alt="Jenna Ahrens" 
              className="w-64 md:w-80 lg:w-96 object-contain"
            />
          </div>

          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're ready to stop spinning on the content hamster wheel or you want someone who actually understands the builder world in your corner, let's talk. No pressure, no scripts. Just real conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.jennaslinks.com/call/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90 group shadow-pink-lg font-bold rounded-full px-8 py-6"
              >
                Let's Chat
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 font-bold rounded-full px-8 py-6"
              >
                Learn More About Jenna
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
