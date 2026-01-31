"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-neutral-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto bg-background rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden text-center"
                >


                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
                        <p className="text-neutral-300 mb-8 text-lg">
                            I'm always open to new opportunities and collaborations.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a
                                href="mailto:contact@example.com"
                                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-background font-bold text-lg hover:bg-primary/90 transition-transform hover:-translate-y-1"
                            >
                                <Mail size={20} />
                                Send Email
                            </a>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
