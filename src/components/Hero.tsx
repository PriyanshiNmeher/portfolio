"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        Software Engineer 
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">Priyanshi Nandmeher</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                >
                    Crafting Efficient technological solutions.
                    Specializing in Web Development, Data Science, and C++ Programming.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-background font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium text-lg hover:bg-white/10 transition-all hover:scale-105"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
