// components/AboutSectionTwo.tsx
'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

export default function AboutSectionTwo() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue-700 to-brand-blue-800 text-white px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 heading-font"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose ICEP?
        </motion.h2>

        <motion.p
          className="text-brand-blue-100 max-w-3xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          ICEP is recognized as the best CSS institute in Lahore, offering quality mentorship, rigorous exam prep, and unmatched student satisfaction.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap className="w-8 h-8 text-brand-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">Expert Faculty</h4>
            <p className="text-brand-blue-100 leading-relaxed">
              Learn from CSS-qualified mentors with years of experience and proven track records.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="w-8 h-8 text-brand-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">Student-Centric Approach</h4>
            <p className="text-brand-blue-100 leading-relaxed">
              Focused on individual growth, comprehensive mock tests, and personalized strategy sessions.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="w-8 h-8 text-brand-blue" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-white">Prime Location</h4>
            <p className="text-brand-blue-100 leading-relaxed">
              Located in the heart of Garden Town, Lahore — easily accessible and well-connected.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}