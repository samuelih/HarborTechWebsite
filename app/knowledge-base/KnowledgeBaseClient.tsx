"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, FileText, ExternalLink, Download, X, Calendar, FileIcon, LinkIcon, Filter } from 'lucide-react';
import { useFuseSearch } from '../lib/hooks/useFuseSearch';
import { KnowledgeResource, knowledgeResources, categories, filterOptions } from '../../data/knowledgeBase';

interface ResourceCardProps {
  resource: KnowledgeResource;
  onPreview: (resource: KnowledgeResource) => void;
}

const ResourceCard = ({ resource, onPreview }: ResourceCardProps) => {
  const formatFileSize = (sizeMB: number) => {
    if (sizeMB < 1) return `${Math.round(sizeMB * 1000)} KB`;
    return `${sizeMB.toFixed(1)} MB`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleClick = () => {
    if (resource.type === 'manual') {
      onPreview(resource);
    } else {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="group relative bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary-blue/10 hover:border-primary-blue/30 hover:-translate-y-1 transition-all duration-500 ease-out cursor-pointer"
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6">
        {/* Icon and Type Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-xl flex items-center justify-center group-hover:from-primary-blue/20 group-hover:to-primary-blue/10 group-hover:scale-110 transition-all duration-500">
            {resource.icon ? (
              <Image
                src={resource.icon}
                alt={resource.title}
                width={24}
                height={24}
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            ) : (
              <>
                {resource.type === 'manual' ? (
                  <FileText className="w-6 h-6 text-primary-blue opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                ) : (
                  <ExternalLink className="w-6 h-6 text-primary-blue opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </>
            )}
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
            resource.type === 'manual' 
              ? 'bg-accent-gold/10 text-accent-gold' 
              : 'bg-accent-sea/10 text-accent-sea'
          }`}>
            {resource.type === 'manual' ? (
              <FileIcon className="w-3 h-3" />
            ) : (
              <LinkIcon className="w-3 h-3" />
            )}
            {resource.type === 'manual' ? 'PDF' : 'Link'}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-primary-navy text-lg mb-2 group-hover:text-primary-blue transition-colors duration-300 line-clamp-2">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-neutral-700 transition-colors duration-300">
          {resource.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            {resource.type === 'manual' && resource.fileSizeMB && (
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3" />
                {formatFileSize(resource.fileSizeMB)}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Updated {formatDate(resource.lastUpdated)}
            </span>
          </div>
          {resource.type === 'link' && (
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface PDFPreviewModalProps {
  resource: KnowledgeResource | null;
  onClose: () => void;
}

const PDFPreviewModal = ({ resource, onClose }: PDFPreviewModalProps) => {
  if (!resource) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resource.url;
    link.download = `${resource.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h3 className="text-xl font-bold text-primary-navy">{resource.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{resource.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-lg hover:bg-primary-sky transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 p-6">
          <div className="w-full h-full bg-neutral-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FileText className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-neutral-700 mb-2">PDF Preview</h4>
              <p className="text-neutral-500 mb-4">
                Preview functionality would be implemented here with a PDF viewer library
              </p>
              <button
                onClick={handleDownload}
                className="btn-primary flex items-center gap-2 mx-auto"
              >
                <Download className="w-4 h-4" />
                Download {resource.title}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const KnowledgeBaseClient = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [previewResource, setPreviewResource] = useState<KnowledgeResource | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  // Filter by type first (All, Manuals, Links)
  const typeFilteredResources = useMemo(() => {
    if (selectedFilter === 'All') return knowledgeResources;
    if (selectedFilter === 'Manuals') return knowledgeResources.filter(r => r.type === 'manual');
    if (selectedFilter === 'Links') return knowledgeResources.filter(r => r.type === 'link');
    return knowledgeResources;
  }, [selectedFilter]);

  // Then apply search
  const { results: filteredResources, isSearching } = useFuseSearch(
    typeFilteredResources,
    searchQuery,
    {
      keys: ['title', 'description', 'category'],
      threshold: 0.4,
      minMatchCharLength: 2
    },
    200
  );

  const popularManuals = knowledgeResources.filter(r => r.type === 'manual' && r.isPopular);
  const popularLinks = knowledgeResources.filter(r => r.type === 'link' && r.isPopular);

  const showDefaultState = !searchQuery.trim() && selectedFilter === 'All';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-nautical-gradient overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="1"/%3E%3C/g%3E%3C/svg%3E")', 
            backgroundSize: '24px 24px' 
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
              <span className="relative inline-block">
                HarborTech Knowledge Base
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-gold"></span>
              </span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Search our manuals and curated links to keep your tech running smoothly.
            </p>
          </div>
        </div>
        
        {/* Nautical rope border */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 4C10 4 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 4 80 4" stroke="%23EBBC60" stroke-width="2"/%3E%3C/svg%3E")',
          backgroundSize: '80px 8px'
        }}></div>
      </section>

      {/* Search Section */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ease-out mb-12">
            <div className="space-y-6">
              {/* Enhanced Search Bar */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <Search className="w-5 h-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search manuals or helpful links..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-20 py-4 border border-neutral-200 rounded-2xl focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue focus:scale-[1.01] hover:border-neutral-300 transition-all duration-400 ease-out bg-white text-primary-navy placeholder-neutral-400 text-sm"
                  aria-label="Search knowledge base"
                />
                {(searchQuery || selectedFilter !== 'All') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedFilter('All');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-2 rounded-xl transition-all duration-300 ease-out font-medium hover:scale-105 active:scale-95"
                    aria-label="Clear search and filters"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Filter Chips */}
              <div className="flex items-center space-x-3 justify-end">
                <Filter className="w-4 h-4 text-neutral-500" />
                <div className="flex gap-2">
                  {filterOptions.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-400 ease-out hover:scale-105 hover:-translate-y-0.5 active:scale-95 ${
                        selectedFilter === filter
                          ? 'bg-gradient-to-r from-primary-blue to-primary-blue/90 text-white shadow-md hover:shadow-lg'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-800 hover:shadow-sm'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          {showDefaultState ? (
            /* Default State - Popular Carousels */
            <div className="space-y-16">
              {/* Popular Manuals */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-navy mb-8 text-center">
                  Popular Manuals
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularManuals.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      onPreview={setPreviewResource}
                    />
                  ))}
                </div>
              </div>

              {/* Popular Links */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-navy mb-8 text-center">
                  Popular Links
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularLinks.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      onPreview={setPreviewResource}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Search Results */
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primary-navy">
                  {isSearching ? 'Searching...' : `${filteredResources.length} results found`}
                </h2>
              </div>

              {filteredResources.length === 0 && !isSearching ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-neutral-400" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-700 mb-3">No resources found</h3>
                  <p className="text-neutral-500 max-w-md mx-auto">
                    Try adjusting your search terms or selecting a different filter to discover more resources.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredResources.map((resource) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      onPreview={setPreviewResource}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary-navy to-primary-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white font-display font-bold text-3xl md:text-4xl mb-4">
            Need something custom?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Let's talk about creating custom documentation or training materials for your business.
          </p>
          <Link
            href="/contact#book-a-call"
            className="btn-accent btn-large inline-flex items-center gap-2"
          >
            Let's Talk
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PDF Preview Modal */}
      <PDFPreviewModal
        resource={previewResource}
        onClose={() => setPreviewResource(null)}
      />
    </div>
  );
};

export default KnowledgeBaseClient; 