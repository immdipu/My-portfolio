import React from "react";
// import Cinemaa from "../assets/Cinemaa.jpg";
const Project = ({ image, title, about, github, live, tools, features }) => {
  return (
    <div className=" bg-white h-fit  shadow-md rounded-md border group border-zinc-300 ">
      <img
        src={image}
        alt="cinemaa"
        className="w-full rounded-t-md h-52 object-cover"
      />
      <div className="w-full px-7 py-4 mt-2 gap-4 flex flex-col pb-6">
        <h2 className="text-zinc-800 font-bold text-2xl max-sm:text-lg">
          {title}
        </h2>
        <p className="text-zinc-600 text-sm">{about}</p>

        <div className="h-auto max-h-0 overflow-hidden  group-hover:max-h-screen duration-300 transition-all">
          <h3 className="text-neutral-900 font-medium">Features:</h3>
          {
            <ul className="list-disc list-inside text-zinc-500  font-light text-sm">
              {features &&
                features.map((feature, index) => {
                  return (
                    <li key={index} className="font-light text-sm my-1">
                      {feature}
                    </li>
                  );
                })}
            </ul>
          }
        </div>

        <div className="flex justify-between max-xm:flex-col max-xm:gap-2">
          {github ? (
            <a href={github} target="_blank" rel="noreferrer ">
              <button className="px-4 py-2  bg-zinc-700 hover:bg-zinc-800 text-zinc-100 rounded-lg tracking-wide">
                GitHub
              </button>
            </a>
          ) : (
            <button
              disabled
              className="px-4 py-2  opacity-30 bg-zinc-700  text-zinc-100 rounded-lg tracking-wide"
            >
              GitHub (Private)
            </button>
          )}
          <a href={live} target="_blank" rel="noreferrer">
            <button className="px-5 py-2 bg-zinc-700 hover:bg-zinc-800 text-zinc-100 rounded-lg tracking-wide">
              Live
            </button>
          </a>
        </div>
        <div className="flex gap-3 mt-2 flex-wrap">
          {tools.map((item, index) => {
            return (
              <span
                key={index}
                className="bg-[#e8e8e8]  text-xs rounded-md px-3 pt-[2px] pb-[1px]"
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
