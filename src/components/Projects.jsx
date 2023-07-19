import { useEffect } from "react";

import ecom from "../assets/images/projects/e-com.png";
import pet from "../assets/images/projects/pet.png";
import mi from "../assets/images/projects/mi.png";
import youtube from "../assets/images/projects/youtube.png";
import video from "../assets/images/projects/videcall.png";
import admin from "../assets/images/projects/admin.png";

import live from "../assets/images/icon/live.svg";
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
            className="w-full pb-10 xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10"
            id="projects"
        >
            <h1 className="text-white/70 font-Glimer-Outlined font-semibold z-40 lg:mb-32 mb-20 vvs:text-[4rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[7.5rem] xl:text-[9.2rem] 2xl:text-[10.8rem]  text-[3.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]">
                Featured Projects
            </h1>
            <div className="sm:space-y-40 space-y-32 xl:space-y-[35vh] z-30">
                {/* ADMIN */}

                <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={admin}
                            alt="project image"
                            className="absolute w-full h-full object-contain img"
                        />
                    </div>

                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
                        <h1 className="hidden-text cursor-default font-Glimer-Bold font-bold lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                                <div className="content-line-inner">
                                    Admin DashBoard
                                </div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
                            An admin panel is focused on managing and updating a
                            website or application, while a dashboard is focused
                            on presenting data and insights.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/tushar-upadhya/admin"
                                >
                                    <img
                                        src={github}
                                        className="lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
                                    />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://admin-tusharupadhyay.vercel.app/"
                                >
                                    <img
                                        src={live}
                                        alt="live image"
                                        className="link lg:h-12 lg:w-12 2xl:h-6 2xl:w-6 vvs:h-5 vvs:w-5 sm:w-6 sm:h-6 h-4 w-4 hover:-translate-y-1 transition duration-200 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VIDEO CALL */}

                {/* <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                                <div className="content-line-inner">
                                    CHATVID
                                </div>
                            </div>
                        </h1>

                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm">
                            CHATVID for real-time audio and video communication.
                        </p>

                        <div className="btn-row flex justify-start space-x-6 items-center">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/tushar-upadhya/e-com-full"
                                >
                                    <img
                                        src={github}
                                        className="lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
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
                                        className="link lg:h-12 lg:w-12  2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:h-[500px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={video}
                            alt="project image"
                            className="absolute w-full object-cover h-full img"
                        />
                    </div>
                </div> */}

                {/* BUMMER */}

                <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={ecom}
                            alt="project image"
                            className="absolute w-full h-full object-contain img"
                        />
                    </div>

                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
                        <h1 className="hidden-text cursor-default font-Glimer-Bold font-bold lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                                <div className="content-line-inner">Bummer</div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
                            E-commerce website, Payment gateway and
                            user-friendly shopping experience.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/tushar-upadhya/e-com-full"
                                >
                                    <img
                                        src={github}
                                        className="lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
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
                                        className="link lg:h-12 lg:w-12 2xl:h-6 2xl:w-6 vvs:h-5 vvs:w-5 sm:w-6 sm:h-6 h-4 w-4 hover:-translate-y-1 transition duration-200 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Pet Grooming */}

                <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden">
                                <div className="content-line-inner">
                                    Pet Grooming
                                </div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm">
                            I was able to create a visually appealing design
                            that simplifies the booking process.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center">
                            <div className="github-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://github.com/tushar-upadhya/pet-grooming"
                                >
                                    <img
                                        src={github}
                                        className="lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200 ease-in-out"
                                    />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://pet-grooming-tushar.netlify.app/"
                                >
                                    <img
                                        src={live}
                                        alt="live image"
                                        className="link lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200 ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={pet}
                            alt="project image"
                            className="absolute w-full h-full object-contain img"
                        />
                    </div>
                </div>

                {/* MI Store CLONE */}

                <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={mi}
                            alt="project image"
                            className="absolute w-full object-cover h-full img"
                        />
                    </div>

                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
                        <h1 className="hidden-text cursor-default font-Glimer-Bold font-bold lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                                <div className="content-line-inner">
                                    MI Store{" "}
                                    <span className="font-Glimer-Outlined font-semibold">
                                        CLONE
                                    </span>
                                </div>
                            </div>
                        </h1>
                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
                            I am excited to continue exploring the potential of
                            this powerful JavaScript library & ReactJs.
                        </p>
                        <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/tushar-upadhya/mi-store"
                                >
                                    <img
                                        src={github}
                                        className="lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
                                    />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://mi-store-tusharupadhyay.netlify.app/"
                                >
                                    <img
                                        src={live}
                                        alt="live image"
                                        className="link lg:h-12 lg:w-12  2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* youtube CLONE */}

                <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start invisible">
                    <div className="text-container text-white lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
                        <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
                            <div className="content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden ">
                                <div className="content-line-inner">
                                    Youtube{" "}
                                    <span className="font-Glimer-Outlined font-semibold">
                                        CLONE
                                    </span>
                                </div>
                            </div>
                        </h1>

                        <p className="font-normal cursor-default font-Glimer-Light text-white/90 xl:text-2xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm">
                            YouTube clone using Tailwind CSS, and ReactJS,
                            replicating the core functionalities of the original
                            application.
                        </p>

                        <div className="btn-row flex justify-start space-x-6 items-center">
                            <div className="github-btn">
                                <a
                                    className="icon "
                                    target="_blank"
                                    href="https://github.com/tushar-upadhya/youtube_clone-main"
                                >
                                    <img
                                        src={github}
                                        className="lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
                                    />
                                </a>
                            </div>
                            <div className="liveDemo-btn">
                                <a
                                    className="icon"
                                    target="_blank"
                                    href="https://youtube-clone-tusharupadhyay.netlify.app/"
                                >
                                    <img
                                        src={live}
                                        alt="live image"
                                        className="link lg:h-12 lg:w-12 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper">
                        <img
                            src={youtube}
                            alt="youtube image"
                            className="absolute w-full object-cover h-full img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
