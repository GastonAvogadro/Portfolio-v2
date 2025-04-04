"use client";

import { worksData } from "@/data/worksData";
import Category from "./Category";

export default function Works() {
  const priorityOrder = ["Next/React Site", "Shopify Redesign", "A/B Test"];
  const categories = priorityOrder.filter((type) => worksData.some((w) => w.type === type));

  return (
    <section id="works" className="bg-black text-white py-24 px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>

      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          projects={worksData.filter((w) => w.type === category)}
        />
      ))}
    </section>
  );
}
