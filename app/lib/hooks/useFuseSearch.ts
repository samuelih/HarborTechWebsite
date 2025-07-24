"use client";

import { useState, useEffect, useMemo } from 'react';

interface FuseOptions {
  keys: string[];
  threshold?: number;
  includeMatches?: boolean;
  includeScore?: boolean;
  minMatchCharLength?: number;
}

// Simple fuzzy search implementation without Fuse.js dependency
const fuzzySearch = <T>(items: T[], query: string, options: FuseOptions): T[] => {
  if (!query.trim()) return items;
  
  const searchTerm = query.toLowerCase();
  
  return items.filter(item => {
    return options.keys.some(key => {
      const value = getNestedValue(item, key);
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchTerm);
      }
      return false;
    });
  });
};

const getNestedValue = (obj: any, path: string): any => {
  return path.split('.').reduce((current, key) => current?.[key], obj);
};

// Custom debounce hook
const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Main hook
export const useFuseSearch = <T>(
  items: T[],
  searchQuery: string,
  options: FuseOptions,
  debounceMs: number = 300
): {
  results: T[];
  isSearching: boolean;
} => {
  const debouncedQuery = useDebounce(searchQuery, debounceMs);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchQuery !== debouncedQuery) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery, debouncedQuery]);

  const results = useMemo(() => {
    return fuzzySearch(items, debouncedQuery, options);
  }, [items, debouncedQuery, options]);

  return {
    results,
    isSearching
  };
};

export default useFuseSearch; 