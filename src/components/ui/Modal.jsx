import { useEffect, useState } from "react";
import Image from "next/image";

export default function Modal({ project, onClose }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in mx-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-900 max-w-[90%] lg:max-w-2xl w-full rounded-xl overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 hover:opacity-70 z-10 text-4xl"
        >
          <img
            src="/images/icons/cross-circle.svg"
            alt="Close modal"
            className="w-6 h-6"
          />
        </button>

        {project.video && (
          <div className="w-full relative aspect-video">
            {!videoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50">
                <img
                  src="images/icons/loading-circle.svg"
                  alt="Loading video"
                  className="animate-spin w-12 h-12"
                />
              </div>
            )}
            <video
              src={project.video}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              onCanPlayThrough={() => setVideoLoaded(true)}
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
