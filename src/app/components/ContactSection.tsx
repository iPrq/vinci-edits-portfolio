import React from 'react';
import { Phone, Mail, Github, Send, ArrowRight } from 'lucide-react';
import { BlockGlassSurface } from './BlockGlassSurface';

export function ContactSection() {
  return (
    <footer className="w-full mt-32">
      <BlockGlassSurface
        opacity={0.03}
        className="
          w-full
          rounded-none
          bg-black/90
          backdrop-blur-3xl
        "
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
          
          {/* Left Side: Branding & Info (5 Columns) */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:pl-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden">
            
            {/* Subtle Gradient Background Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                Let’s create <br />
                <span className="text-white/40">something epic.</span>
              </h2>
              <p className="text-white/40 mt-4 text-sm md:text-base max-w-sm leading-relaxed">
                Open for collaborations and interesting projects. 
                Let's build something exceptional together.
              </p>
            </div>

            <div className="relative z-10 mt-10 space-y-5">
              <CompactContactItem
                icon={<Phone className="w-5 h-5" />}
                text="+91 7738443636"
                href="tel:+917738443636"
                label="Call Me"
              />
              <CompactContactItem
                icon={<Mail className="w-5 h-5" />}
                text="Jaycrea36@gmail.com"
                href="mailto:Jaycrea36@gmail.com"
                label="Email Me"
              />
              <CompactContactItem
                icon={<Github className="w-5 h-5" />}
                text="github.com/yourusername"
                href="https://github.com/yourusername"
                label="Follow Me"
              />
            </div>
          </div>

          {/* Right Side: Form (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:pr-16 bg-white/[0.01] flex items-center relative">
            
            <form className="w-full max-w-2xl mx-auto space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your vision..."
                  className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all duration-300 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="
                    group
                    w-full
                    flex items-center justify-center gap-2
                    bg-gradient-to-r from-white to-white/90 
                    hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400
                    text-black hover:text-white
                    py-3.5 rounded-xl
                    text-xs font-bold uppercase tracking-widest
                    transition-all duration-300
                    transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                  "
                >
                  Send Message
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-purple-600 group-hover:text-white ml-1" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </BlockGlassSurface>
    </footer>
  );
}

function CompactContactItem({ icon, text, href, label }: any) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="group flex items-center gap-5 text-white/40 hover:text-white transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5"
    >
      <div className="p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 text-white/50 group-hover:text-purple-400 transition-all">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-white/30 mb-0.5">{label}</div>
        <span className="text-sm tracking-wide font-medium">{text}</span>
      </div>
    </a>
  );
}