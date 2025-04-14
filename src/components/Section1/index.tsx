import Image from "next/image";
import Cards from "../Cards";

function Section1() {
    return (
        <>
            <main className="bg-zinc-950 w-full min-h-screen flex flex-col items-center text-white text-center px-4 py-8 md:p-16 lg:p-30 overflow-hidden">
                <Image
                    src="/img/Jotta.PNG"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    className="rounded-full mb-5 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] object-cover"
                />
                <h1 className="text-3xl md:text-4xl font-medium">Olá, sou o jotta!</h1>
                <h2 className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl font-light mt-4 text-sm sm:text-base md:text-lg">
                    tenho 20 anos e sou estudante de Sistemas de Informação pela UFAL. Sou apaixonado por tecnologia e,
                    atualmente, estou focado em aprofundar meus conhecimentos em programação front-end, pesquisa
                    acadêmica e desenvolvimento de projetos ligados à minha formação.
                </h2>

                <div className="w-full mt-5 md:mt-5 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="w-90 justify-center">
                            <Cards
                                title="Tech Stack"
                                technologies={[
                                    { name: "Next.js", image: "/img/nextjs.svg" },
                                    { name: "React", image: "/img/react.png"},
                                    { name: "JavaScript", image: "/img/js.png" },
                                    { name: "HTML", image: "/img/html.png" },
                                    { name: "CSS", image: "/img/css.png" },
                                    { name: "Vite", image: "/img/vitejs.svg" },
                                    { name: "TaiwindCSS", image: "/img/Tallwind.png" },
                                    { name: "Git", image: "/img/git.svg" }
                                ]}
                            />
                        </div>
                        <div className="w-full md:w-90">
                            <Cards
                                title="Tools"
                                technologies={[
                                    { name: "VScode", image: "/img/vs.png" },
                                    { name: "Photoshop", image: "/img/photoshop.png" },
                                    { name: "Figma", image: "/img/figma.png" },
                                    { name: "CorelDRAW", image: "/img/coreldraw.svg" },
                                    { name: "Illustrator", image: "/img/Illustrator.png" }
                                ]} 
                            />
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-zinc-950 flex items-center justify-center text-white text-center p-2">
                <h1 className="">jotta © 2025 - Todos os direitos reservados.</h1>
            </footer>
        </>
    );
}

export default Section1;