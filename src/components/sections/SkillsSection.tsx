import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Lightbulb, Briefcase, Users } from "lucide-react";

const skills = [
  {
    name: "Product Strategy",
    description: "Defining the product vision, roadmap, and goals aligned with business objectives.",
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
  },
  {
    name: "User Research",
    description: "Conducting user interviews, surveys, and usability testing to gather actionable insights.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    name: "AI-Assisted Development",
    description: "Leveraging AI tools and methodologies to accelerate development cycles and enhance product features.",
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
  },
  {
    name: "B2B & SaaS Solutions",
    description: "Worked on SaaS-based solutions for B2B businesses and mobile apps for field workers.",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Skills & Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader>
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
