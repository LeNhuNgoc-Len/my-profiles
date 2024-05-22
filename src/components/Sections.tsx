"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import data from "../data/profile.json";

const Sections = () => {
  return (
    <div className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {data.name}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "LUCASTA",
                1000,
                "Web Developer",
                1000,
                "DESIGNER",
                1000,
                "PROGRAMMER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg sm:text-xl lg:text-2xl">
            {data.bio}
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/pexels-pixabay-326055.jpg"
              alt="avatar image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
