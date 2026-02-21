import React, { useState, useRef } from 'react';
import { Phone, Mail, Instagram, Send, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { BlockGlassSurface } from './BlockGlassSurface';

export function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // FormSubmit.co Integration
    
    const ENDPOINT = "https://formsubmit.co/ajax/ayushkumarshawmmmm@gmail.com";

    try {
        const formData = {
            name: (form.current.elements.namedItem('user_name') as HTMLInputElement).value,
            email: (form.current.elements.namedItem('user_email') as HTMLInputElement).value,
            message: (form.current.elements.namedItem('message') as HTMLTextAreaElement).value,
            _subject: "New Portfolio Inquiry!",
            _template: "table",
            _captcha: "false"
        };
        
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        if (form.current) form.current.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

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
                text="+91 8218277039"
                href="tel:+918218277039"
                label="Call Me"
              />
              <CompactContactItem
                icon={<Mail className="w-5 h-5" />}
                text="ayushkumarshawmmmm@gmail.com"
                href="mailto:ayushkumarshawmmmm@gmail.com"
                label="Email Me"
              />
              <CompactContactItem
                icon={<Instagram className="w-5 h-5" />}
                text="@vinci_editor"
                href="https://www.instagram.com/vinci_editor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                label="Follow Me"
              />
            </div>
          </div>

          {/* Right Side: Form (7 Columns) */}
          <div className="lg:col-span-7 p-8 md:p-12 lg:pr-16 bg-white/[0.01] flex items-center relative">
            
            <form ref={form} className="w-full max-w-2xl mx-auto space-y-5 relative z-10" onSubmit={handleSubmit}>
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Project Details</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your vision..."
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] focus:bg-white/[0.08] rounded-xl border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    group
                    w-full
                    relative
                    overflow-hidden
                    flex items-center justify-center gap-3
                    bg-white
                    text-black 
                    hover:text-white
                    py-4 rounded-xl
                    text-sm font-semibold tracking-wide
                    transition-all duration-300
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-[1.02]
                    disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="opacity-90">Sending...</span>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <span className="opacity-90">Message Sent!</span>
                        <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:text-white" />
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <span className="opacity-90">Failed - Try Again</span>
                        <XCircle className="w-5 h-5 text-red-500 group-hover:text-white" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-600 group-hover:text-white" />
                      </>
                    )}
                  </div>
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