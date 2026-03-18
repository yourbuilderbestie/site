import { Layout } from "@/components/layout/Layout";
import { Heart, Target, Users } from "lucide-react";
import jennaAbout from "@/assets/jenna-about.png";
const values = [{
  icon: Heart,
  title: "Your Money, Time, and Equity",
  description: "My goal is always the same: protect your money, your time, and your long term equity. If I can find a way to save you any of those, I will."
}, {
  icon: Target,
  title: "No Fluff, No Pressure",
  description: "I'm direct and to the point, but I match that with compassion. You'll get clear guidance and strong execution, not scripts or pressure tactics."
}, {
  icon: Users,
  title: "Women Building Wealth",
  description: "Women are the fastest growing home buying demographic in the US. Being part of growing that statistic is everything to me."
}];
const About = () => {
  return <Layout>
      {/* Hero */}
      <section className="pt-16 pb-6 md:pt-20 md:pb-8 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Meet Your <span className="text-gradient">Builder Bestie</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              I help people make smart, strategic real estate decisions. Not emotional. Not rushed. 
              And I genuinely want to see you win.
            </p>
          </div>
        </div>
      </section>

      {/* Story - Two Column Layout */}
      <section className="py-10 bg-background md:py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Image Column */}
              <div className="flex justify-center md:justify-end">
                <img src={jennaAbout} alt="Jenna Ahrens - The Builder Bestie" className="max-w-sm w-full h-auto rounded-lg" />
              </div>
              
              {/* Story Column */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">My Story</h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    I started my professional career serving with the United states Air Force in Public Affairs. That's where I learned marketing, content creation, and how to tell stories that actually connect. I didn't realize at the time how much that training would shape everything I do now.
                  </p>
                  <p>
                    After the military, I landed in Texas in 2021. Due to the hurdles of divorce and uprooting my life, I found myself rebuilding everything: my credit, my confidence, my life. I honestly never thought I could own a home on my own. I thought I needed a spouse or a dual income to make that happen.
                  </p>
                  <p>
                    Then I joined new home sales. I learned about all the resources builders offer: free credit repair, incentives, programs I had no idea existed. I used my VA loan and bought my first home, a D.R. Horton build, completely on my own. That experience changed everything for me.
                  </p>
                  <p>
                    In two years, I closed over 200 homes. I've done lease buyouts, Tidewater appraisals, multiple offer situations, and every curveball the builder world throws at you. Now I'm on the other side of the transaction, bringing all of that knowledge with me. I specialize in working with women and VA buyers because I know exactly how overwhelming it can feel when you're doing this alone.
                  </p>
                  <p>
                    I'm not here to be transactional. I'm here to be your best friend in the home buying (or selling) process. Someone who actually gets it, protects your money, your time, and your long term equity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">What I Believe</h2>
            <div className="space-y-8">
              {values.map(value => <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;