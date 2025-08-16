"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateAlternativeNames } from "@/ai/flows/suggest-names";
import { suggestTaglines } from "@/ai/flows/suggest-taglines";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function SuggestionClient() {
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const [taglines, setTaglines] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keywords.trim()) {
      toast({
        title: "Keywords required",
        description: "Please enter some keywords to generate suggestions.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    setNames([]);
    setTaglines([]);

    try {
      const [nameResults, taglineResults] = await Promise.all([
        generateAlternativeNames({ keywords }),
        suggestTaglines({ keywords }),
      ]);
      setNames(nameResults.names);
      setTaglines(taglineResults.taglines);
    } catch (error) {
      console.error("Error generating suggestions:", error);
      toast({
        title: "An error occurred",
        description: "Failed to generate suggestions. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 />
          Generate Suggestions
        </CardTitle>
        <CardDescription>
          Enter comma-separated keywords related to user experience, product management, and user growth.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="space-y-2">
            <Label htmlFor="keywords">Keywords</Label>
            <Input
              id="keywords"
              placeholder="e.g., user growth, product strategy, intuitive design"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate"
            )}
          </Button>
        </form>

        {(names.length > 0 || taglines.length > 0) && (
          <Tabs defaultValue="names">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="names">Names</TabsTrigger>
              <TabsTrigger value="taglines">Taglines</TabsTrigger>
            </TabsList>
            <TabsContent value="names" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Names</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {names.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="taglines" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Suggested Taglines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {taglines.map((tagline, index) => (
                      <li key={index}>{tagline}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
}
