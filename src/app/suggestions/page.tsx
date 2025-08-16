import { SuggestionClient } from "./SuggestionClient";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function SuggestionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">AI-Powered Idea Generator</h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Stuck on naming your next big thing or finding the perfect tagline?
              Enter some keywords and let our AI assistant brainstorm for you.
            </p>
          </div>
          <SuggestionClient />
        </div>
      </main>
      <Footer />
    </div>
  );
}
