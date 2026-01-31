"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Cpu } from "lucide-react";
import Image from "next/image";
import image from "../app/image.png"

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-800 border-2 border-white/10 relative group">
                            <Image
                                src={image}
                                alt="Profile Image"
                                fill
                                className="object-cover"
                                priority
                            />



                        </div>
                        {/* Decorative elements behind image */}
                        <div className="absolute -z-10 top-6 left-6 w-full h-full border-2 border-primary/30 rounded-2xl" />
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-2xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-primary">Software Engineer & Tech Enthusiast</h3>
                        <p className="text-neutral-300 mb-6 leading-relaxed">
                            Hello! I'm Priyanshi Nandmeher, a passionate Software Engineer with a robust background in Electronics and Communication.
                            My journey bridges the gap between hardware logic and software innovation.
                        </p>
                        <p className="text-neutral-300 mb-6 leading-relaxed">
                            I have honed my skills in <strong>Web Development</strong>, building full-stack applications with the MERN stack and Next.js.
                            Simultaneously, I explore the world of <strong>Data Science</strong>, leveraging Python and machine learning to derive insights from data.
                            My foundation in <strong>C++ and OOP</strong> ensures I write efficient, scalable code.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <Code className="text-primary mb-2" />
                                <h4 className="font-bold">Web Dev</h4>
                                <p className="text-sm text-neutral-400">Next.js, React, Node</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <Database className="text-secondary mb-2" />
                                <h4 className="font-bold">Data Science</h4>
                                <p className="text-sm text-neutral-400">Python, ML, Pandas</p>
                            </div>
                            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                <Cpu className="text-accent mb-2" />
                                <h4 className="font-bold">Electronics</h4>
                                <p className="text-sm text-neutral-400">IoT, Embedded Systems</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
