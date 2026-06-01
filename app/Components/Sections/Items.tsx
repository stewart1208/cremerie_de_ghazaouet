"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Category =
  | "All"
  | "Ice Cream"
  | "Coffee"
  | "Desserts"
  | "Food";

const categories: Category[] = [
  "All",
  "Ice Cream",
  "Coffee",
  "Desserts",
  "Food",
];

const items = [
  {
    title: "Strawberry Ice Cream",
    category: "Ice Cream",
    price: "3.50€",
    image: "/menu/ice1.jpg",
  },
  {
    title: "Chocolate Gelato",
    category: "Ice Cream",
    price: "4.00€",
    image: "/menu/ice2.jpg",
  },
  {
    title: "Cappuccino Art",
    category: "Coffee",
    price: "2.50€",
    image: "/menu/coffee1.jpg",
  },
  {
    title: "Latte Macchiato",
    category: "Coffee",
    price: "3.00€",
    image: "/menu/coffee2.jpg",
  },
  {
    title: "Press",
    category: "Coffee",
    price: "3.00€",
    image: "/menu/coffee3.jpg",
  },
  {
    title: "maxwell",
    category: "Coffee",
    price: "3.00€",
    image: "/menu/coffee4.jpg",
  },
  {
    title: "Cheesecake Deluxe",
    category: "Desserts",
    price: "5.50€",
    image: "/menu/desert1.jpg",
  },
  {
    title: "Chocolate Cake",
    category: "Desserts",
    price: "4.80€",
    image: "/menu/desert2.jpg",
  },
  {
    title: "Gourmet Burger",
    category: "Food",
    price: "11.00€",
    image: "/menu/food1.jpg",
  },
  {
    title: "Spadon",
    category: "Food",
    price: "11.00€",
    image: "/menu/food2.jpg",
  },
];

export default function Menu() {
  const [selected, setSelected] =
    useState<Category>("All");

  const filteredItems = useMemo(() => {
    if (selected === "All") return items;
    return items.filter(
      (item) => item.category === selected
    );
  }, [selected]);

  return (
    <section
      id="menu"
      className="py-24 bg-[#f9f7f3]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Notre menu
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Saveurs gourmandes
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                selected === cat
                  ? "bg-yellow-500 text-black"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* HORIZONTAL SCROLL */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth">

          {filteredItems.map((item) => (
            <div
              key={item.title}
              className="min-w-[280px] snap-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition shrink-0"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>

                <span className="font-bold text-yellow-500">
                  {item.price}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}