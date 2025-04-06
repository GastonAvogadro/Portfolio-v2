import Image from "next/image";

export default function WorkCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/5 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative w-full aspect-[4/3] bg-black">
        <Image
          src={project.image_desktop}
          alt={`${project.title} (desktop)`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute bottom-2 left-2 w-1/3 max-w-[100px]">
          <Image
            src={project.image_mobile}
            alt={`${project.title} (mobile)`}
            width={100}
            height={200}
            className="object-contain rounded-md shadow-md"
          />
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-lg font-semibold mb-1">{project.title}</h4>
        <p className="text-sm text-gray-300">{project.shortDescription}</p>
      </div>
    </div>
  );
}
