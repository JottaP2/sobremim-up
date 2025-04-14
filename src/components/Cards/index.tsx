import Image from "next/image";

// Definindo o tipo das props (TypeScript)
interface CardsProps {
  title: string;
  technologies: {
    name: string;
    image: string;
    alt?: string; // O '?' significa que é opcional
  }[];
}

function Cards({ title, technologies }: CardsProps) {
  return (
    <article className="flex flex-col items-center gap-6 mt-10 p-8 border border-white/10 rounded-xl backdrop-blur-sm bg-zinc-900/50 shadow-lg max-w-3xl w-full mx-auto">
      <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center w-full">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <Image
              src={tech.image}
              alt={tech.alt || tech.name}
              width={60}
              height={60}
              className="hover:scale-110 transition-transform"
            />
            <span className="text-xs text-zinc-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Cards;