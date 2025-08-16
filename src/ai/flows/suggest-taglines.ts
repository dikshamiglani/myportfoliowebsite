'use server';

/**
 * @fileOverview A tagline suggestion AI agent.
 *
 * - suggestTaglines - A function that handles the tagline suggestion process.
 * - SuggestTaglinesInput - The input type for the suggestTaglines function.
 * - SuggestTaglinesOutput - The return type for the suggestTaglines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestTaglinesInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Comma separated keywords related to user experience, product management, and user growth.'
    ),
});
export type SuggestTaglinesInput = z.infer<typeof SuggestTaglinesInputSchema>;

const SuggestTaglinesOutputSchema = z.object({
  taglines: z.array(z.string()).describe('An array of suggested taglines.'),
});
export type SuggestTaglinesOutput = z.infer<typeof SuggestTaglinesOutputSchema>;

export async function suggestTaglines(input: SuggestTaglinesInput): Promise<SuggestTaglinesOutput> {
  return suggestTaglinesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestTaglinesPrompt',
  input: {schema: SuggestTaglinesInputSchema},
  output: {schema: SuggestTaglinesOutputSchema},
  prompt: `You are a marketing expert specializing in creating catchy website taglines.

You will use the following keywords to generate a list of alternative website taglines.

Keywords: {{{keywords}}}

Generate 5 taglines.`,
});

const suggestTaglinesFlow = ai.defineFlow(
  {
    name: 'suggestTaglinesFlow',
    inputSchema: SuggestTaglinesInputSchema,
    outputSchema: SuggestTaglinesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
