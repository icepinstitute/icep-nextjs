'use client';

import HoverSlider from '../HoverSlider';
import { motion } from 'framer-motion';

export default function CampusLifeSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold heading-font text-brand-blue mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className='text-brand-red'>Environment</span> at ICEP
        </motion.h2>
        <motion.p
          className="text-brand-blue-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          A glimpse into our vibrant campus life, facilities, and student-centered environment.
        </motion.p>
      </div>

      <HoverSlider />
    </section>
  );
}