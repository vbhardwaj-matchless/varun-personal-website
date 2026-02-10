/*
Design Philosophy: Neo-Constructivism
- Dynamic diagonal compositions with visual tension
- Warm color palette: cream (#fef9f3), navy (#0f172a), burnt orange (#ea580c), teal (#0d9488)
- Bold geometric shapes as background accents
- Typography: Archivo Black for headings, Work Sans for body
*/

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import AskVarun from "@/components/AskVarun";

export default function Home() {
  const [isAskVarunOpen, setIsAskVarunOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-display">
            Varun
          </a>
          <div className="flex items-center gap-6">
            <a href="#thinking" className="text-sm hover:text-primary transition-colors">
              How I Think
            </a>
            <a href="#capability" className="text-sm hover:text-primary transition-colors">
              What I Do
            </a>
            <a href="#principles" className="text-sm hover:text-primary transition-colors">
              Principles
            </a>
            <a href="#now" className="text-sm hover:text-primary transition-colors">
              Now
            </a>
            <Button
              onClick={() => setIsAskVarunOpen(true)}
              variant="default"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Ask Varun
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 relative overflow-hidden">
        {/* Geometric accent - circle */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 -z-10" />
        
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 leading-tight">
              Varun
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80">
              Senior Quality / Quality Engineering professional with a background in building and coaching quality practices in complex teams. Interested in systems thinking, AI, and human judgment in software delivery.
            </p>
          </div>
        </div>
      </section>

      {/* How I Think Section - Diagonal, right-aligned */}
      <section id="thinking" className="py-24 bg-secondary text-secondary-foreground diagonal-top relative">
        {/* Geometric accent - triangle */}
        <div 
          className="absolute bottom-10 left-10 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[173px] border-b-background/20 -z-10"
          style={{ transform: 'rotate(30deg)' }}
        />
        
        <div className="container">
          <div className="max-w-4xl ml-auto">
            <h2 className="text-5xl md:text-6xl mb-12">How I Think</h2>
            
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl mb-4">Quality as a System Property</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  I see quality as an emergent property of the entire system, not a specific phase of development or the responsibility of a single role. My focus is on understanding the system as a whole, including its feedback loops and second-order effects, to identify where quality is either created or degraded.
                </p>
              </div>

              <div>
                <h3 className="text-3xl mb-4">Approach to Delivery</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  My approach to delivery prioritizes rapid learning and adaptation. I optimize for fast feedback loops that provide clear signals, rather than relying on processes that create a false sense of certainty. I believe that confidence in delivery should be earned through tangible evidence and system visibility, not by gating progress through rigid checkpoints.
                </p>
              </div>

              <div>
                <h3 className="text-3xl mb-4">Trade-offs and Risk</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  I am comfortable navigating trade-offs, as they are an inherent part of any complex project. However, I am uncomfortable with hidden or unacknowledged risks. My goal is to make risks visible and explicit, so that we can make informed decisions about them.
                </p>
              </div>

              <div>
                <h3 className="text-3xl mb-4">AI and Human Judgment</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  I believe that AI should be used to amplify human judgment, not to replace human thinking. In areas where judgment, ethics, and context are critical, I advocate for keeping humans in the loop. AI's role is to augment our capabilities, not to automate our responsibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section - Diagonal, left-aligned */}
      <section id="capability" className="py-24 bg-primary text-primary-foreground diagonal-top relative">
        {/* Geometric accent - circle */}
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-background/10 -z-10" />
        
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-6xl mb-12">What I Do</h2>
            
            <p className="text-lg leading-relaxed mb-10 opacity-95">
              My work focuses on shifting teams from a traditional, assurance-heavy approach to a more dynamic, confidence-driven model of delivery. I achieve this by focusing on several key areas:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background/10 p-6">
                <h3 className="text-2xl mb-3">Designing Feedback Loops</h3>
                <p className="leading-relaxed opacity-90">
                  I design and implement feedback mechanisms that surface risks and quality issues early in the development process, allowing for rapid course correction.
                </p>
              </div>

              <div className="bg-background/10 p-6">
                <h3 className="text-2xl mb-3">Identifying System Bottlenecks</h3>
                <p className="leading-relaxed opacity-90">
                  I have a knack for identifying the often-normalized bottlenecks in a team's workflow that hinder quality and slow down delivery.
                </p>
              </div>

              <div className="bg-background/10 p-6">
                <h3 className="text-2xl mb-3">Translating Quality into Business Terms</h3>
                <p className="leading-relaxed opacity-90">
                  I bridge the gap between technical quality concerns and business objectives, translating complex quality issues into language that leaders can understand and act upon.
                </p>
              </div>

              <div className="bg-background/10 p-6">
                <h3 className="text-2xl mb-3">Fostering a Culture of Ownership</h3>
                <p className="leading-relaxed opacity-90">
                  I coach teams to take collective ownership of quality, rather than outsourcing it to a specific person or department.
                </p>
              </div>

              <div className="bg-background/10 p-6">
                <h3 className="text-2xl mb-3">Using Automation as an Enabler</h3>
                <p className="leading-relaxed opacity-90">
                  I view automation as a powerful enabler of quality, not as the end goal in itself. My focus is on using automation strategically to create leverage.
                </p>
              </div>

              <div className="bg-background/10 p-6">
                <h3 className="text-2xl mb-3">Driving Cross-Functional Alignment</h3>
                <p className="leading-relaxed opacity-90">
                  I work to create strong alignment between product, engineering, and quality, ensuring that everyone is working together towards the same definition of a high-quality product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section - Diagonal, right-aligned */}
      <section id="principles" className="py-24 bg-card text-card-foreground diagonal-top relative">
        {/* Geometric accent - rotated square */}
        <div 
          className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 -z-10"
          style={{ transform: 'rotate(45deg)' }}
        />
        
        <div className="container">
          <div className="max-w-4xl ml-auto">
            <h2 className="text-5xl md:text-6xl mb-12">Principles & Values</h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl mb-6">Core Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      <strong>Quality is a team responsibility:</strong> I believe that quality is not the job of one person or team, but a collective responsibility shared by everyone involved in building a product.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      <strong>Learning beats blaming:</strong> When things go wrong, my focus is on understanding the root cause and learning from it, not on assigning blame.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      <strong>Clarity over compliance:</strong> I prioritize clear communication and a shared understanding of goals over blind adherence to process.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      <strong>Evidence over opinion:</strong> I advocate for making decisions based on data and evidence, rather than on personal opinions or assumptions.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      <strong>Progress over perfection:</strong> I believe in iterative progress and continuous improvement, rather than striving for an unattainable standard of perfection.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl mb-6">What I Avoid</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-destructive mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      Performative process and checkbox quality
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-destructive mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      Environments where speed is valued but feedback is ignored
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl mb-6">What I Value</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      <strong>Psychological safety:</strong> I believe that psychological safety is essential for teams to do their best work. People need to feel safe to speak up, ask questions, and make mistakes without fear of retribution.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-secondary mt-2 flex-shrink-0" />
                    <p className="text-lg leading-relaxed">
                      <strong>Intellectual honesty:</strong> I value intellectual honesty and a willingness to confront uncomfortable truths. I believe that this is the only way to make real progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Section - Diagonal, left-aligned */}
      <section id="now" className="py-24 bg-muted text-foreground diagonal-top relative">
        {/* Geometric accent - circle */}
        <div className="absolute top-10 left-10 w-56 h-56 rounded-full bg-primary/10 -z-10" />
        
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl mb-12">Now</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <p className="text-lg leading-relaxed">
                  Exploring the potential of AI as a thinking partner for quality and delivery.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <p className="text-lg leading-relaxed">
                  Developing new ideas around AI-assisted quality coaching.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <p className="text-lg leading-relaxed">
                  Investigating new ways for teams to gain confidence in their work without sacrificing delivery speed.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0 rounded-full" />
                <p className="text-lg leading-relaxed">
                  Refining my approach to communicating quality trade-offs to senior leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Varun. This site articulates how I think about quality, systems, and delivery.
          </p>
        </div>
      </footer>

      {/* Ask Varun Dialog */}
      <AskVarun open={isAskVarunOpen} onOpenChange={setIsAskVarunOpen} />
    </div>
  );
}
