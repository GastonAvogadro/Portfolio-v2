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

      <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
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
