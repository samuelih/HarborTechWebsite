"use client";

import Link from 'next/link';
import Image from 'next/image';
import BlogCard from '../cards/BlogCard';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import Button from '../common/Button';

const BlogSection = () => {
  const posts = [
    {
      title: '5 Inventory Nightmares Solved by One POS Switch',
      description: 'Real Harbor Springs anecdotes, photos of dusty clipboards vs live dashboards.',
      date: 'June 12, 2023',
      imageUrl: '/images/placeholders/blog-placeholder.svg',
      slug: 'pos-features-summer-retail',
      icon: '/images/user/lighthouse.svg'
    },
    {
      title: 'Flat-Fee vs Monthly IT Retainers: Which Saves You More?',
      description: 'Walk through math on typical transaction volumes.',
      date: 'May 28, 2023',
      imageUrl: '/images/placeholders/blog-placeholder.svg',
      slug: 'cloud-security-basics',
      icon: '/images/user/knot.svg'
    },
    {
      title: 'Beginner\'s Guide to Cloud Backups for Retail Docs',
      description: 'Simple 3-step checklist plus free PDF download.',
      date: 'May 15, 2023',
      imageUrl: '/images/placeholders/blog-placeholder.svg',
      slug: 'seasonal-staff-training',
      icon: '/images/user/wheel.svg'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative nautical elements */}
      <div className="absolute top-20 left-5 w-32 h-32 opacity-5" aria-hidden="true">
        <Image 
          src="/images/user/sailboat.svg" 
          alt="Decorative sailboat illustration" 
          width={128}
          height={128}
          className="object-contain animate-gentle-float"
        />
      </div>
      
      <div className="absolute bottom-20 right-5 w-24 h-24 opacity-5" aria-hidden="true">
        <Image 
          src="/images/user/bird.svg" 
          alt="Decorative seabird illustration" 
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
      
      <Container className="relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <div className="mr-4 w-8 h-8 relative" aria-hidden="true">
              <Image 
                src="/images/user/wave.svg" 
                alt="Decorative wave icon" 
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <SectionHeading title="Latest Tips & Resources" />
          </div>
          <Link href="/resources/blog" className="text-primary-700 hover:text-primary-500 font-semibold group flex items-center">
            <span>View all articles</span>
            <div className="ml-2 w-6 h-6 relative group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <Image 
                src="/images/user/bird.svg" 
                alt="Decorative arrow bird icon" 
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              imageUrl={post.imageUrl}
              slug={post.slug}
              icon={post.icon}
            />
          ))}
        </div>

        <div className="mt-10 bg-primary-100 rounded-lg p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 opacity-20" aria-hidden="true">
            <Image 
              src="/images/user/anchor.svg" 
              alt="Decorative anchor background" 
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <p className="font-semibold mb-3">Join 212 Harbor retailers reading 'The Weekly Tide.'</p>
          <Button href="/resources/subscribe" className="inline-flex items-center">
            <span>Subscribe to our newsletter</span>
            <div className="ml-2 w-5 h-5 relative" aria-hidden="true">
              <Image 
                src="/images/user/wave.svg" 
                alt="Decorative wave accent" 
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection; 