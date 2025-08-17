import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Resume</h2>
        <Card className="max-w-4xl mx-auto shadow-lg overflow-hidden">
          <CardContent className="text-center p-8">
            <div className="mb-8 border rounded-lg p-2 sm:p-4 shadow-inner bg-background/50 relative group">
                <Link href="/diksharesume.pdf" target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                    src="https://placehold.co/800x1100.png"
                    alt="Resume Preview"
                    width={800}
                    height={1100}
                    className="w-full h-auto object-contain rounded-md transition-opacity duration-300 group-hover:opacity-75"
                    data-ai-hint="document resume"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                        <p className="text-white text-lg font-semibold">View Full Resume</p>
                    </div>
                </Link>
            </div>
             <p className="text-sm text-muted-foreground mb-6">Click the preview to open my full resume in a new tab.</p>
            <Link href="/diksharesume.pdf" target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg">
                    Download Resume <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
