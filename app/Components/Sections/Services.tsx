"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Crèmerie Artisanale",
    description:
      "Glaces faites maison avec des ingrédients frais et naturels pour un goût authentique.",
    image: "/services/cremerie.jpg",
  },
  {
    title: "Cafétéria Premium",
    description:
      "Cafés riches en arômes, préparés par des baristas passionnés.",
    image: "/services/cafe.jpg",
  },
  {
    title: "Pâtisserie Fine",
    description:
      "Des desserts élégants et gourmands préparés chaque jour avec soin.",
    image: "/services/patisserie.jpg",
  },
  {
    title: "Restaurant Gourmand",
    description:
      "Une cuisine généreuse et moderne pour une expérience unique.",
    image: "/services/restaurant.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f9f7f3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Nos services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Une expérience complète
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}