import { useEffect } from "react";

import ecom from "../assets/images/projects/e-com.png";
import prm from "../assets/images/projects/readme.png";
import codeToImage from "../assets/images/projects/codeToImage.png";
import laptop from "../assets/images/projects/laptop.png";
import gita from "../assets/images/projects/gita.png";
import chat from "../assets/images/projects/chat.png";
import logic from "../assets/images/projects/logic.png";
import hotel from "../assets/images/projects/hotel.png";

import live from "../assets/images/icon/live2.png";
import github from "../assets/images/icon/github.png";

import gsap from "gsap";

const Projects = () => {
  useEffect(() => {
    let containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
      const imgContainer = container.querySelector(".img-container");
      const img = container.querySelector(".img");
      const textContainer = container.querySelector(".text-container");
      const contentLine = textContainer.children[0].children[0];
      const contentP = textContainer.children[1];
      const contentBtn = textContainer.children[2];

      gsap.delayedCall(1, () => {
        const tl = gsap
          .timeline
          //    {
          //     scrollTrigger: {
          //       trigger: container,
          //       start: "top 65%",
          //       end: "top top",
          //       toggleActions: "play none resume pause",
          //     },
          //   }
          ()
          .set(container, {
            duration: 0.5,
            visibility: "visible",
            ease: "power4.Out",
          })
          .to(
            imgContainer,
            {
              duration: 1.6,
              width: "0%",
              ease: "power4.out",
            },
            0.2
          )
          .from(
            img,
            {
              duration: 1.6,
              scale: 1.6,
              ease: "power4.out",
            },
            0.2
          )
          .from(
            contentLine.firstChild,
            {
              duration: 1,
              y: "54px",
              ease: "power4.inOut",
            },
            0.5
          )
          .from(
            contentP,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power4.inOut",
            },
            1
          )
          .from(
            contentBtn,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power4.inOut",
            },
            1.2
          );
      });

      const tl2 = gsap.fromTo(
        "#project-heading",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power4.inOut",
          duration: 1.4,
        }
      );
    });
  }, []);

  return (
    <div
      className="w-full px-10 pb-10 xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12"
      id="projects"
    >
      <h1 className="text-white/70 font-Glimer-Outlined font-semibold z-40 lg:mb-32 mb-20 vvs:text-[4rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] xl:text-[9.2rem] 2xl:text-[10.8rem]  text-[3.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]">
        Featured Projects
      </h1>

      <div className="sm:space-y-40 space-y-32 xl:space-y-[35vh] z-30 ">
        {/* Hotel */}

        <div className="container flex flex-col items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={hotel}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>

          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                <span>Hotel</span>
              </div>
            </h1>

            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base lg:text-right">
              Experience hospitality at its finest
            </p>

            <div className="flex items-center justify-start space-x-6 btn-row lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/tushar-upadhya/chatt"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>

              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://chat-tusharupadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-4 h-4 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-6 2xl:w-6 vvs:h-5 vvs:w-5 sm:w-6 sm:h-6 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* logic board */}

        <div className="container flex flex-col-reverse items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden">
                <span>Logic Board </span>
              </div>
            </h1>
            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base">
              Allows users to import images from their local desktop, switch to
              a dark mode for a comfortable viewing experience, and save their
              canvas as an image
            </p>
            <div className="flex items-center justify-start space-x-6 btn-row">
              <div className="github-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/tushar-upadhya/excalidraw"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>

              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://excalidraw-tusharupadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-5 h-5 transition duration-200 ease-in-out link lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={logic}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>
        </div>

        {/* Chat */}

        <div className="container flex flex-col items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={chat}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>

          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                <span>Chat 2 Chat</span>
              </div>
            </h1>

            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base lg:text-right">
              It's built with end-to-end encryption technology and designed to
              be responsive on all devices.
            </p>

            <div className="flex items-center justify-start space-x-6 btn-row lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/tushar-upadhya/chatt"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>

              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://chat-tusharupadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-4 h-4 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-6 2xl:w-6 vvs:h-5 vvs:w-5 sm:w-6 sm:h-6 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bhagavad Gita  */}
        <div className="container flex flex-col-reverse items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden">
                <span>Bhagavad Gita </span>
              </div>
            </h1>
            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base">
              Most Powerful text book with model UI
            </p>
            <div className="flex items-center justify-start space-x-6 btn-row">
              <div className="github-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/tushar-upadhya/Bhagavad-Gita"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>

              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://bhagavad-gita-tusharupadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-5 h-5 transition duration-200 ease-in-out link lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={gita}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>
        </div>

        {/* Writer Pro */}

        <div className="container flex flex-col items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={laptop}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>

          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                <span>Writer Pro</span>
              </div>
            </h1>

            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base lg:text-right">
              You can see letter count, word count, line count, and text memory
              size in Statistics section. You can also set text size according
              to your requirement and of your choice.
            </p>

            <div className="flex items-center justify-start space-x-6 btn-row lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/tushar-upadhya/writer-pro"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>

              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://writerpro-tushar-upadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-4 h-4 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-6 2xl:w-6 vvs:h-5 vvs:w-5 sm:w-6 sm:h-6 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* code-to-image */}

        <div className="container flex flex-col-reverse items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden">
                <span>Code To Image </span>
              </div>
            </h1>
            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base">
              A web app, allowing tech creators to showcase their code in a
              visually appealing format.
            </p>
            <div className="flex items-center justify-start space-x-6 btn-row">
              <div className="github-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/tushar-upadhya/code2img"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://code2img-tusharupadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-5 h-5 transition duration-200 ease-in-out link lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={codeToImage}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>
        </div>

        {/* PRM */}

        <div className="container flex flex-col items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={prm}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>

          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                <span>PRM</span>
              </div>
            </h1>
            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base lg:text-right">
              Customizable sections for users to define their preferred tech
              stacks, social links, databases, frameworks libraries, and
              programming languages.
            </p>
            <div className="flex items-center justify-start space-x-6 btn-row lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/tushar-upadhya/Profile-Read-Maker"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://prm-tusharupadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-4 h-4 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-6 2xl:w-6 vvs:h-5 vvs:w-5 sm:w-6 sm:h-6 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  BUMMER */}

        <div className="container flex flex-col-reverse items-start invisible lg:space-x-2 lg:flex-row lg:justify-between lg:items-center">
          <div className="space-y-2 text-white text-container lg:space-y-4 md:space-y-3 sm:space-y-3">
            <h1 className="mt-5 text-2xl font-bold cursor-default hidden-text font-Glimer-Bold lg:text-4xl sm:text-3xl 2xl:text-5xl lg:mt-0">
              <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden">
                <span>Bummer </span>
              </div>
            </h1>
            <p className="text-sm font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base">
              E-commerce website, Payment gateway and user-friendly shopping
              experience.
            </p>
            <div className="flex items-center justify-start space-x-6 btn-row">
              <div className="github-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://github.com/tushar-upadhya/e-com-full"
                >
                  <img
                    src={github}
                    className="w-5 h-5 transition duration-200 ease-in-out lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://bummer-tusharupadhyay.vercel.app/"
                >
                  <img
                    src={live}
                    alt="live image"
                    className="w-5 h-5 transition duration-200 ease-in-out link lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
            <img
              src={ecom}
              alt="project image"
              className="absolute object-contain w-full h-full img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
