import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Portfolio Website",
    description: "This very website, built to showcase my skills and projects using a modern tech stack.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Genkit"],
  },
  {
    title: "Side Project Hub",
    description: "A platform to discover and collaborate on side projects, fostering innovation and learning.",
    tech: ["React", "Firebase", "Node.js", "Express"],
  },
  {
    title: "UX Feedback Tool",
    description: "A browser extension for collecting and analyzing user feedback directly on live websites.",
    tech: ["JavaScript", "HTML/CSS", "Webpack", "Chrome APIs"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
