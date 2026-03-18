import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, FileText, Handshake, Heart } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "I Started in New Home Sales",
    description: "Most agents don't know what I know. I've seen 200+ deals, handled lease buyouts, Tidewater, multiple offer situations, and every curveball builders throw.",
  },
  {
    icon: FileText,
    title: "The Pink Print to Buying New",
    description: "My free buyer guide walks you through everything. Strategic, educational, never transactional.",
  },
  {
    icon: Handshake,
    title: "Working With Builders, Not Against Them",
    description: "I know exactly how to negotiate because I know how builders work. I'm a true partnership, not an adversary.",
  },
  {
    icon: Heart,
    title: "Your Best Friend in the Process",
    description: "I help you make smart decisions, not emotional ones. Especially if you're a single woman or VA buyer, I've been exactly where you are.",
  },
];

const RealEstate = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Real Estate <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Serving Austin to San Antonio and surrounding areas. I'm your best friend 
              in the home buying or selling process. I help you make smart decisions, 
              not emotional ones. And I know the builder world inside and out.
            </p>
            <a href="https://jennaslinks.com/call" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="shadow-warm-lg">
                Start Your Home Search
              </Button>
            </a>
            <p className="text-2xl md:text-3xl font-serif font-bold mt-12 mb-6">
              Think You're Ready to List?
            </p>
            <Link to="/listing-gameplan">
              <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 font-bold rounded-full">
                Find Out Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pt-12 md:pt-16 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Why Work With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-warm transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Areas I Serve
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Austin, San Antonio, New Braunfels, San Marcos, Kyle, Buda, Georgetown, 
              Round Rock, Pflugerville, Cedar Park, and surrounding Central Texas communities.
            </p>
            <p className="text-foreground font-medium">
              Whether you're buying your first home, upgrading, or selling to move on, 
              I've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Find Your Home?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            No pressure, no scripts. Just real conversation about what you're looking for 
            and how I can help.
          </p>
          <a href="https://jennaslinks.com/call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="shadow-warm">
              Let's Talk
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default RealEstate;
