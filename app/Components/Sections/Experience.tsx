"use client";

import { motion } from "framer-motion";
import { Sparkles, Leaf, Utensils, Clock } from "lucide-react";

const experiences = [
  {
    title: "Qualité Premium",
    description:
      "Des ingrédients sélectionnés avec soin pour garantir un goût exceptionnel.",
    icon: Sparkles,
  },
  {
    title: "Produits Frais",
    description:
      "Préparations quotidiennes avec des produits frais et naturels.",
    icon: Leaf,
  },
  {
    title: "Cuisine Artisanale",
    description:
      "Des recettes faites maison avec passion et savoir-faire.",
    icon: Utensils,
  },
  {
    title: "Service Rapide",
    description:
      "Une expérience fluide, agréable et sans attente inutile.",
    icon: Clock,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Notre expérience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Pourquoi nous choisir ?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition bg-[#faf8f4]"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-500 text-black p-4 rounded-full">
                    <Icon size={28} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}