import React from 'react'
import data from "../data/profile.json";


export default function Skills() {
    const skills = data.skills;
    
  return (
    <div className="my-6 lg:my-12">
    <h1 className="text-[#F2BED1] mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold text-center mt-[15%] ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-950">
            Programming Languages
        </span>
    </h1>
    <div className="space-y-4 lg:space-y-6">
        {skills.map((skill, index) => (
            <div key={index} className="w-full">
                <div className="flex justify-between mb-1">
                    <span className="text-lg font-medium text-[#ADB7BE]">{skill.name}</span>
                    <span className="text-lg font-medium text-[#ADB7BE]">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className={`bg-gradient-to-r from-blue-300 to-blue-900 h-4 rounded-full transition-width duration-500 ease-in-out`} style={{ width: `${skill.level}%` }}></div>
                </div>
            </div>
        ))}
    </div>
</div>
  )
}
