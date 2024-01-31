import { useEffect } from "react";
import gsap from "gsap";

import linkedin from "../assets/images/icon/footer-icon/linkedin.png";
import github from "../assets/images/icon/footer-icon/github.png";
import medium from "../assets/images/icon/footer-icon/medium.png";
import gmail from "../assets/images/icon/footer-icon/google.png";

import cv from "../assets/images/icon/pdf.png";

import resume from "../assets/resume/tushar_upadhyay_resume.pdf";

const Footer = () => {
  useEffect(() => {
    const textContainer = document.querySelector(".text");
    const heading = textContainer.children[0];
    const contentP = textContainer.children[1];
    const contentBtn = textContainer.children[2];

    gsap.delayedCall(1, () => {
      const tl = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#Footer-section",
            start: "top 10%",
            end: "top top",
            toggleActions: "play none resume pause",
          },
        })
        .from(heading, {
          duration: 1.2,
          x: -100,
          opacity: 0,
          ease: "power2.out",
        })
        .from(
          contentP,
          {
            duration: 1.2,
            y: 20,
            opacity: 0,
            ease: "power2.out",
          },

          0.4
        )
        .from(
          contentBtn,
          {
            duration: 1.2,
            opacity: 0,
            y: 20,
            ease: "power2.out",
          },
          0.8
        );
    });
  });

  return (
    <div className="flex flex-col justify-between w-full h-screen px-10 pt-16 sm:pt-40 pb:10 xl:px-44 lg:px-36 md:px-32 sm:px-24 vvs:px-12">
      <div className="text">
        <h1 className="text-white font-Glimer-Heavy font-extrabold vvs:text-[3.1rem] sm:text-[3rem] md:text-[3.4rem] lg:text-[4.9rem] xl:text-[6.1rem] 1/2xl:text-[6.2rem] 2xl:text-[8rem]  text-[2.9rem] leading-[3.5rem] sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[6.5rem] 2xl:leading-[7rem]  cursor-default">
          Interested ?<span className="block">Let's Get In Touch !</span>
        </h1>

        <p className="mt-8 text-base leading-6 cursor-default text-white/50 font-Glimer-Light sm:mt-10 xl:text-xl xl:max-w-2xl sm:text-lg 1/2xl:text-2xl 1/2xl:max-w-4xl 2xl:text-3xl 2xl:max-w-5xl">
          I'm active on{" "}
          <a
            href="https://www.linkedin.com/in/tusharupadhya/"
            target="_blank"
            className="text-white font-Glimer-Medium hover:underline"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
          you can stay in touch with me on And I will also post new articles
          biweekly (hopefully) on{" "}
          <a
            href="https://medium.com/@tusharupadhyay0405"
            target="_blank"
            className="text-white font-Glimer-Medium hover:underline"
            rel="noreferrer"
          >
            Medium
          </a>
        </p>

        <a href={resume} download={resume} class="inline-block ">
          <button class="text-white rounded-full lg:w-fit font-Glimer-Bold font-medium border-[1px] focus:outline-none flex items-center justify-center  border-white/50 py-3 px-6 text-lg xl:text-xl 2xl:text-2xl my-10 w-full ">
            <img
              src={cv}
              class="mr-2 h-8 w-8 hover:-translate-y-1 transition duration-200 ease-in-out"
              alt="CV Icon"
            />
            Download Resume
          </button>
        </a>
      </div>

      <div className="flex flex-col items-center justify-center w-full mb-5 gap-y-6">
        <div className="grid w-full grid-cols-4 divide-x divide-solid">
          <a
            href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/"
            target="_blank"
            className="flex flex-col items-center justify-center text-lg text-white"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              className="w-10 h-10 transition duration-200 ease-in-out cursor-pointer sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 hover:-translate-y-1"
            />
          </a>

          <a
            href="https://github.com/tushar-upadhya"
            target="_blank"
            className="flex flex-col items-center justify-center text-lg text-white"
            rel="noreferrer"
          >
            <img
              src={github}
              className="w-10 h-10 transition duration-200 ease-in-out cursor-pointer sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 hover:-translate-y-1"
            />
          </a>

          <a
            href="https://medium.com/@tusharupadhyay0405"
            target="_blank"
            className="flex flex-col items-center justify-center text-lg text-white"
            rel="noreferrer"
          >
            <img
              src={medium}
              className="w-10 h-10 transition duration-200 ease-in-out cursor-pointer sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 hover:-translate-y-1"
            />
          </a>
          <a
            href="mailto:tusharupadhyay691@gmail.com"
            target="_blank"
            className="flex flex-col items-center justify-center text-lg text-white"
            rel="noreferrer"
          >
            <img
              src={gmail}
              className="w-10 h-10 transition duration-200 ease-in-out cursor-pointer sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
