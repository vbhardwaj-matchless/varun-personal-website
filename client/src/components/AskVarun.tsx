/*
AskVarun AI Assistant Component
- Grounded in website content only
- Answers questions about Varun's thinking, approach, and principles
- Says "I don't know" when outside scope
*/

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AskVarunProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AskVarun({ open, onOpenChange }: AskVarunProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      // This is a placeholder implementation
      // In a real implementation, this would call an API endpoint
      // For now, we'll provide a static response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = generateResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Quality-related questions
    if (lowerQuestion.includes("quality")) {
      if (lowerQuestion.includes("system") || lowerQuestion.includes("property")) {
        return "I see quality as an emergent property of the entire system, not a specific phase of development or the responsibility of a single role. My focus is on understanding the system as a whole, including its feedback loops and second-order effects, to identify where quality is either created or degraded.";
      }
      if (lowerQuestion.includes("team") || lowerQuestion.includes("responsibility")) {
        return "Quality is a team responsibility. I believe that quality is not the job of one person or team, but a collective responsibility shared by everyone involved in building a product. I coach teams to take collective ownership of quality, rather than outsourcing it to a specific person or department.";
      }
      return "I see quality as a property of the system, not a phase or a role. I help teams move from assurance-heavy delivery to confidence-driven delivery by designing feedback loops, identifying bottlenecks, and fostering a culture of ownership.";
    }

    // Delivery-related questions
    if (lowerQuestion.includes("delivery") || lowerQuestion.includes("confidence")) {
      return "My approach to delivery prioritizes rapid learning and adaptation. I optimize for fast feedback loops that provide clear signals, rather than relying on processes that create a false sense of certainty. Delivery confidence comes from visibility and learning, not gates. I prefer confidence through evidence over confidence through process.";
    }

    // AI-related questions
    if (lowerQuestion.includes("ai") || lowerQuestion.includes("artificial intelligence")) {
      return "I believe that AI should be used to amplify human judgment, not to replace human thinking. In areas where judgment, ethics, and context are critical, I advocate for keeping humans in the loop. AI's role is to augment our capabilities, not to automate our responsibilities. I'm currently exploring AI as a thinking partner for quality and delivery, and building ideas around AI-assisted quality coaching.";
    }

    // Trade-offs and risk
    if (lowerQuestion.includes("trade-off") || lowerQuestion.includes("risk")) {
      return "I am comfortable navigating trade-offs, as they are an inherent part of any complex project. However, I am uncomfortable with hidden or unacknowledged risks. My goal is to make risks visible and explicit, so that we can make informed decisions about them.";
    }

    // Principles
    if (lowerQuestion.includes("principle") || lowerQuestion.includes("value")) {
      return "My core principles are: Quality is a team responsibility, Learning beats blaming, Clarity over compliance, Evidence over opinion, and Progress over perfection. I value psychological safety and intellectual honesty. I avoid performative process and checkbox quality, and environments where speed is valued but feedback is ignored.";
    }

    // What I do
    if (lowerQuestion.includes("what") && (lowerQuestion.includes("do") || lowerQuestion.includes("work"))) {
      return "I help teams move from assurance-heavy delivery to confidence-driven delivery. I design feedback loops that surface risk early, identify quality bottlenecks that teams normalize, translate quality concerns into language leaders understand, coach teams to own quality, use automation as an enabler, and drive alignment between product, engineering, and quality.";
    }

    // Teams and environment
    if (lowerQuestion.includes("team") || lowerQuestion.includes("environment") || lowerQuestion.includes("thrive")) {
      return "I thrive in environments characterized by psychological safety and intellectual honesty. I value teams where quality is a collective responsibility, learning beats blaming, and there's clarity over compliance. I avoid environments with performative process, checkbox quality, or where speed is valued but feedback is ignored.";
    }

    // Automation
    if (lowerQuestion.includes("automation") || lowerQuestion.includes("automate")) {
      return "I view automation as a powerful enabler of quality, not as the end goal in itself. My focus is on using automation strategically to create leverage and free up humans for higher-level thinking.";
    }

    // Feedback
    if (lowerQuestion.includes("feedback")) {
      return "I optimize for fast feedback and learning, not false certainty. I design and implement feedback mechanisms that surface risks and quality issues early in the development process, allowing for rapid course correction. I think in systems, feedback loops, and second-order effects.";
    }

    // Current focus
    if (lowerQuestion.includes("now") || lowerQuestion.includes("current") || lowerQuestion.includes("exploring")) {
      return "I'm currently exploring the potential of AI as a thinking partner for quality and delivery, developing new ideas around AI-assisted quality coaching, investigating new ways for teams to gain confidence in their work without sacrificing delivery speed, and refining my approach to communicating quality trade-offs to senior leaders.";
    }

    // Default response for out-of-scope questions
    return "I don't know. I can only answer questions based on the content of this website, which focuses on how I think about quality, systems, delivery, and my professional approach. Feel free to ask about my philosophy, principles, what I do, or my current focus areas.";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl">Ask Varun</DialogTitle>
          <DialogDescription>
            This AI assistant answers questions based solely on the content of this website. It can help you understand how I think about quality, systems, delivery, and my professional approach.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <p className="mb-4">Ask me anything about:</p>
              <ul className="text-sm space-y-2">
                <li>How I think about quality engineering</li>
                <li>What kind of teams I thrive in</li>
                <li>What problems I'm interested in solving</li>
                <li>What I actively avoid in work environments</li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-lg p-4">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          )}
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 min-h-[60px] max-h-[120px]"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
