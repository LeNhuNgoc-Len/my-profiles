import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import data from "../data/profile.json";

const Sections = () => {

    return (
        <div id="home" className="lg:py-16 bg-[#F9F5F6] mb-[5%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <h1 className="text-[#e090ae] mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
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
                    <p className="text-[#4B5563] text-lg sm:text-xl lg:text-2xl">
                        {data.bio}
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="rounded-full overflow-hidden w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] ">
                        <Image
                            src="/images/pngtree-cute-capricorn-zodiac-sign-illustration-vector-png-image_14085107.png"
                            alt="avatar image"
                            className="object-cover"
                            width={440}
                            height={440}
                        />
                    </div>
                </div>
            </div>

        </div>
           

    );
};

export default Sections;
