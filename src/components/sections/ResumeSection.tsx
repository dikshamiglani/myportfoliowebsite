import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Resume</h2>
        <Card className="max-w-5xl mx-auto shadow-lg overflow-hidden">
          <CardContent className="text-center p-8">
            <div className="mb-8 border rounded-lg p-2 sm:p-4 shadow-inner bg-background/50">
              <div className="aspect-[8.5/11] w-full">
                <object
                  data="/diksharesume.pdf#toolbar=0"
                  type="application/pdf"
                  className="w-full h-full rounded-md"
                >
                  <p>Your browser does not support PDFs. <Link href="/diksharesume.pdf" className="text-primary underline">Download the PDF</Link>.</p>
                </object>
              </div>
            </div>
             <p className="text-sm text-muted-foreground mb-6">You can scroll within the resume preview above or open it in a new tab.</p>
            <Link href="/diksharesume.pdf" target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg">
                    Download Resume <Download className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
