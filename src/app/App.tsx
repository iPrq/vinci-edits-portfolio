
import { Navbar } from './components/Navbar';
import { LiquidBackground } from './components/LiquidBackground';
import ClickSpark from '@/components/ClickSpark';
import SpotlightCard from '../import-components/SpotlightCard';
import { ShortsSection } from './components/ShortFormSection';
import { PostsSection } from './components/PostsSection';
import { ThumbnailsSection } from './components/ThumbnailsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const logo = '/static-assets/log.png';
  const logo2 = '/static-assets/logo2.png';
  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Liquid Background */}
      <LiquidBackground />

      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar logo={logo2} />
          
          {/* ===== Hero Statement ===== */}
          <main className="flex-1 flex flex-col items-center justify-center px-6 text-center min-h-screen pt-32 pb-16">
          
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
                    className="w-full h-full object-cover rounded-full"
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

        <div id="works" className="mt-15">
          <ShortsSection />
          <PostsSection />
          <ThumbnailsSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>

      </div>
      </ClickSpark>
    </div>
  );
}
