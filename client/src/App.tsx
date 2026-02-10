import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useEffect } from "react";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  useEffect(() => {
    // Set meta tags for SEO and LinkedIn preview
    document.title = "Varun | Quality Engineering Leader";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Senior Quality Engineering professional focused on systems thinking, AI, and human judgment in software delivery. Exploring confidence-driven delivery and AI-assisted quality coaching.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Senior Quality Engineering professional focused on systems thinking, AI, and human judgment in software delivery. Exploring confidence-driven delivery and AI-assisted quality coaching.';
      document.head.appendChild(meta);
    }

    // Open Graph tags for LinkedIn
    const ogTags = [
      { property: 'og:title', content: 'Varun | Quality Engineering Leader' },
      { property: 'og:description', content: 'How I think about quality, systems, and delivery. A living knowledge base on confidence-driven delivery, AI in quality engineering, and building high-performing teams.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
    ];

    ogTags.forEach(tag => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (element) {
        element.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Varun | Quality Engineering Leader' },
      { name: 'twitter:description', content: 'How I think about quality, systems, and delivery. A living knowledge base on confidence-driven delivery and AI in quality engineering.' },
    ];

    twitterTags.forEach(tag => {
      let element = document.querySelector(`meta[name="${tag.name}"]`);
      if (element) {
        element.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.name = tag.name;
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
