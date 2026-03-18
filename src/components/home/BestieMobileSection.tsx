import { Heart, Sparkles, Star } from "lucide-react";
import bestieMobile from "@/assets/bestie-mobile.gif";

export function BestieMobileSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-pink-light/30 py-8 md:py-12">
      {/* Floating Hearts & Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-[10%] left-[5%] w-5 h-5 text-primary/60 fill-primary/30 animate-float" style={{ animationDelay: "0s" }} />
        <Sparkles className="absolute top-[15%] right-[8%] w-4 h-4 text-accent/70 animate-sparkle" style={{ animationDelay: "0.3s" }} />
        <Heart className="absolute bottom-[20%] left-[8%] w-6 h-6 text-primary/70 fill-primary/40 animate-heart-drift rotate-12" style={{ animationDelay: "0.6s" }} />
        <Star className="absolute top-[25%] right-[5%] w-5 h-5 text-accent/80 fill-accent/50 animate-sparkle" style={{ animationDelay: "0.9s" }} />
        <Heart className="absolute bottom-[15%] right-[10%] w-5 h-5 text-primary/60 fill-primary/30 animate-float-slow -rotate-6" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Heart className="w-4 h-4 text-primary fill-primary/50" />
              <span className="text-sm font-medium text-primary">On The Move</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Catch Us Cruising!
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Me and my adorable puppy are always out and about in the <span className="text-primary font-semibold">Bestie Mobile</span>, cruising around Austin. If you spot us, give us a wave! (Bonus points if you honk.)
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
              <Sparkles className="w-5 h-5 text-accent animate-sparkle" />
              <span className="text-muted-foreground italic">Honk if you love real estate!</span>
              <Sparkles className="w-5 h-5 text-accent animate-sparkle" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          {/* Right side - GIF */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl" />
              <img 
                src={bestieMobile} 
                alt="Jenna and her puppy in the Bestie Mobile cruising around Austin" 
                className="relative rounded-2xl shadow-elegant max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
