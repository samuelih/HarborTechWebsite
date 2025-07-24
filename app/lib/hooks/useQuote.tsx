"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { Solution } from '../../../data/solutions';

interface QuoteItem {
  solution: Solution;
  addedAt: Date;
}

interface QuoteContextType {
  items: QuoteItem[];
  addToQuote: (solution: Solution) => void;
  removeFromQuote: (solutionId: string) => void;
  clearQuote: () => void;
  isInQuote: (solutionId: string) => boolean;
  totalCost: number;
  totalTimeSaved: number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

interface QuoteProviderProps {
  children: ReactNode;
}

export function QuoteProvider({ children }: QuoteProviderProps) {
  const [items, setItems] = useState<QuoteItem[]>([]);

  const addToQuote = (solution: Solution) => {
    setItems(prev => {
      // Check if already in quote
      if (prev.some(item => item.solution.id === solution.id)) {
        return prev;
      }
      return [...prev, { solution, addedAt: new Date() }];
    });
  };

  const removeFromQuote = (solutionId: string) => {
    setItems(prev => prev.filter(item => item.solution.id !== solutionId));
  };

  const clearQuote = () => {
    setItems([]);
  };

  const isInQuote = (solutionId: string) => {
    return items.some(item => item.solution.id === solutionId);
  };

  const totalCost = items.reduce((sum, item) => sum + item.solution.price, 0);
  const totalTimeSaved = items.reduce((sum, item) => sum + item.solution.timeSavedPerMonth, 0);

  return (
    <QuoteContext.Provider value={{
      items,
      addToQuote,
      removeFromQuote,
      clearQuote,
      isInQuote,
      totalCost,
      totalTimeSaved
    }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
} 