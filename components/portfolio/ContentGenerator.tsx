'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSectionContent } from '@/app/actions';
import { Sparkles, LoaderCircle } from 'lucide-react';
import type { PortfolioSectionGeneratorOutput } from '@/ai/flows/portfolio-section-generator';
import { useToast } from '@/hooks/use-toast';

interface ContentGeneratorProps {
  sectionType: 'About' | 'Experience' | 'Education' | 'Certifications' | 'Projects' | 'Awards' | 'Skills';
  linkedinProfileText: string;
}

export function ContentGenerator({ sectionType, linkedinProfileText }: ContentGeneratorProps) {
  const [generatedContent, setGeneratedContent] = useState<PortfolioSectionGeneratorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedContent(null);
    const result = await generateSectionContent({ sectionType, linkedinProfileText });
    
    if ('error' in result) {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: result.error,
      });
    } else {
      setGeneratedContent(result);
      toast({
        title: 'Content Generated!',
        description: `AI successfully generated content for the ${sectionType} section.`,
      })
    }
    setIsLoading(false);
  };

  return (
    <div className="my-12 py-8 border-t border-border">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-headline text-accent mb-2">Need a different perspective?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl">
          Use the power of AI to generate a professional summary for this section based on the provided profile.
        </p>
        <Button onClick={handleGenerate} disabled={isLoading} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 hover:-translate-y-1">
          {isLoading ? (
            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          {isLoading ? 'Generating...' : `Generate ${sectionType} Summary`}
        </Button>
      </div>

      {isLoading && (
          <Card className="mt-8 w-full animate-pulse bg-background/50">
            <CardHeader>
              <div className="h-6 w-1/3 rounded-md bg-muted"></div>
              <div className="h-4 w-1/2 rounded-md bg-muted mt-2"></div>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="h-4 w-full rounded-md bg-muted"></div>
                <div className="h-4 w-full rounded-md bg-muted"></div>
                <div className="h-4 w-3/4 rounded-md bg-muted"></div>
            </CardContent>
          </Card>
      )}

      {generatedContent && (
        <Card className="mt-8 w-full bg-background/50 border-primary/50 shadow-lg shadow-primary/10 animate-fade-in">
          <CardHeader>
            <CardTitle className="font-headline text-primary flex items-center gap-2">
                <Sparkles />
                AI Generated Summary
            </CardTitle>
            <CardDescription className="pt-1">{generatedContent.progress}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose prose-invert max-w-none text-foreground/90" dangerouslySetInnerHTML={{ __html: generatedContent.content.replace(/\n/g, '<br />') }} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
