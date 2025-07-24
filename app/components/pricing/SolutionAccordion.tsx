"use client";

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Search, ChevronDown, Filter, Clock, Check, Zap } from 'lucide-react';
import { Solution, solutions, categories } from '../../../data/solutions';
import { useFuseSearch } from '../../lib/hooks/useFuseSearch';
import { useQuote } from '../../lib/hooks/useQuote';

interface SolutionAccordionProps {
  className?: string;
}

interface SolutionItemProps {
  solution: Solution;
  isExpanded: boolean;
  onToggle: () => void;
}

const SolutionItem = ({ solution, isExpanded, onToggle }: SolutionItemProps) => {
  const { addToQuote, removeFromQuote, isInQuote } = useQuote();
  const inQuote = isInQuote(solution.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatTimeSaved = (hours: number) => {
    if (hours === 1) return '1hr';
    return `${hours}hrs`;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  const handleQuoteAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inQuote) {
      removeFromQuote(solution.id);
    } else {
      addToQuote(solution);
    }
  };

        return (
    <div className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary-blue/10 hover:border-primary-blue/30 hover:-translate-y-1 transition-all duration-500 ease-out">
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full p-6 text-left hover:bg-gradient-to-br hover:from-neutral-50 hover:to-white transition-all duration-400 ease-out focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:ring-offset-2"
        aria-expanded={isExpanded}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            {/* Enhanced Icon */}
            <div className="w-14 h-14 bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-primary-blue/20 group-hover:to-primary-blue/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
              <Image
                src={solution.icon}
                alt={solution.name}
                width={24}
                height={24}
                className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
              />
            </div>
            
            {/* Enhanced Content */}
                          <div className="flex-1 min-w-0 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-bold text-primary-navy text-lg group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-400 ease-out">
                    {solution.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                    {solution.summary}
                  </p>
                </div>
              
                              {/* Enhanced Tags Row */}
                <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                  <div className="inline-flex items-center bg-primary-blue/10 text-primary-blue text-xs font-semibold px-3 py-1.5 rounded-full group-hover:bg-primary-blue/20 group-hover:scale-105 transition-all duration-400 ease-out">
                    {solution.category}
                  </div>
                  <div className="inline-flex items-center bg-accent-sea/15 text-accent-sea text-xs font-medium px-3 py-1.5 rounded-full group-hover:bg-accent-sea/25 group-hover:scale-105 transition-all duration-400 ease-out">
                    <Zap className="w-3 h-3 mr-1.5 group-hover:rotate-12 transition-transform duration-400 ease-out" />
                    {formatTimeSaved(solution.timeSavedPerMonth)}/mo saved
                  </div>
                </div>
            </div>
          </div>

                      {/* Enhanced Price and Toggle */}
            <div className="flex items-center space-x-4 flex-shrink-0 ml-4">
              <div className="text-right group-hover:scale-105 transition-transform duration-400 ease-out">
                <div className="font-bold text-primary-navy text-xl group-hover:text-primary-blue transition-colors duration-300">
                  {formatPrice(solution.price)}
                </div>
                <div className="text-neutral-500 text-xs group-hover:text-neutral-600 transition-colors duration-300">one-time</div>
              </div>
              <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-primary-blue/10 group-hover:scale-110 transition-all duration-400 ease-out">
                <ChevronDown 
                  className={`w-4 h-4 text-neutral-500 group-hover:text-primary-blue transition-all duration-500 ease-out ${
                    isExpanded ? 'rotate-180 scale-110' : ''
                  }`}
                />
              </div>
            </div>
        </div>
      </button>

      {/* Enhanced Expanded Content */}
      <div 
        className={`transition-all duration-700 ease-out ${
          isExpanded ? 'max-h-48 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        } overflow-hidden`}
        role="region"
        aria-hidden={!isExpanded}
      >
        <div className="px-6 pb-6 bg-gradient-to-br from-neutral-50/80 to-neutral-50/40 border-t border-neutral-100">
          <div className={`pt-4 space-y-4 transition-all duration-500 delay-150 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
                         {/* Enhanced Details */}
             <div className="space-y-2">
               <h4 className="text-sm font-semibold text-primary-navy">What's Included</h4>
               <ul className="text-sm text-neutral-600 space-y-1">
                 <li className="flex items-center space-x-2">
                   <Check className="w-3 h-3 text-accent-sea" />
                   <span>Professional implementation</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <Check className="w-3 h-3 text-accent-sea" />
                   <span>Staff training included</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <Check className="w-3 h-3 text-accent-sea" />
                   <span>2-4 weeks to launch</span>
                 </li>
               </ul>
             </div>

            {/* Enhanced Action Button */}
            <div className="flex justify-end pt-2">
              <button 
                onClick={handleQuoteAction}
                className={`text-sm py-3 px-6 rounded-xl font-semibold transition-all duration-400 ease-out flex items-center space-x-2 hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${
                  inQuote 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-sm hover:shadow-lg' 
                    : 'bg-gradient-to-r from-primary-blue to-primary-blue/90 hover:from-primary-blue/90 hover:to-primary-blue text-white shadow-sm hover:shadow-lg'
                }`}
              >
                {inQuote && <Check className="w-4 h-4" />}
                <span>{inQuote ? 'Added to Quote' : 'Add to Quote'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionAccordion = ({ className = '' }: SolutionAccordionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Solutions');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Filter by category first
  const categoryFilteredSolutions = useMemo(() => {
    if (selectedCategory === 'All Solutions') return solutions;
    return solutions.filter(solution => solution.category === selectedCategory);
  }, [selectedCategory]);

  // Then apply fuzzy search
  const { results: filteredSolutions, isSearching } = useFuseSearch(
    categoryFilteredSolutions,
    searchQuery,
    {
      keys: ['name', 'summary', 'category'],
      threshold: 0.4,
      minMatchCharLength: 2
    },
    200
  );

  // Calculate totals for filtered solutions
  const { totalTimeSaved, totalValue } = useMemo(() => {
    return filteredSolutions.reduce((acc, solution) => ({
      totalTimeSaved: acc.totalTimeSaved + solution.timeSavedPerMonth,
      totalValue: acc.totalValue + solution.price
    }), { totalTimeSaved: 0, totalValue: 0 });
  }, [filteredSolutions]);

  const toggleItem = useCallback((solutionId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(solutionId)) {
        newSet.delete(solutionId);
      } else {
        newSet.add(solutionId);
      }
      return newSet;
    });
  }, []);

  const handleClearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('All Solutions');
  };

  return (
    <div className={`space-y-8 ${className}`}>
             {/* Enhanced Search and Filter Controls */}
       <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-out">
        <div className="space-y-6">
          {/* Enhanced Search Bar */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Search className="w-5 h-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search solutions by name, description, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-20 py-4 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue focus:scale-[1.01] hover:border-neutral-300 transition-all duration-400 ease-out bg-white text-primary-navy placeholder-neutral-400 text-sm"
              aria-label="Search solutions"
            />
            {(searchQuery || selectedCategory !== 'All Solutions') && (
              <button
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-2 rounded-xl transition-all duration-300 ease-out font-medium hover:scale-105 active:scale-95"
                aria-label="Clear search and filters"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Enhanced Category Filter */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Filter className="w-4 h-4 text-neutral-500" />
              <span className="text-sm font-medium text-neutral-700">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-400 ease-out hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white shadow-md hover:shadow-lg'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-800 hover:shadow-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Results Summary */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-neutral-50 to-neutral-50/50 rounded-2xl border border-neutral-100">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-lg font-bold text-primary-navy">
                  {isSearching ? '...' : filteredSolutions.length}
                </div>
                <div className="text-xs text-neutral-500">solutions</div>
              </div>
              <div className="w-px h-8 bg-neutral-200"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-accent-gold">
                  {totalTimeSaved}
                </div>
                <div className="text-xs text-neutral-500">hrs/month</div>
              </div>
              <div className="w-px h-8 bg-neutral-200"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-accent-sea">
                  ${totalValue.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-500">total value</div>
              </div>
            </div>
            
            {isSearching && (
              <div className="flex items-center space-x-2 text-neutral-500">
                <div className="w-4 h-4 border-2 border-neutral-300 border-t-primary-blue rounded-full animate-spin"></div>
                <span className="text-xs">Searching...</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Solutions Grid */}
      <div className="space-y-6">
        {filteredSolutions.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-neutral-400" />
            </div>
            <h3 className="text-xl font-bold text-neutral-700 mb-3">No solutions found</h3>
            <p className="text-neutral-500 max-w-md mx-auto">
              Try adjusting your search terms or selecting a different category to discover more solutions.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
            {filteredSolutions.map((solution) => {
              const isExpanded = expandedItems.has(solution.id);
              return (
                <div 
                  key={solution.id} 
                  className="col-span-1 transition-all duration-700 ease-out"
                >
                  <SolutionItem
                    solution={solution}
                    isExpanded={isExpanded}
                    onToggle={() => toggleItem(solution.id)}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionAccordion; 