import React, { useState } from 'react';
import Image from "next/image";
import data from "../data/profile.json";

export default function AboutMe() {
    const [activeTab, setActiveTab] = useState('aboutMe');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div id="about" className="my-6 lg:my-12">
            <div className="flex justify-center mt-4">
                <button onClick={() => handleTabChange('aboutMe')} className={` transition duration-300 ease-in-out bg-[#F9F5F6] hover:bg-[#FDCEDF] text-[#4B5563] font-bold py-8 px-10 rounded-full border border-pink-400 focus:outline-none focus:ring focus:ring-purple-400 mr-4 ${activeTab === 'aboutMe' ? 'bg-pink-300' : ''}`}>
                    About me
                </button>
                <button onClick={() => handleTabChange('education')} className={`transition duration-300 ease-in-out bg-[#F9F5F6] hover:bg-[#FDCEDF] text-[#4B5563] font-bold py-8 px-10 rounded-full border border-pink-400 focus:outline-none focus:ring focus:ring-purple-400 mr-4 ${activeTab === 'education' ? 'bg-pink-300' : ''}`}>
                    Education
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {activeTab === 'aboutMe' ? (
                    <Image
                        src="/images/Ảnh màn hình 2023-07-15 lúc 08.39.25.png"
                        alt="about me image"
                        className="object-cover"
                        width={440}
                        height={440}
                    />
                ) : (
                    <Image
                        src="/images/pngtree-bachelors-uniform-graduation-photo-png-image_6718746.jpg"
                        alt="education image"
                        className="object-cover"
                        width={440}
                        height={440}
                    />
                )}
                <p className="text-[#4B5563] text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
                    {activeTab === 'aboutMe' ? data.content : <div dangerouslySetInnerHTML={{ __html: data.education }} />}
                </p>


            </div>
        </div>
    );
}
