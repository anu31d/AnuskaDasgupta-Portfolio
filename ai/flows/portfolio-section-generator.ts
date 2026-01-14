'use server';

/**
 * @fileOverview AI-powered content generation for portfolio sections.
 *
 * - portfolioSectionGenerator - A function that generates content for portfolio sections.
 * - PortfolioSectionGeneratorInput - The input type for the portfolioSectionGenerator function.
 * - PortfolioSectionGeneratorOutput - The return type for the portfolioSectionGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioSectionGeneratorInputSchema = z.object({
  sectionType: z
    .enum(['About', 'Experience', 'Education', 'Certifications', 'Projects', 'Awards', 'Skills'])
    .describe('The section type to generate content for.'),
  linkedinProfileText: z
    .string()
    .describe('The text content of the LinkedIn profile to generate content from.'),
});
export type PortfolioSectionGeneratorInput = z.infer<typeof PortfolioSectionGeneratorInputSchema>;

const PortfolioSectionGeneratorOutputSchema = z.object({
  content: z.string().describe('The generated content for the portfolio section.'),
  progress: z.string().describe('Progress summary of the content generation.'),
});
export type PortfolioSectionGeneratorOutput = z.infer<typeof PortfolioSectionGeneratorOutputSchema>;

export async function portfolioSectionGenerator(
  input: PortfolioSectionGeneratorInput
): Promise<PortfolioSectionGeneratorOutput> {
  return portfolioSectionGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioSectionGeneratorPrompt',
  input: {schema: PortfolioSectionGeneratorInputSchema},
  output: {schema: PortfolioSectionGeneratorOutputSchema},
  prompt: `You are a portfolio content generator. Generate content for the {{{sectionType}}} section of a portfolio, using the following LinkedIn profile text as the source:

{{{linkedinProfileText}}}

Your generated content should be engaging and informative.

Include a one-sentence summary of your progress in the 'progress' field.`,
});

const portfolioSectionGeneratorFlow = ai.defineFlow(
  {
    name: 'portfolioSectionGeneratorFlow',
    inputSchema: PortfolioSectionGeneratorInputSchema,
    outputSchema: PortfolioSectionGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
