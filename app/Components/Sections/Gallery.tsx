"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);

  // Parallax scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Notre galerie
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Une expérience visuelle gourmande
          </h2>
        </div>

        {/* ===== VIDEOS SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {/* VIDEO 1 */}
          <motion.div
            style={{ y: y1 }}
            className="relative rounded-2xl overflow-hidden h-[350px]"
          >
            <video
              src="/gallery/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* VIDEO 2 */}
          <motion.div
            style={{ y: y2 }}
            className="relative rounded-2xl overflow-hidden h-[350px]"
          >
            <video
              src="/gallery/video2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

        </div>

        {/* ===== IMAGE GRID ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {[
            "/gallery/1.jpg",
            "/gallery/2.jpg",
            "/gallery/3.jpg",
            "/gallery/4.jpg",
            "/gallery/5.jpg",
            "/gallery/6.jpg",
            "/gallery/7.jpg",
            "/gallery/8.jpg",
          ].map((img, i) => (
            <motion.div
              key={img}
              className="relative overflow-hidden rounded-2xl group"
              style={{
                y: i % 2 === 0 ? y1 : y2,
              }}
            >
              <Image
                src={img}
                alt="gallery"
                width={600}
                height={600}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}