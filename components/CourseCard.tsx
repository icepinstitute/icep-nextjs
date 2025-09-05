'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
  features: string[];
  color: string;
  hoverColor: string;
  badge?: string;
  poster?: string;
  index: number;
  href?: string;
}

export default function CourseCard({
  title,
  duration,
  description,
  features,
  color,
  hoverColor,
  badge,
  poster,
  index,
  href = "#"
}: CourseCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative h-full"
    >
      {badge && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {badge}
          </span>
        </div>
      )}              <div className={`${color} ${hoverColor} text-white rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 h-full flex flex-col overflow-hidden`}>
        {/* Poster Section */}
        {poster && (
          <div className="relative h-48 w-full">
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        )}
        
        {/* Content Section */}
        <div className="p-8 flex flex-col flex-grow">
          <div className={poster ? "mb-4" : "mb-6"}>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold">{duration}</span>
            </div>            <p className="text-white/90 text-sm">
              {description}
            </p>
          </div>

          <div className="flex-grow">
            <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className={`${poster ? 'mt-4 pt-4' : 'mt-6 pt-6'} border-t border-white/20`}>
            <button className="btn w-full bg-white text-brand-blue hover:bg-gray-100">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );

  return href !== "#" ? (
    <Link href={href} className="block h-full">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
