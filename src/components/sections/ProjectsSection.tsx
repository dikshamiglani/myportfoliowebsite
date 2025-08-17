import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Tasks App",
    description: "An app to add tasks, view your daily schedule, and get reminders. Created in less than 2 hours with an AI tool.",
    tech: ["AI-Assisted", "Replit", "Vercel", "Github"],
    link: "https://tasksapp-flame.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "This very website, built to showcase my skills and projects using a modern tech stack.",
    tech: ["AI-Assisted", "Firebase Studio", "Claude", "Github"],
    link: "#",
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
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                 <Link href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="outline" className="w-full">
                    View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
