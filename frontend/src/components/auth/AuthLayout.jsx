import React from "react";
import logo from "../../assets/images/logo.png";
import ThemeToggle from "../common/ThemeToggle";

const AuthLayout = ({ children, title, subtitle }) => {
  return (
     <div className="min-h-screen flex w-full font-sans transition-colors duration-300 dark:bg-[#0B0914] bg-gray-50">

         <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">
             {/*logo */}
             <img src={logo} alt="UptoSkills" className="h-10"/>
             
              {/* 🔥 UNIVERSAL THEME TOGGLE (TOP-RIGHT) */}
              <ThemeToggle />
        </div>

        {/* LEFT SECTION */}   
        <div className="hidden lg:flex flex-col justify-center px-16 w-[55%] relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 transition-colors duration-300">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-indigo-300/20 dark:bg-indigo-600/30 rounded-full blur-3xl transition-colors duration-300"></div>
            <div className="text-indigo-600 dark:text-white">

              <div className="absolute opacity-10 float-medium" style={{ left: "15%", top: "25%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
              </div>

              <div className="absolute opacity-10 float-medium" style={{ left: "75%", top: "35%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>

              <div className="absolute opacity-10 float-medium-1" style={{ left: "20%", top: "70%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>

              <div className="absolute opacity-10 float-medium-2" style={{ left: "70%", top: "75%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>

              <div className="absolute opacity-10 float-medium-3" style={{ left: "50%", top: "15%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                  <path d="M9 18h6"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>

            </div>   
          
          {/* Heading */}
          <h1 className="font-bold mt-10 text-6xl leading-tight text-[#4a268a] dark:text-white">
            <span className="text-6xl font-bold mb-8 leading-tight bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
              Learn smarter,
            </span>
            <br />grow faster
          </h1>

          {/* Subtitle */}
          <p className=" mt-7 text-xl text-indigo-800/90 dark:text-indigo-200/90 max-w-[520px] leading-relaxed transition-colors duration-300">
            Unlock your potential with expert-led courses designed to accelerate your career growth. Join thousands of learners transforming their skills into success stories.
          </p>
        </div>

        {/* RIGHT SECTION */}
      <div className="flex-1 flex flex-col justify-center items-center relative p-8">
          <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20  border-0 py-7 px-6 rounded-2xl relative w-full max-w-[370px]">

          <h3 className="font-bold text-center mb-1.5 text-3xl text-gray-900 dark:text-white">
              {title}
            </h3>

            <p className="text-gray-500 dark:text-gray-400 mb-5 text-center mx-auto max-w-[320px] text-sm">
              {subtitle}
            </p>

            {children}
          </div>
        </div>
      </div>
  );
};
export default AuthLayout;