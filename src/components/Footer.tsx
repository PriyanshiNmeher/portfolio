import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white">
                            Priyanshi Nandmeher
                        </h3>
                        <p className="text-neutral-400 mt-2 text-sm max-w-md">
                            Software Engineer specializing in Web Development, Data Science, and Electronics.
                            Building the future with code and circuits.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/PriyanshiNmeher" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/priyanshi-nandmeher-8131832a0/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:nandmeharpriyanshi@gmail.com" className="text-neutral-400 hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-neutral-500 text-sm">
                    &copy; {new Date().getFullYear()} Priyanshi Nandmeher. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
