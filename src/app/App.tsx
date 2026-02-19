import { GlassSurface } from './components/GlassSurface';
import { LiquidBackground } from './components/LiquidBackground';
import SpotlightCard from '../import-components/SpotlightCard';
import logo from '../assets/log.png';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Liquid Background */}
      <LiquidBackground />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ===== Navbar ===== */}
        <header className="p-6 flex justify-center">
          <GlassSurface className="rounded-full px-12 py-4 min-w-fit">
            <nav className="flex items-center gap-8">
              
              <a className="text-white/70 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                Contact Me
              </a>

              <div className="w-px h-6 bg-white/20" />

              <span className="text-white font-semibold tracking-wide whitespace-nowrap">
                Davinci Edits
              </span>

              <div className="w-px h-6 bg-white/20" />

              <a className="text-white/70 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
                My Works
              </a>

            </nav>
          </GlassSurface>
        </header>

        {/* ===== Logo Header ===== */}
        <section className="flex justify-center mt-16">
          <div className="flex items-center gap-5">
            
            <div className="
              w-16 h-16
              rounded-[18px]
              bg-slate-800
              border border-white/10
              flex items-center justify-center
              shadow-[0_8px_25px_rgba(0,0,0,0.35)]
            ">
              <img
                src={logo}
                alt="Davinci Edits logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h2 className="
              text-white
              text-2xl md:text-3xl
              font-semibold
              tracking-wide
            ">
              Davinci Edits
            </h2>

          </div>
        </section>

        {/* ===== Hero Statement ===== */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center py-16">
          
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
            Short-Form, Long-Form,
            <br />
            Blogs, Documentary & More
          </h1>

          <p className="
            mt-4
            text-sm md:text-base
            text-white/50
            font-medium
            tracking-wide
          ">
            Video Editing for Brands & Creators
          </p>

        </main>

        {/* ===== About Me Section ===== */}
        <section className="flex justify-center px-6 pb-24 pt-20">
          <SpotlightCard className="max-w-6xl w-full">
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="
                  w-28 h-28
                  rounded-full
                  bg-neutral-800
                  border border-neutral-700
                  flex items-center justify-center
                  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                ">
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-center md:text-left space-y-4">
                
                <h2 className="
                  text-3xl md:text-4xl
                  font-semibold
                  text-white
                  tracking-wide
                ">
                  About Me
                </h2>

                <p className="
                  text-neutral-400
                  leading-relaxed
                  text-base md:text-lg
                ">
                  I am Naresh Choudhary, a professional video editor with a passion for 
                  creating engaging and high-impact short-form content. With a strong 
                  background in After Effects, Premiere Pro, and motion graphics, I 
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

      </div>
    </div>
  );
}
