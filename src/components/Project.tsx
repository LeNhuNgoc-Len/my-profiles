import React from 'react'
import data from "../data/profile.json";

export default function Project() {
  return (
    <div id='projects' className="lg:py-16 bg-[#F9F5F6]">
        <h1 className="text-[#F2BED1] mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold text-center mt-[5%]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    My Project
                </span>
            </h1>
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                {data.projects.map((project, index) => (
                    <div key={index} className="relative">
                        <div className="group">
                            <h1 className="text-[#F2BED1] mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-bold text-center flex items-center justify-center">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                    {project.name}
                                </span>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" text-lg sm:text-xl lg:text-2xl ml-6 text-[#502d68] hover:text-[#95459ce8]"
                                >Github
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 .5C5.4.5 0 5.9 0 12.4c0 5.2 3.3 9.6 7.8 11.1.6.1.8-.2.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.1-1.7-1.1-1.7-.9-.7.1-.7.1-.7 1 0 1.6 1 1.6 1 1 .1 1.6 1.4 2.8 1.9.1-.9.3-1.4.7-1.8-2.5-.3-5-1.3-5-5.9 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.2 1.2.9-.3 1.8-.5 2.8-.5s1.9.2 2.8.5c2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 3-.1 3.3.8.8 1.2 1.8 1.2 3.2 0 4.7-2.5 5.6-4.9 5.9.3.3.6.9.6 1.8v2.7c0 .4.3.7.8.6C20.7 22 24 17.6 24 12.4 24 5.9 18.6.5 12 .5z" />
                                    </svg>
                                </a>
                            </h1>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div className="overflow-hidden rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                                    <img
                                        src={`/images/${project.image}`}
                                        alt={project.name}
                                        className="object-cover w-full h-[300px] lg:h-[400px]"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}
