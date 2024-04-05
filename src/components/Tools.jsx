import React from "react";

const tools = [
  {
    name: "Git & GitHub",
    icon: "bx bx-badge-check",
    level: "",
  },
  {
    name: "Figma",
    icon: "bx bx-badge-check",
    level: "",
  },
  {},
];

const Tools = () => {
  return (
    <div className="bg-white border grid grid-cols-1 justify-items-center gap-y-2 px-10 py-8 rounded-xl shadow-sm">
      <h2 className="font-semibold text-zinc-700 text-lg">Tools</h2>
      <div className="grid grid-cols-2 gap-x-16 gap-y-3 max-[350px]:grid-cols-1">
        {tools.map((tool) => (
          <div className="flex items-baseline gap-1">
            <i className={tool.icon + " text-zinc-700"}></i>
            <div>
              <h3 className="font-semibold text-zinc-700">{tool.name}</h3>
              <span className="text-xs">{tool.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
