"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Modal({ project, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 10); // Delay for fade-in
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
        isVisible ? "bg-black/80 backdrop-blur-md opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-neutral-900 max-w-2xl w-full rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-2 right-2 text-white hover:text-red-400 text-2xl font-bold z-10"
        >
          &times;
        </button>

        <div className="relative w-full h-64">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="p-6 space-y-3">
          <h4 className="text-2xl font-bold">{project.title}</h4>
          <p className="text-sm text-gray-400">{project.type}</p>
          <p>{project.description}</p>
          {project.metrics && (
            <p className="text-green-400 font-semibold">{project.metrics}</p>
          )}
          {project.role && <p className="text-sm text-gray-400 italic">{project.role}</p>}
          {project.stack && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-cyan-800/20 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan-400 hover:underline"
            >
              Visit live site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
