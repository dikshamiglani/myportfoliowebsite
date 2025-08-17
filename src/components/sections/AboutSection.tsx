import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-center text-primary">About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground/80 space-y-6 leading-relaxed">
            <p>
              I am a passionate and self-driven product professional whose mind is constantly spotting problems around me and looking for their solutions. I can go in-depth to understand problems as an observer but solve them as a driver.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary/90">Career Highlights</h3>
              
              <div className="pl-4 border-l-4 border-accent">
                <h4 className="text-xl font-semibold text-foreground">AI-Powered Career Solutions at VMock</h4>
                <p className="mt-1">
                  My journey began at VMock, where I contributed to AI/ML-based career management solutions. Starting as an analyst supporting ML model delivery—from data preparation and tagging to error analysis—I evolved into a full product role managing client expectations and experiences. This foundation gave me deep insights into how AI can transform user experiences in career development.
                </p>
              </div>

              <div className="pl-4 border-l-4 border-accent">
                <h4 className="text-xl font-semibold text-foreground">Multi-Product Leadership at Wattmonk</h4>
                <p className="mt-1">
                  At Wattmonk, I drove product strategy across diverse solutions, beginning with their core ordering platform and internal operations management systems. My primary focus became their field management solution—a comprehensive survey platform that handles everything from order intake to field force management, work coordination, and post-survey activities including payments. This experience taught me to think holistically about operational workflows and user journeys.
                </p>
              </div>
            </div>

            <div className="pl-4 border-l-4 border-accent space-y-4">
              <h3 className="text-2xl font-bold text-primary/90">Technical Product Mindset</h3>
              <p>
                I approach product development with a unique perspective: thinking like a developer when imagining solutions and finding bugs like a tester. I dive deep into data to uncover insights and validate solutions with business stakeholders, ensuring every product decision is both technically sound and commercially viable.
              </p>
            </div>
            
            <div className="pl-4 border-l-4 border-accent space-y-4">
              <h3 className="text-2xl font-bold text-primary/90">AI Integration Pioneer</h3>
              <p>
                Currently, I&apos;m focused on incorporating AI into work processes and crafting intelligent solutions. I believe AI has provided product professionals with a much-needed sword that enables us to contribute meaningfully on the ground—transforming how we identify problems, design solutions, and deliver value to users.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
