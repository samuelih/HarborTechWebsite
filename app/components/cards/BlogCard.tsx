"use client";

import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  slug: string;
  icon?: string;
}

const BlogCard = ({ title, description, date, imageUrl, slug, icon }: BlogCardProps) => {
  return (
    <Link href={`/resources/blog/${slug}`} className="group">
      <div className="card overflow-hidden h-full flex flex-col relative">
        {/* Background decorative icon */}
        {icon && (
          <div className="absolute top-0 right-0 opacity-5 w-20 h-20">
            <Image 
              src={icon}
              alt=""
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        )}
        
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <Image 
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Small icon overlay */}
          {icon && (
            <div className="absolute bottom-2 right-2 bg-white rounded-full h-8 w-8 flex items-center justify-center shadow-sm">
              <Image 
                src={icon}
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          )}
        </div>
        
        <div className="flex flex-col flex-grow">
          <div className="text-sm text-primary-700 mb-2 flex items-center">
            {icon && (
              <div className="mr-2 w-4 h-4">
                <Image 
                  src={icon}
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
            )}
            {date}
          </div>
          <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary-700 transition-colors">{title}</h3>
          <p className="text-secondary-navy/80 mb-4">{description}</p>
          
          <div className="mt-auto flex items-center text-primary-700 font-semibold">
            Read Article
            <svg 
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard; 