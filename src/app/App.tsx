import { GlassSurface } from './components/GlassSurface';
import { LiquidBackground } from './components/LiquidBackground';
import logo from '../assets/log.png';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Liquid Background */}
      <LiquidBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
      <header className="p-6 flex justify-center">
        <GlassSurface
          className="
            rounded-full
            px-10 py-4
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            shadow-2xl shadow-indigo-500/10
            min-w-[520px]   /* ✅ KEY FIX */
          "
        >
          <nav className="flex items-center justify-center gap-10">
            
            <button className="text-white hover:text-white/70 transition-colors whitespace-nowrap">
              Contact Us
            </button>

            <span className="text-white font-semibold tracking-wide whitespace-nowrap">
              Davinci Edits
            </span>

            <button className="text-white hover:text-white/70 transition-colors whitespace-nowrap">
              My Works
            </button>

          </nav>
        </GlassSurface>
      </header>

     

        {/* Hero Glass Panel */}
        <section className="flex justify-center mt-4">
  <GlassSurface
    className="
      rounded-2xl
      px-7 py-3
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      shadow-xl shadow-indigo-500/5
    "
  >
    <div className="flex items-center gap-3">
      
      {/* Logo */}
      <div className="
        w-10 h-10
        rounded-lg
        bg-white/10
        border border-white/20
        flex items-center justify-center
      ">
        <img 
          src={logo}
          alt="Davinci Edits logo"
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Text */}
      <h2 className="
        text-white
        text-sm md:text-base
        font-medium
        tracking-wide
        whitespace-nowrap   /* ✅ Prevent wrapping */
      ">
        Davinci Edits
      </h2>

    </div>
  </GlassSurface>
</section>




        {/* Hero Statement */}
        <main className="flex-1 flex items-center justify-center px-6">
          <h1 className="text-white text-3xl md:text-5xl font-semibold text-center leading-relaxed">
            Short-Form, Long-Form,
            <br />
            Blog Video Edits and more
          </h1>
        </main>

      </div>
    </div>
  );
}
