import React from 'react'

export default function Footers() {
    return (
        <div id="contact" className="relative w-full bg-gradient-to-r bg-[#FDCEDF] py-16 text-[#4B5563]">
            <div className="w-full flex flex-wrap justify-between items-center space-y-8 md:space-y-0 px-4 md:px-8">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:justify-end">
                    <h2 className="text-4xl font-bold mb-6 mr-12">Contact Me</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                            <span className="text-lg text-[#4B5563]">example@example.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-lg text-[#4B5563]">123-456-7890</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-lg text-[#4B5563]">63 Street, Ho Chi Minh City</span>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center space-x-6">
                    <a href="https://www.facebook.com/profile.php?id=100088863845747" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transform hover:scale-110 transition-transform duration-300 p-2 border border-white rounded-full">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-4xl text-[#4B5563] hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                        </svg>
                    </a>

                    <a href="https://www.instagram.com/n_ngoc1501/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform hover:scale-110 transition-transform duration-300 p-2 border border-white rounded-full">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-4xl text-[#4B5563] hover:text-pink-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 141c-50.6 0-91 40.4-91 91s40.4 91 91 91 91-40.4 91-91-40.4-91-91-91zm0 148c-30.9 0-57.4-17.2-71.2-42.4 13.8-25.1 40.3-42.4 71.2-42.4s57.4 17.2 71.2 42.4c-13.8 25.2-40.3 42.4-71.2 42.4zm128-148c-12.6 0-23 10.4-23 23s10.4 23 23 23 23-10.4 23-23-10.4-23-23-23zm64 42.4c-13.8-25.1-40.3-42.4-71.2-42.4s-57.4 17.2-71.2 42.4c13.8 25.1 40.3 42.4 71.2 42.4s57.4-17.2 71.2-42.4zm0 148c-10.7 24.7-32.1 42.3-58 46-.6-13.6-1.9-29.5-4.5-46h-43.5c-2.6 16.5-3.9 32.4-4.5 46-25.9-3.7-47.3-21.3-58-46h-41c-7.6 0-13.9 6.2-13.9 13.8v96.4c0 7.6 6.2 13.8 13.9 13.8h288.1c7.6 0 13.9-6.2 13.9-13.8v-96.4c-.1-7.6-6.3-13.8-13.9-13.8h-40.9zM224 298c-49.6 0-90-40.4-90-90s40.4-90 90-90 90 40.4 90 90-40.4 90-90 90z"></path>
                        </svg>
                    </a>
                    <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="transform hover:scale-110 transition-transform duration-300 p-2 border border-white rounded-full">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-4xl text-[#4B5563] hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3."></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
