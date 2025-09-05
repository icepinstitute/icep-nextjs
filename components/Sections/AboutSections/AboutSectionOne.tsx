// components/AboutSectionOne.tsx
'use client';

import { phoneNumber } from '@/Constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSectionOne() {
  return (
    <section className="relative bg-brand-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        {/* h-72 to h-auto */}
        <motion.div
          className="hidden md:block flex-1 relative w-full h-auto md:h-[450px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about/about-icep.jpg"
            alt="ICEP CSS Institute"
            fill
            className="rounded-2xl object-cover shadow-xl"
            priority
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex-1"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl heading-font font-extrabold text-brand-blue mb-4">
            ICEP CSS & PMS Institute
          </h2>
          <p className="text-brand-blue-300 text-base leading-relaxed mb-4">
            An epitome of excellence in civil services preparation, ICEP stands out with its commitment, dedication, and unwavering focus on student success.
          </p>
          <ul className="list-disc pl-6 text-brand-blue-400 space-y-2 mb-6">
            <li>Led by CSS-qualified experts</li>
            <li>Interactive classes with real exam simulations</li>
            <li>Tailored mentorship for every aspirant</li>
          </ul>
          <Link
          
            href={`tel:${phoneNumber.withCountryCode}`}
            className="btn bg-brand-blue/85 text-white hover:bg-brand-blue/75"
          >
            📞 Contact Us: {phoneNumber.withoutCountryCode}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}