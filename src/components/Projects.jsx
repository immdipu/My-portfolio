import React from "react";
import Project from "./Project";

const Projects = ({ data }) => {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 justify-items-center gap-y-14 my-20 mb-32"
    >
      <h2 className="text-3xl text-zinc-800 font-bold">Projects</h2>
      <div className="grid grid-cols-[repeat(3,minmax(350px,1fr))] px-0 max-sm:grid-cols-[repeat(auto-fit,minmax(95%,0fr))]  max-lg:grid-cols-[repeat(auto-fit,minmax(250px,0fr))] w-full  max-md:px-4 gap-12 max-sm:gap-y-7 justify-center">
        {data.map((item, index) => {
          return (
            <Project
              key={index}
              image={item.image}
              title={item.title}
              about={item.about}
              github={item.github}
              live={item.live}
              tools={item.tools}
              features={item.features}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
