"use client";

import { motion } from "framer-motion";

const skillsData = {
    "Web Development": [
        "HTML/CSS", "Tailwind CSS", "JavaScript", "TypeScript",
        "React.js", "Next.js", "Express.js", "Node.js",
        "MongoDB", "Redux", "Socket.io", "Authentication/JWT", "Stripe"
    ],
    "Data Science": [
        "Python", "NumPy", "Pandas", "Matplotlib",
        "Seaborn", "Scikit Learn", "Data Cleaning",
        "Supervised Learning", "Unsupervised Learning"
    ],
    "Fundamentals & Tools": [
        "System design","Computer Network","Operating System","DBMS","C++", "Data Structures", "Algorithms",
        "OOP", "Git/GitHub", "VS Code"
    ],
    "Core and Electronics": [
        "IoT", "ESP32/ESP8266", "Embedded C", "Arduino"
    ]
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/10"
                        >
                            <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
                            <ul className="space-y-2">
                                {skills.map((skill) => (
                                    <li key={skill} className="flex items-center text-neutral-300 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
