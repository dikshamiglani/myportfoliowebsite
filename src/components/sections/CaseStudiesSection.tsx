import { FileClock } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Case Studies</h2>
        <div className="flex flex-col items-center gap-4 text-foreground/80">
          <FileClock className="h-16 w-16 text-primary/70" />
          <p className="text-xl">
            Coming soon! I&apos;m currently documenting my work and will have it ready for you shortly.
          </p>
        </div>
      </div>
    </section>
  );
}
