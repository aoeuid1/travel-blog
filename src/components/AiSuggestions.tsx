'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAiSuggestionsAction } from '@/app/actions';
import { Sparkles, MapPin } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

type AiSuggestionsProps = {
  postContent: string;
};

export function AiSuggestions({ postContent }: AiSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTriggered, setIsTriggered] = useState(false);

  const handleGetSuggestions = async () => {
    setIsTriggered(true);
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    const result = await getAiSuggestionsAction(postContent);

    if (result.error) {
      setError(result.error);
    } else if (result.suggestions) {
      setSuggestions(result.suggestions);
    }
    setIsLoading(false);
  };
  
  const LoadingSkeleton = () => (
    <div className="space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-5/6" />
    </div>
  );

  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <div className="flex items-center gap-3">
            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                <Sparkles className="h-6 w-6" />
            </div>
            <div>
                <CardTitle className="font-headline text-2xl">AI Content Assistant</CardTitle>
                <CardDescription>Discover related points of interest near places in this post.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        {!isTriggered && (
          <div className="flex justify-center">
            <Button onClick={handleGetSuggestions} disabled={isLoading}>
              <Sparkles className="mr-2 h-4 w-4" />
              Suggest Nearby Places
            </Button>
          </div>
        )}

        {isLoading && <LoadingSkeleton />}
        
        {error && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}
        
        {!isLoading && suggestions.length > 0 && (
            <div>
                <h3 className="font-bold mb-3">Suggested Points of Interest:</h3>
                <ul className="space-y-2">
                    {suggestions.map((poi, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 mt-0.5 text-accent flex-shrink-0" />
                            <span>{poi}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        {!isLoading && isTriggered && !error && suggestions.length === 0 && (
            <p className="text-center text-muted-foreground">No specific points of interest could be identified from this post.</p>
        )}

      </CardContent>
    </Card>
  );
}
