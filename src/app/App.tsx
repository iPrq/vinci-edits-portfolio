import GlassSurface from '../components/GlassSurface';
import { Navbar } from './components/Navbar';
import { LiquidBackground } from './components/LiquidBackground';
import SpotlightCard from '../import-components/SpotlightCard';
import { ShortsSection } from './components/ShortFormSection';
import { PostsSection } from './components/PostsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const logo = '/static-assets/log.png';
  const logo2 = '/static-assets/logo2.png';
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Liquid Background */}
      <LiquidBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        
        <Navbar logo={logo2} />

        {/* ===== Navbar ===== */}
        {/* <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg max-w-fit mx-auto px-8 py-3 rounded-full flex items-center justify-between gap-8 lg:gap-12">
           
            <a href="#" className="text-xl font-bold text-gray-100 flex items-center group">
                <span className="text-2xl text-purple-400 leading-none mr-2 group-hover:text-pink-400 transition-colors">✦</span>
                <span className="text-lg hidden md:block group-hover:text-white transition-colors tracking-wide">Vinci Edits</span>
            </a>
            
            
            <nav className="flex items-center gap-6 lg:gap-10">
                <a href="#works" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 ease-in-out text-sm font-medium">Portfolio</a>
                <a href="#contact" className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-purple-300 hover:text-white font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 ease-in-out whitespace-nowrap text-sm">
                    Contact Me
                </a>
            </nav>
          </div>
        </header> */}

        {/* ===== Hero Statement ===== */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center pt-60 pb-16">
          
          <h1 className="
            text-3xl md:text-5xl
            font-semibold
            leading-relaxed
            bg-gradient-to-r
            from-indigo-400
            via-purple-400
            to-pink-400
            bg-clip-text
            text-transparent
          ">
            <span className="font-bold">Short-Form</span>, <span className="font-bold">Long-Form</span>,
            <br />
            <span className="font-bold">Blogs</span>, <span className="font-bold">Documentary</span> & More
          </h1>

          <p className="
            mt-4
            text-lg md:text-xl
            text-white/50
            font-medium
            tracking-wide
          ">
            Video Editing for Brands & Creators
          </p>

        </main>

        {/* ===== About Me Section ===== */}
        <section id="about" className="flex justify-center px-6 pb-24 pt-40">
          <SpotlightCard className="max-w-6xl w-full p-12">
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              
              {/* Logo */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="
                  w-48 h-48
                  rounded-full
                  bg-gradient-to-br from-slate-800 to-slate-900
                  border-2 border-slate-700/50
                  flex items-center justify-center
                  shadow-[0_12px_40px_rgba(0,0,0,0.5)]
                  ring-2 ring-purple-500/20
                ">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-center md:text-left space-y-5 flex-1">
                
                <h2 className="
                  text-3xl md:text-4xl
                  font-bold
                  tracking-wide
                  bg-gradient-to-r
                  from-purple-400
                  via-pink-400
                  to-indigo-400
                  bg-clip-text
                  text-transparent
                ">
                  About Me
                </h2>

                <p className="
                  text-slate-300
                  leading-relaxed
                  text-base md:text-lg
                  max-w-4xl
                ">
                  I am <span className="text-white font-semibold">Naresh Choudhary</span>, a professional video editor with a passion for 
                  creating engaging and high-impact short-form content. With a strong 
                  background in <span className="text-purple-400 font-medium">After Effects</span>, <span className="text-purple-400 font-medium">Premiere Pro</span>, and <span className="text-purple-400 font-medium">motion graphics</span>, I 
                  specialise in transforming raw footage into captivating narratives for 
                  social media platforms. My expertise extends to detailed face-cam edits, 
                  dynamic text animations, and cinematic colour grading, ensuring every 
                  second of your video counts. I thrive on collaborating with creators to 
                  bring their visions to life, delivering polished, performance-driven 
                  content that resonates with audiences.
                </p>

              </div>

            </div>

          </SpotlightCard>
        </section>

        <div id="works">
          <ShortsSection />
          <PostsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>

      </div>
    </div>
  );
}
