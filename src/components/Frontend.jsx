import React from "react";

const skilss = [
  {
    name: "HTML",
    icon: "bx bx-badge-check",
    level: "",
  },
  {
    name: "CSS",
    icon: "bx bx-badge-check",
    level: "",
  },
  {
    name: "JavaScript",
    icon: "bx bx-badge-check",
    level: "",
  },
  {
    name: "TypeScript",
    icon: "bx bx-badge-check",
    level: "",
  },
  {
    name: "React.js",
    icon: "bx bx-badge-check",
    level: "",
  },
  {
    name: "Next.js",
    icon: "bx bx-badge-check",
    level: "",
  },
  {
    name: "Node.js",
    icon: "bx bx-badge-check",
    level: "",
  },

  {
    name: "Tailwind CSS",
    icon: "bx bx-badge-check",
    level: "",
  },
];

const Frontend = () => {
  return (
    <div className="bg-white border grid grid-cols-1 justify-items-center gap-y-6 py-8 px-10 rounded-xl shadow-sm ">
      <h2 className="font-semibold text-zinc-700 text-lg">
        Full Stack Developer
      </h2>
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 max-[350px]:grid-cols-1">
        {skilss.map((skill) => (
          <div className="flex items-baseline gap-1">
            <i className={skill.icon + " text-zinc-700"}></i>
            <div>
              <h3 className="font-semibold text-zinc-700">{skill.name}</h3>
              {skill.level && <span className="text-xs">{skill.level}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frontend;
