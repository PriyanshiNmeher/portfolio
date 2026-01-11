"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Cpu, Database } from "lucide-react";

const projects = [
    {
        title: "Grocery Web App",
        description: "A fully functional grocery shopping application with secure authentication and payment integration.",
        tags: ["React", "Vite", "Context API", "Stripe", "MongoDB", "JWT", "Cloudinary"],
        icon: <ExternalLink size={24} className="text-primary" />,
        link: "https://streetway-frontend.onrender.com",
        github: "https://github.com/PriyanshiNmeher/StreetWay"
    },
    {
        title: "Social Media for AI Enthusiasts",
        description: "A social platform for AI community with real-time interaction and content sharing.",
        tags: ["React", "Redux", "Socket.io", "MongoDB", "Nodemailer", "Cloudinary"],
        icon: <Layers size={24} className="text-secondary" />,
        link: "https://ai-app-0i2h.onrender.com",
        github: "https://github.com/PriyanshiNmeher/ai-app"
    },
    {
        title: "Bengaluru House Price Prediction",
        description: "Machine learning model to predict house prices with a Flask-based user interface.",
        tags: ["Python", "Flask", "Scikit Learn", "Linear Regression", "HTML/CSS"],
        icon: <Database size={24} className="text-accent" />,
        link: "https://github.com/PriyanshiNmeher/BHP",
        github: "https://github.com/PriyanshiNmeher/BHP"
    },
    {
        title: "Electronics & IoT Collection",
        description: "Various hardware projects including RFID Lock, Home Security Cam, and Robo Car.",
        tags: ["ESP32", "Arduino", "IoT", "Embedded C", "Sensors"],
        icon: <Cpu size={24} className="text-emerald-400" />,
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-slate-900/50 rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 mb-6 min-h-[3rem]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
