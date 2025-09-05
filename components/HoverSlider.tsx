'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const images = [
  '/images/campus-life/1.jpg',
  '/images/campus-life/2.jpg',
  '/images/campus-life/3.jpg',
  '/images/campus-life/4.jpg',
];

export default function HoverSlider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex h-[400px] overflow-hidden rounded-xl">
      {images.map((src, index) => {
        // Check if current is hovered or default first image
        const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0);

        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              flex: isActive ? 3 : 1,
              scale: isActive ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="relative overflow-hidden transition-all duration-200 ease-linear"
          >
            <Image
              src={src}
              alt={`Slider image ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        );
      })}
    </div>
  );
}