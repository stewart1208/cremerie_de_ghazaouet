"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed B.",
    message:
      "Une ambiance magnifique et des desserts exceptionnels. Je recommande vivement.",
  },
  {
    name: "Sarah M.",
    message:
      "Le café est excellent et les pâtisseries sont toujours fraîches.",
  },
  {
    name: "Karim T.",
    message:
      "Un endroit parfait pour passer du temps en famille ou entre amis.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#faf8f4]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Témoignages
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <Quote
                className="mb-4 text-yellow-500"
                size={32}
              />

              <p className="text-gray-600 leading-relaxed mb-6">
                "{item.message}"
              </p>

              <div>
                <p className="font-semibold">
                  {item.name}
                </p>

                <div className="flex mt-2">
                  {"★★★★★"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}