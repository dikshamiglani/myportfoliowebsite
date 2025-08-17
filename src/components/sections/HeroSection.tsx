import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 leading-tight">
            Product Management | User Solutions | Vibe&nbsp;Coding
            <br />
            AI Applications
          </h1>
          <Image
            src="/Diksha.jpeg"
            alt="Diksha Miglani Headshot"
            width={300}
            height={300}
            className="rounded-full mx-auto mb-8 shadow-2xl border-4 border-card"
            data-ai-hint="professional headshot"
          />
          <p className="text-4xl md:text-5xl font-headline font-bold text-primary mt-8">
            Diksha Miglani
          </p>
          <p className="text-xl md:text-2xl text-foreground/80 my-8 max-w-2xl mx-auto">
            Product Manager | Building Experiences | Improving operations
          </p>
          <div className="space-x-4">
            <a href="#projects">
              <Button size="lg">View My Work</Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="secondary">Contact Me</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
