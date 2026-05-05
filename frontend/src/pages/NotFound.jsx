import React from "react";
import { Link } from "react-router-dom";
import { Bot, Home, Search } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300">
            {/* Dynamic Background matching UptoSkills brand colors */}
            <div className="absolute top-[20%] left-[30%] w-80 h-80 bg-teal-500/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-[20%] right-[30%] w-[25rem] h-[25rem] bg-[#ff6d34]/20 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute inset-0 opacity-50 dark:opacity-10 -z-10 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="text-center z-10 max-w-xl mx-auto flex flex-col items-center">
                {/* Animated AI Icon */}
                <div className="relative mb-8 mt-[-50px]">
                    <div className="absolute inset-0 bg-teal-500/20 dark:bg-teal-500/30 blur-2xl rounded-full animate-pulse"></div>
                    <Bot className="w-32 h-32 text-teal-500 relative z-10 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)] animate-bounce" style={{ animationDuration: '3s' }} />
                </div>

                <h1 className="text-[6rem] sm:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-[#ff6d34] leading-none drop-shadow-lg tracking-tighter mb-4">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                    Page Not Found
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed max-w-md transition-colors">
                    We couldn't find the page you're looking for.<p> Let's get you back to your learning dashboard.</p>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        to="/dashboard"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-teal-500 text-white font-semibold transition-all duration-300 hover:bg-teal-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,109,52,0.4)] active:scale-95"
                    >
                        <Home className="w-5 h-5" />
                        <span>Return to Dashboard</span>
                    </Link>

                    <Link
                        to="/courses"
                        className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#ff6d34] text-white font-semibold transition-all duration-300 hover:bg-[#ff6d34] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,109,52,0.4)] active:scale-95"
                    >
                        <Search className="w-5 h-5" />
                        <span>Explore Courses</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default NotFound;
