"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] w-full"
          >
            <Image
              src="/about.jpg"
              alt="Notre histoire"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm mb-3">
              Notre histoire
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Une passion pour le goût authentique
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Depuis notre ouverture, nous mettons l’accent sur la qualité,
              la fraîcheur et le fait maison. Chaque glace, chaque pâtisserie
              et chaque plat est préparé avec soin pour offrir une expérience
              unique à nos clients.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Notre mission est simple : vous offrir un moment de plaisir,
              de partage et de douceur dans un cadre chaleureux et moderne.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">

              <div>
                <h3 className="text-2xl font-bold text-yellow-500">10+</h3>
                <p className="text-sm text-gray-500">Années</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-500">50+</h3>
                <p className="text-sm text-gray-500">Produits</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-yellow-500">100%</h3>
                <p className="text-sm text-gray-500">Fait maison</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}