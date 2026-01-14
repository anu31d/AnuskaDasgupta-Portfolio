'use server';

import { portfolioSectionGenerator, PortfolioSectionGeneratorInput, PortfolioSectionGeneratorOutput } from '@/ai/flows/portfolio-section-generator';
import { z } from 'zod';

// Define a schema for the error object to ensure type safety
const ErrorSchema = z.object({
  error: z.string(),
});
type ErrorObject = z.infer<typeof ErrorSchema>;

export async function generateSectionContent(
  input: PortfolioSectionGeneratorInput
): Promise<PortfolioSectionGeneratorOutput | ErrorObject> {
  try {
    const result = await portfolioSectionGenerator(input);
    return result;
  } catch (error) {
    console.error('Error generating content:', error);
    // You might want to log the full error for debugging
    // but return a generic message to the client.
    return { error: 'An unexpected error occurred while generating content. Please try again later.' };
  }
}
