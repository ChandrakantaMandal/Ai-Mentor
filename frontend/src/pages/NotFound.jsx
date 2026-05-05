import React from "react";
import { Link } from "react-router-dom";
import { Bot, Home, Search } from "lucide-react";
const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans bg-[#0B1120]">
            {/* Dynamic Background matching CoursesPage teal vibe */}
            <div className="absolute top-[20%] left-[30%] w-80 h-80 bg-teal-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[20%] right-[30%] w-[25rem] h-[25rem] bg-indigo-600/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute inset-0 opacity-10 -z-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="text-center z-10 max-w-xl mx-auto flex flex-col items-center">
                {/* Animated AI Icon */}
                <div className="relative mb-8 mt-[-50px]">
                    <div className="absolute inset-0 bg-teal-500/30 blur-2xl rounded-full animate-pulse"></div>
                    <Bot className="w-32 h-32 text-teal-400 relative z-10 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)] animate-bounce" style={{ animationDuration: '3s' }} />
                </div>
                <h1 className="text-[6rem] sm:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-600 leading-none drop-shadow-lg tracking-tighter mb-4">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-white mb-4">
                    Page Not Found
                </h2>

                <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
                    We couldn't find the page you're looking for. Let's get you back to your learning dashboard.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/dashboard"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] active:scale-95"
                    >
                        <Home className="w-5 h-5" />
                        <span>Return to Dashboard</span>
                    </Link>

                    <Link
                        to="/courses"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
                    >
                        <Search className="w-5 h-5 text-teal-400 group-hover:text-teal-300" />
                        <span>Explore Courses</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default NotFound;
