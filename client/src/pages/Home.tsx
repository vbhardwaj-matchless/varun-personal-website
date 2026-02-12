import { useState } from "react";
import { Menu, X, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-semibold text-foreground">
              Varun Bhardwaj
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#why-i-care" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Why I Care
              </a>
              <a href="#how-i-think" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How I Think
              </a>
              <a href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Impact
              </a>
              <a href="#how-i-lead" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How I Lead
              </a>
              <a href="#strategic-direction" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Strategic Direction
              </a>
              <a href="#beyond-engineering" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Beyond Engineering
              </a>
              <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </a>
              <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <a href="#why-i-care" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Why I Care
                </a>
                <a href="#how-i-think" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  How I Think
                </a>
                <a href="#impact" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Impact
                </a>
                <a href="#how-i-lead" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  How I Lead
                </a>
                <a href="#strategic-direction" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Strategic Direction
                </a>
                <a href="#beyond-engineering" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Beyond Engineering
                </a>
                <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Case Studies
                </a>
                <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Building Delivery Confidence in Complex Engineering Systems
                </h1>
                <p className="text-lg md:text-xl leading-relaxed opacity-95">
                  Engineering leader operating at the intersection of execution, organizational clarity, and business risk. Focused on building environments where teams move fast without losing signal or stability.
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663305879557/UcEiAlnZavfEEqty.jpeg"
                  alt="Varun Bhardwaj"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-foreground/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why I Care */}
        <section id="why-i-care" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why I Care</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Raised with strong values around responsibility and contribution. Early personal loss shaped my perspective on long-term thinking and empathy.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Entrepreneurship experience (scaled recruitment business to 20 people) shaped commercial awareness. Returned to engineering with systems-level thinking and maturity.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Committed to sustainable high-performance cultures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How I Think */}
        <section id="how-i-think" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">How I Think</h2>
              <div className="space-y-6">
                <div className="bg-card p-6 md:p-8 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Systems over silos</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Quality and delivery are emergent properties.
                  </p>
                </div>
                <div className="bg-card p-6 md:p-8 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Evidence over ceremony</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Confidence comes from signal clarity.
                  </p>
                </div>
                <div className="bg-card p-6 md:p-8 border border-border">
                  <h3 className="text-xl font-semibold mb-3">Humans + AI</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    AI augments judgment, it does not replace it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-12">Impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3">Reduced systemic delivery risk</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Through feedback loop design.
                  </p>
                </div>
                <div className="border border-border p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3">Improved deployment confidence</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    And cross-team alignment.
                  </p>
                </div>
                <div className="border border-border p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3">Built quality cultures</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Centered on shared ownership.
                  </p>
                </div>
                <div className="border border-border p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3">Elevated engineering conversations</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Through trade-off framing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I Lead */}
        <section id="how-i-lead" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">How I Lead</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0 rounded-full" />
                  <p className="text-lg leading-relaxed">
                    I design systems, not hero dependencies.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0 rounded-full" />
                  <p className="text-lg leading-relaxed">
                    I surface trade-offs early.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0 rounded-full" />
                  <p className="text-lg leading-relaxed">
                    I create psychological safety with accountability.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0 rounded-full" />
                  <p className="text-lg leading-relaxed">
                    I prioritize sustainable performance over short-term spikes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Direction */}
        <section id="strategic-direction" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Strategic Direction</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0 rounded-full" />
                  <p className="text-lg leading-relaxed">
                    Expanding scope from quality specialization to broader engineering systems leadership.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0 rounded-full" />
                  <p className="text-lg leading-relaxed">
                    Exploring AI as leverage for decision clarity and reduced cognitive load.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0 rounded-full" />
                  <p className="text-lg leading-relaxed">
                    Focused on enterprise-scale alignment and long-term delivery confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Engineering */}
        <section id="beyond-engineering" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Beyond Engineering</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card p-5 border border-border">
                  <p className="text-base font-medium">Health optimization and longevity</p>
                </div>
                <div className="bg-card p-5 border border-border">
                  <p className="text-base font-medium">Human psychology and communication</p>
                </div>
                <div className="bg-card p-5 border border-border">
                  <p className="text-base font-medium">Systems thinking across society</p>
                </div>
                <div className="bg-card p-5 border border-border">
                  <p className="text-base font-medium">Family, balance, and contribution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-12">Case Studies</h2>
              <div className="space-y-8">
                {/* Case Study 1 */}
                <div className="border border-border p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">[Project Name]</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Problem Statement</h4>
                      <p className="text-base leading-relaxed">[Description of the challenge or problem]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Approach</h4>
                      <p className="text-base leading-relaxed">[How you approached solving it]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Measurable Outcomes</h4>
                      <p className="text-base leading-relaxed">[Specific metrics and results]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Timeline</h4>
                      <p className="text-base leading-relaxed">[Duration and key milestones]</p>
                    </div>
                  </div>
                </div>

                {/* Case Study 2 */}
                <div className="border border-border p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">[Project Name]</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Problem Statement</h4>
                      <p className="text-base leading-relaxed">[Description of the challenge or problem]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Approach</h4>
                      <p className="text-base leading-relaxed">[How you approached solving it]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Measurable Outcomes</h4>
                      <p className="text-base leading-relaxed">[Specific metrics and results]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Timeline</h4>
                      <p className="text-base leading-relaxed">[Duration and key milestones]</p>
                    </div>
                  </div>
                </div>

                {/* Case Study 3 */}
                <div className="border border-border p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">[Project Name]</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Problem Statement</h4>
                      <p className="text-base leading-relaxed">[Description of the challenge or problem]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Approach</h4>
                      <p className="text-base leading-relaxed">[How you approached solving it]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Measurable Outcomes</h4>
                      <p className="text-base leading-relaxed">[Specific metrics and results]</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Timeline</h4>
                      <p className="text-base leading-relaxed">[Duration and key milestones]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-12">Blog</h2>
              <div className="space-y-6">
                {/* Latest Article */}
                <article className="bg-card border border-border p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold">
                      <a 
                        href="https://medium.com/@70vron/ai-didnt-make-me-faster-it-made-me-think-better-here-s-why-that-matters-for-qe-leaders-61bb9e05b1a8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        AI Didn't Make Me Faster, It Made Me Think Better: Here's Why That Matters for QE Leaders
                      </a>
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Published on Medium</p>
                  <p className="text-base leading-relaxed mb-4">
                    Exploring how AI tools are changing the way quality engineering leaders think, plan, and execute rather than just speeding up existing processes.
                  </p>
                  <a 
                    href="https://medium.com/@70vron/ai-didnt-make-me-faster-it-made-me-think-better-here-s-why-that-matters-for-qe-leaders-61bb9e05b1a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Read on Medium →
                  </a>
                </article>

                {/* Placeholder for future posts */}
                <div className="text-center py-8">
                  <p className="text-muted-foreground">More articles coming soon. Follow me on <a href="https://medium.com/@70vron" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Medium</a> for updates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <p className="text-sm text-muted-foreground">
                  © 2026 Varun Bhardwaj. Engineering Systems Leader.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/vb-qe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a 
                  href="mailto:67vron@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
