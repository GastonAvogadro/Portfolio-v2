"use client";

import { useState } from "react";
import WorkCard from "@/components/ui/WorkCard";
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
          <WorkCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
