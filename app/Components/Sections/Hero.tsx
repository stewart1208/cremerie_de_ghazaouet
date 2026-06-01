"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt="Crèmerie Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-6 max-w-3xl">

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="tracking-[0.3em] uppercase text-sm text-yellow-400"
          >
            Crèmerie • Restaurant • Café • Pâtisserie
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 text-4xl md:text-6xl font-bold leading-tight"
          >
            Le goût authentique du fait maison
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-gray-200 text-lg"
          >
            Découvrez nos glaces artisanales, pâtisseries fraîches,
            cafés premium et plats gourmands dans une ambiance chaleureuse.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#menu"
              className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition"
            >
              Voir le Menu
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Nous Contacter
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce">
        ↓
      </div>
    </section>
  );
}