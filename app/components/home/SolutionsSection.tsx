"use client";

import Link from 'next/link';
import { Store, ShoppingBag, BarChart3, Laptop, Wifi, HeadphonesIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  className?: string;
  style?: React.CSSProperties;
}

const SolutionCard = ({ icon, title, description, link, className = '', style }: SolutionCardProps) => {
  return (
    <Link 
      href={link}
      className={`block p-6 bg-white rounded-xl shadow-md/10 hover:shadow-lg/10 transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={style}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-4 text-primary-blue">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 text-primary-navy">{title}</h3>
      <p className="text-gray-600 text-base mb-4">{description}</p>
      <span className="text-primary-blue hover:text-primary-sky font-medium">Learn more →</span>
    </Link>
  );
};

const SolutionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      title: 'Point of Sale Systems',
      description: 'Modern POS systems that make checkout a breeze for staff and customers.',
      icon: <Store className="w-6 h-6" />,
      link: '/solutions/pos',
    },
    {
      title: 'Online Store Setup',
      description: 'Simple e-commerce solutions that integrate seamlessly with your POS.',
      icon: <ShoppingBag className="w-6 h-6" />,
      link: '/solutions/ecommerce',
    },
    {
      title: 'Business Analytics',
      description: 'Clear dashboards to understand your sales, inventory, and customers.',
      icon: <BarChart3 className="w-6 h-6" />,
      link: '/solutions/analytics',
    },
    {
      title: 'Device Management',
      description: 'Keep your tablets, printers, and devices running smoothly.',
      icon: <Laptop className="w-6 h-6" />,
      link: '/solutions/devices',
    },
    {
      title: 'Secure Wi-Fi',
      description: 'Guest and staff networks that are fast, secure, and reliable.',
      icon: <Wifi className="w-6 h-6" />,
      link: '/solutions/networking',
    },
    {
      title: 'Local Support',
      description: 'In-person help when you need it, from neighbors who care.',
      icon: <HeadphonesIcon className="w-6 h-6" />,
      link: '/support',
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-display font-bold text-primary-navy mb-4">
            Our Services
          </h2>
          <p className="text-xl text-primary-sky max-w-3xl mx-auto">
            Everything you need to run your business smoothly
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              link={solution.link}
              className={`animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 