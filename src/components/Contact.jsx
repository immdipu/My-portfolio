import React from "react";
import { Hinge } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section id="contact" className="grid justify-items-center">
      <h2 className="text-zinc-800 text-3xl font-bold">Get in touch</h2>
      <span className="text-sm mt-2">Contact Me</span>
      <div className="grid grid-cols-1 justify-items-center gap-x-20 pb-16 mt-11 max-md:px-0 max-md:grid-cols-1 px-12">
        <div className="grid grid-cols-1 gap-y-4 max-md:px-5">
          <h3 className="text-zinc-700 font-semibold text-lg text-center">
            Talk to me
          </h3>
          <div className="grid grid-cols-1 gap-y-5">
            <div className="grid grid-cols-1 bg-white w-fit justify-items-center px-7 py-6 rounded-xl shadow-md ">
              <Hinge duration={5000} delay={3000}>
                <i className="bx bx-mail-send text-zinc-700 text-3xl"></i>
              </Hinge>
              <h3 className="text-zinc-700 font-semibold">Email</h3>
              <span className="text-center break-all">
                dipu.chaurasiya91@gmail.com
              </span>
              <a
                href="mailto:dipuchaurasiya91@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex hover:text-zinc-600 transition-all duration-200"
              >
                Write me
                <i className="bx bx-right-arrow-alt group-hover:translate-x-1 transition-all duration-200 ease-linear self-center"></i>
              </a>
            </div>
            <div className="grid grid-cols-1 bg-white w-full justify-items-center px-7 py-6 rounded-xl shadow-md">
              <Hinge duration={5000} delay={5000}>
                <i className="bx bxl-messenger text-zinc-700 text-3xl"></i>
              </Hinge>
              <h3 className="text-zinc-700 font-semibold">Messenger</h3>
              <span className="text-center break-all">
                @dipu.chaurasiya.3152
              </span>
              <a
                href="https://www.facebook.com/dipu.chaurasiya.3152/"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex hover:text-zinc-600 transition-all duration-200"
              >
                Write me
                <i className="bx bx-right-arrow-alt group-hover:translate-x-1 transition-all duration-200 ease-linear self-center"></i>
              </a>
            </div>
            <div className="grid grid-cols-1 bg-white w-full justify-items-center px-7 py-6 rounded-xl shadow-md">
              <Hinge duration={6000} delay={4000}>
                <i className="bx bxl-instagram text-zinc-700 text-3xl"></i>
              </Hinge>
              <h3 className="text-zinc-700 font-semibold">Instagram</h3>
              <span className="text-center break-all">@immdipu</span>
              <a
                href="https://www.instagram.com/immdipu/"
                target="_blank"
                rel="noreferrer"
                className="group mt-4 flex hover:text-zinc-600 transition-all duration-200"
              >
                Write me
                <i className="bx bx-right-arrow-alt group-hover:translate-x-1 transition-all duration-200 ease-linear self-center"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
