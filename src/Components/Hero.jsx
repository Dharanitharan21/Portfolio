import { FileText, Mail } from "lucide-react"


function Hero() {
    const scrollToSection = (SectionId) => {
        const element = document.getElementById(SectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20" >
            <div className=" container mx-auto px-6">
                <div className=" text-center max-w-4xl mx-auto">
                    <div className="animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Web Developer
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> & Creative Coder</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8  max-w-3xl mx-auto leading-relaxed"> I build high-quality web applications with clean code, modern design, and powerful technologies. Let’s create something extraordinary together.</p>
                        <div className="flex gap-4 justify-center flex-wrap " >
                            <button onClick={() => scrollToSection('projects')} className=" bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2">   <FileText size={20} />
                                View My Work</button>
                            <a
                                href="mailto:dharanitharan2112@gmail.com"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105 flex items-center gap-2"
                            >
                                <Mail size={20} />
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero