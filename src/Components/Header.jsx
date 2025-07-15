import { FileText, Mail, Section, Settings, User } from 'lucide-react'


function Header() {
    const scrollToSection = (SectionId)=>{
        const element= document.getElementById(SectionId)
        element?.scrollIntoView({behavior:'smooth'})
    }
    return (
        <header className=' fixed top-0 right-0 left-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 '>
            <nav className='container mx-auto px-10 py-4' >
                <div className='flex justify-between items-center'>
                    <div className=' text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>Protfolio</div>
                    <div className='hidden md:flex space-x-8'>
                        <button  onClick={() => scrollToSection('about')}
                        className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'>
                            <User size={16}/>
                            About
                        </button>
                        <button onClick={() => scrollToSection('skills')}
                         className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'>
                            <Settings size={16} />
                            Skills</button>
                        <button onClick={() => scrollToSection('projects')} className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'>
                            <FileText size={16} />
                            Projects</button>
                        <button onClick={() => scrollToSection('contact')} className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors'>
                            <Mail size={16} />
                            Contact</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header