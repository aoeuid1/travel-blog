'use server';

/**
 * @fileOverview AI tool that reviews travel blog entries to suggest related points of interest near places mentioned.
 *
 * - suggestNearbyPoi - A function that suggests nearby points of interest based on the blog post content.
 * - SuggestNearbyPoiInput - The input type for the suggestNearbyPoi function.
 * - SuggestNearbyPoiOutput - The return type for the suggestNearbyPoi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestNearbyPoiInputSchema = z.object({
  blogPostContent: z
    .string()
    .describe('The content of the travel blog post to analyze.'),
});
export type SuggestNearbyPoiInput = z.infer<typeof SuggestNearbyPoiInputSchema>;

const SuggestNearbyPoiOutputSchema = z.object({
  nearbyPois: z
    .array(z.string())
    .describe(
      'A list of suggested points of interest near locations mentioned in the blog post.'
    ),
});
export type SuggestNearbyPoiOutput = z.infer<typeof SuggestNearbyPoiOutputSchema>;

export async function suggestNearbyPoi(
  input: SuggestNearbyPoiInput
): Promise<SuggestNearbyPoiOutput> {
  return suggestNearbyPoiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestNearbyPoiPrompt',
  input: {schema: SuggestNearbyPoiInputSchema},
  output: {schema: SuggestNearbyPoiOutputSchema},
  prompt: `You are a travel expert. Read the following travel blog post and suggest a list of points of interest near the locations mentioned in the post. Return a list of points of interest.

Blog Post Content:
{{{blogPostContent}}}`,
});

const suggestNearbyPoiFlow = ai.defineFlow(
  {
    name: 'suggestNearbyPoiFlow',
    inputSchema: SuggestNearbyPoiInputSchema,
    outputSchema: SuggestNearbyPoiOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
