"use client";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none ">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="mb-6 h1">
              Hello I&#39;m <br />{" "}
              <span className="text-accent">Tushar Upadhyay</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              As a frontend developer, my expertise lies in creating seamless
              and intuitive user experiences. I specialize in using cutting-edge
              technologies to produce high-quality web applications.
              Specifically, I have vast knowledge of JavaScript, ReactJS and
              NextJs , which allow me to build complex and dynamic applications
              with ease.
            </p>
            {/* button and socials */}

            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase rounded-full outline outline-accent"
              >
                <span>Download CV</span>
                <Download className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
