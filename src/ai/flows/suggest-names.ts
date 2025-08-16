// src/ai/flows/suggest-names.ts
'use server';
/**
 * @fileOverview A flow to generate alternative website names based on keywords.
 *
 * - generateAlternativeNames - A function that generates alternative website names.
 * - GenerateAlternativeNamesInput - The input type for the generateAlternativeNames function.
 * - GenerateAlternativeNamesOutput - The return type for the generateAlternativeNames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAlternativeNamesInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords related to user experience, product management, and user growth.'
    ),
});
export type GenerateAlternativeNamesInput = z.infer<typeof GenerateAlternativeNamesInputSchema>;

const GenerateAlternativeNamesOutputSchema = z.object({
  names: z.array(z.string()).describe('An array of suggested website names.'),
});
export type GenerateAlternativeNamesOutput = z.infer<typeof GenerateAlternativeNamesOutputSchema>;

export async function generateAlternativeNames(
  input: GenerateAlternativeNamesInput
): Promise<GenerateAlternativeNamesOutput> {
  return generateAlternativeNamesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAlternativeNamesPrompt',
  input: {schema: GenerateAlternativeNamesInputSchema},
  output: {schema: GenerateAlternativeNamesOutputSchema},
  prompt: `You are a creative naming consultant specializing in generating website names.

  Based on the provided keywords, generate a list of alternative website names that are memorable, relevant, and suitable for a portfolio website.

  Keywords: {{{keywords}}}

  Return an array of website names.`,
});

const generateAlternativeNamesFlow = ai.defineFlow(
  {
    name: 'generateAlternativeNamesFlow',
    inputSchema: GenerateAlternativeNamesInputSchema,
    outputSchema: GenerateAlternativeNamesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
