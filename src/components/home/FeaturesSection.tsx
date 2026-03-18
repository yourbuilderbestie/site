import { Users, Home, Sparkles, Target, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const bootcampFeatures = [
  {
    icon: Target,
    title: "Turn Content into Conversations",
    description: "A lot of salespeople post great content but have no idea how to turn that into appointments. I teach you how.",
  },
  {
    icon: TrendingUp,
    title: "Intrapreneurship, Not Entrepreneurship",
    description: "Build your personal brand inside your company, not against it. Co-brand while staying compliant.",
  },
  {
    icon: Users,
    title: "Become Referable, Not Just Recognizable",
    description: "Your network is your net worth. I teach you how to create demand because of who you are and how you show up.",
  },
];

const realEstateFeatures = [
  {
    icon: Home,
    title: "I Started in New Home Sales",
    description: "Most agents don't know what I know. I've handled lease buyouts, Tidewater, multiple offer situations, and every curveball builders throw.",
  },
  {
    icon: Sparkles,
    title: "The Pink Print to Buying New",
    description: "My free buyer guide walks you through everything. Strategic, educational, never transactional.",
  },
  {
    icon: Heart,
    title: "Working With Builders, Not Against Them",
    description: "I know exactly how to negotiate because I know how builders work. I'm a true partnership, not an adversary.",
  },
];

export function FeaturesSection() {
  return (
    <section className="pt-20 md:pt-28 pb-8 md:pb-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Two Ways to Work with{" "}
            <span className="text-gradient">Your Bestie</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're a sales leader who needs real systems (not scripts) or you're navigating one of the biggest purchases of your life, I've been exactly where you are.
          </p>
        </div>

        {/* Two Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Bestie Bootcamp Card */}
          <Card className="group border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden bg-gradient-to-br from-pink-light to-background h-full">
            <CardContent className="p-8 md:p-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold mb-6 w-fit shadow-pink-lg">
                <Sparkles size={16} className="text-white" />
                Consulting & Coaching
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Bestie Bootcamp</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed min-h-[72px]">
                For sales professionals, teams, and leaders who want to build a personal brand within their company, not outside of it. I teach intrapreneurship: how to co-brand yourself while staying compliant.
              </p>

              <div className="grid grid-rows-3 gap-4 mb-8 flex-grow">
                {bootcampFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4 min-h-[72px]">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://jennaslinks.com/call" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                <Button className="w-full shadow-pink font-bold rounded-full py-6">
                  Book a Strategy Call
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Real Estate Services Card */}
          <Card className="group border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden bg-gradient-to-br from-background to-pink-light h-full">
            <CardContent className="p-8 md:p-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold mb-6 w-fit shadow-pink-lg">
                <Home size={16} className="text-white" />
                Real Estate Services
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Buying & Selling Homes</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed min-h-[72px]">
                I'm your best friend in the home buying or selling process. I help you make smart decisions, not emotional ones. And I know the builder world inside and out.
              </p>

              <div className="grid grid-rows-3 gap-4 mb-8 flex-grow">
                {realEstateFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4 min-h-[72px]">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://jennaslinks.com/call" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                <Button variant="outline" className="w-full font-bold rounded-full py-6 border-2 border-primary hover:bg-primary/10">
                  Schedule a Consultation
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
