import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Users, TrendingUp, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Turn Content into Conversations",
    description: "A lot of salespeople post great content but have no idea how to turn that into appointments. I teach you how.",
  },
  {
    icon: Users,
    title: "Intrapreneurship, Not Entrepreneurship",
    description: "Build your personal brand inside your company, not against it. Co-brand while staying compliant.",
  },
  {
    icon: Award,
    title: "Become Referable, Not Just Recognizable",
    description: "Your network is your net worth. I teach you how to create demand because of who you are and how you show up.",
  },
  {
    icon: MessageCircle,
    title: "Real Systems, Not Scripts",
    description: "I'm not teaching theory. I'm teaching systems I've actually used to close 200+ deals in two years.",
  },
];

const Consulting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Bestie <span className="text-gradient">Bootcamp</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              For sales professionals, teams, and leaders who want to build a personal brand 
              within their company, not outside of it. Stop spinning on the content hamster wheel 
              and start seeing real results.
            </p>
            <a href="https://www.jennaslinks.com/call/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="shadow-warm-lg">
                Book a Discovery Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            What You'll Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-warm transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-serif italic text-foreground mb-6">
              "Jenna's approach to intrapreneurship completely changed how I show up at work. 
              I went from posting content that got likes to content that got appointments."
            </blockquote>
            <p className="text-muted-foreground">— Sales Leader, Austin TX</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to Stop Spinning?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's have a real conversation about where you are, where you want to be, 
            and whether Bestie Bootcamp is the right fit.
          </p>
          <a href="https://www.jennaslinks.com/call/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="shadow-warm">
              Schedule Your Call
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Consulting;
