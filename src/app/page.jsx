import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "./ui/Social";
import Photo from "./ui/Photo";
import Stats from "./ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 my-4">
              Hello, My Name's <br />{" "}
              <span className="text-blue-500"> Lucas Anselmo </span>
            </h1>
            <h3 className="h3">I'm a</h3>
            <h2 className="h3 text-blue-500">
              {" "}
              Full-Stack Developer and UI Designer,{" "}
            </h2>

            <p className="max-w-[500px] mb-9 text-white/90">
              combining creativity with technical expertise to create functional
              and visually engaging web experiences. My skill set spans both
              front-end and back-end development, with a strong focus on
              delivering user-friendly interfaces and seamless functionality. I
              work with modern frameworks like Next.js, React, and Tailwind CSS
              to craft responsive, dynamic web applications.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/LucasAnselmoCurriculumVitae.pdf"
                download="LucasAnselmoCurriculumVitae.pdf"
                aria-label="Download CV"
              >
                <Button variant="primary">
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
