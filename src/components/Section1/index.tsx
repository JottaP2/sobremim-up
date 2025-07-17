import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";

function Section1() {
  return (
    <div>
      <main className="pt-20 px-4 sm:px-6 md:px-8 lg:flex justify-center lg:p-20">
        <div className="flex flex-col sm:gap-5 md:gap-12 lg:flex lg:flex-row items-center justify-around gap-5 max-w-full">
          <div className="flex flex-col text-center sm:text-left">
            <h5 className="text-sm sm:text-base md:text-lg">My name is</h5>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-[#3EB46C] font-bold">
              João Paulo
            </h1>
            <p className="w-full sm:w-96 md:w-120 lg:w-150 text-base sm:text-lg md:text-xl font-light text-[#425D4D] mt-4">
              Estudante de Sistemas de Informação, design gráfico e focado no
              desenvolvimento web utilizando Next Js, Tailwind e typescript.
            </p>
            <div className="flex gap-5 mt-5">
              <a href="https://www.instagram.com/joao.marinhop/">
                <Instagram className="w-6 h-6 text-[#3EB46C]" />
              </a>
              <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-marinho-santos-999b29314/">
                <Linkedin className="w-6 h-6 text-[#3EB46C]" />
              </a>
              <a href="https://github.com/JottaP2">
                <Github className="w-6 h-6 text-[#3EB46C]" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 border-2 sm:border-3 md:border-3 border-[#3EB46C] rounded-xl sm:rounded-2xl mt-8 sm:mt-6 md:mt-4 lg:mt-0">
            <Image
              src="/img/perfiljotta.jpg"
              alt="foto_JoãoPaulo"
              width={1920}
              height={1080}
              className="rounded-lg w-64 sm:w-80 md:w-96 lg:w-120 h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Section1;
