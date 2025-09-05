'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import 'swiper/css';
import Link from 'next/link';

const slides: string[] = [
  '/images/hero-section/1.jpg',
  '/images/hero-section/2.jpg',
  '/images/hero-section/3.jpg',
];

export default function HeroSectionSwiper() {
  const controls = useAnimation();

  useEffect(() => {
    // Start animation AFTER component mounts
    controls.start({ scale: 1 });
  }, [controls]);

  return (
    <section className="relative w-full h-[400px] md:h-[90vh] overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop
        className="absolute inset-0 w-full h-full -z-10"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            {/* Prevent slide bleed from showing next image */}
            <div className="relative w-full h-[90vh] overflow-hidden">
              <motion.div
                className="relative w-full h-full"
                initial={{ scale: 1.1 }}
                animate={controls}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/45 md:bg-black/60" />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlayed Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-normal max-w-3xl heading-font"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* text-[#ff0000] for css */}
          Kick Start your <span className="bg-brand-yellow mx-0.5 text-black px-4 rounded text-nowrap"><span>CSS</span> <span className="">2027</span></span> Journey with Us
        </motion.h1>

        <motion.p
          className="mt-4 text-xl max-w-xl text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Unlock tailored guidance and hands-on practice—start today!
        </motion.p>

        <motion.div
          className="mt-6 self-stretch flex flex-col items-center min-[380px]:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/#courses-section"
            className="bg-red-700 text-nowrap w-full max-w-[270px] min-[380px]:w-auto hover:bg-red-700/90 text-white btn"
          >
            Explore Courses
          </Link>
          <Link
            href="/contact"
            className="border text-nowrap w-full max-w-[270px] min-[380px]:w-auto text-brand-blue bg-brand-white hover:bg-white hover:text-black btn"
          >
            📞 Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}