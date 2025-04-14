"use client";

import { worksData } from "@/data/worksData";
import Category from "./Category";

export default function Works() {
  const priorityOrder = ["Next/React Site", "Shopify Redesign", "A/B Test"];
  const categories = priorityOrder.filter((type) => worksData.some((w) => w.type === type));

  return (
    <section id="my-work" className="text-white py-16 px-6 sm:px-12 max-w-screen-2xl mx-auto">
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
