import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-center text-primary">About Me</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground/80 space-y-4 leading-relaxed">
            <p>
              I am a passionate and results-driven Product Manager with a proven track record of leading cross-functional teams to create, launch, and grow innovative products. My expertise lies in translating complex user needs and business requirements into intuitive and engaging digital experiences.
            </p>
            <p>
              With a background in both development and design, I bring a holistic perspective to product development, ensuring that we not only build things right, but also build the right things. I am a firm believer in data-informed decision-making and continuous iteration to achieve product-market fit and drive sustainable growth.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
