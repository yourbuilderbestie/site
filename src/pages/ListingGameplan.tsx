import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  DoorOpen,
  Megaphone,
  Share2,
  ShoppingBag,
  Users,
  Video,
} from "lucide-react";

const sections = [
  {
    icon: DoorOpen,
    title: "Frequent Open Houses",
    items: [
      "Weekly open houses to keep fresh eyes on your property — no holidays off",
      "Scheduled during peak buyer browsing hours so we're catching people when they're actually looking",
    ],
  },
  {
    icon: Megaphone,
    title: "Paid Social Media Blitz",
    items: [
      "Professional video ads across Facebook, Instagram, and Reels",
      "Geo-targeted and interest-targeted to reach both local and relocation buyers",
      "We highlight the lifestyle — not just the house. Schools, community, upgrades, the whole picture",
    ],
  },
  {
    icon: Share2,
    title: "Organic Social Push",
    items: [
      "Posted across all personal and business profiles — mine and the brokerage's",
      "Tagged into local influencer pages, small business networks, and real estate communities",
      "Shared through my CRM to my full client database",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Marketplace & Groups",
    items: [
      "SEO-optimized listings on Facebook Marketplace",
      "Shared in high-traffic local buy/sell and housing groups",
    ],
  },
  {
    icon: Users,
    title: "Agent-to-Agent Networking",
    items: [
      "Your listing gets shared in private REALTOR® groups",
      "Early showings and private tours offered to agents with serious, qualified buyers",
    ],
  },
  {
    icon: Video,
    title: "High-Impact Visual Marketing",
    items: [
      "Professional photography — no iPhone shots here",
      "Cinematic video tour with optional aerial drone footage",
      "Instagram & Facebook Reels with music and strong calls-to-action",
    ],
  },
];

const ListingGameplan = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Home size={16} />
              <span>The Gameplan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Listing <span className="text-gradient">Gameplan</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              This isn't a template I pulled off the internet. This is how I actually sell homes — 
              a real strategy built around getting your property in front of the right people, 
              at the right time, with the right energy.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              How I Move Your Home
            </h2>
            <p className="text-muted-foreground text-lg">
              Every listing gets a full-court press. Here's what that looks like from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sections.map((section) => (
              <Card key={section.title} className="hover:shadow-warm transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              The Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I don't just stick a sign in the yard and hope for the best. 
              Every listing gets a real marketing strategy — paid ads, professional content, 
              agent networking, and consistent open houses. 
            </p>
            <p className="text-foreground font-medium text-lg">
              Your home deserves more than a prayer and a lockbox. Let's get it sold.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready to List?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's talk about your property, your timeline, and how we make this happen.
          </p>
          <a href="https://jennaslinks.com/call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="shadow-warm">
              Book Your Call
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default ListingGameplan;
