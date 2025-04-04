"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";

export default function Category({ category, projects }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2">
        {category}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="cursor-pointer bg-white/5 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
              <p className="text-sm text-gray-300">{project.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
