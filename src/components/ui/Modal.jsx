import { useEffect } from "react";
import Image from "next/image";

export default function Modal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-900 max-w-2xl w-full rounded-xl overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-white text-xl hover:text-cyan-400"
        >
          &times;
        </button>

        {project.video && (
          <div className="w-full aspect-video relative">
            <video
              src={project.video}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        )}

        {!project.video && (
          <div className="relative w-full h-64">
            <Image
              src={project.image_desktop}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6 space-y-3 text-white">
          <h4 className="text-2xl font-bold">{project.title}</h4>
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
          <p>{project.description}</p>

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
