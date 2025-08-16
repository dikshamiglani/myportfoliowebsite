import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const caseStudies = [
  {
    title: "Reimagining the Onboarding Experience",
    description: "A deep dive into redesigning the user onboarding flow to increase activation rates.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "user interface",
  },
  {
    title: "Optimizing Conversion Funnels",
    description: "How data analysis and A/B testing led to a significant uplift in conversion metrics.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "analytics chart",
  },
  {
    title: "AI-Powered Feature Prioritization",
    description: "Developing a machine learning model to predict feature impact and improve roadmap planning.",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "artificial intelligence",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={study.aiHint}
                />
                 <Badge variant="secondary" className="absolute top-2 right-2 bg-primary text-primary-foreground">In Development</Badge>
              </div>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{study.description}</CardDescription>
                <p className="text-accent-foreground/60 mt-4 font-bold">Coming Soon</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
