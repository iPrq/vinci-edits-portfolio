import { useRef, useState, useEffect } from 'react';

export function Navbar({ logo }: { logo: string }) {
  const [activeTab, setActiveTab] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const tabs = [
    { id: 'home', label: 'Vinci Edits', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
    { id: 'works', label: 'My Works', href: '#works' }
  ];

  const updateIndicator = (element: HTMLElement) => {
    setIndicatorStyle({
      left: element.offsetLeft,
      width: element.offsetWidth,
      opacity: 1
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        const index = tabs.findIndex((t) => t.id === activeTab);
        const el = itemsRef.current[index];
        if (el) {
          updateIndicator(el);
        }
    }, 100);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-center">
      <style>{`
        .glass-nav {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        .nav-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 105%;
            height: 120%;
            background: linear-gradient(90deg, #a855f7 0%, #ec4899 100%);
            filter: blur(25px);
            opacity: 0.15;
            z-index: -1;
            border-radius: 9999px;
            pointer-events: none;
        }
      `}</style>
      
      <div className="relative">
          <div className="nav-glow"></div>
          <div className="glass-nav relative bg-black/40 rounded-full flex items-center p-1.5 justify-between">
            
            {/* Sliding Background Indicator */}
            <div 
                className="absolute top-1.5 bottom-1.5 rounded-full bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-[left,width,opacity] duration-500 ease-in-out will-change-[left,width]"
                style={{ 
                    left: indicatorStyle.left, 
                    width: indicatorStyle.width,
                    opacity: indicatorStyle.opacity 
                }}
            />

            {tabs.map((tab, idx) => {
                const isLogo = tab.id === 'home';
                return (
                <a
                    key={tab.id}
                    href={tab.href}
                    ref={(el) => (itemsRef.current[idx] = el)}
                    onClick={(e) => {
                        setActiveTab(tab.id);
                        setIndicatorStyle({
                            left: e.currentTarget.offsetLeft,
                            width: e.currentTarget.offsetWidth,
                            opacity: 1
                        });
                    }}
                    className={`
                        relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-300 w-40
                        ${activeTab === tab.id ? 'text-purple-400' : 'text-gray-400 hover:text-white'}
                    `}
                >
                    {isLogo ? (
                        <>
                            <img src={logo} alt="Vinci Edits" className={`w-6 h-6 object-contain transition-transform duration-300 ${activeTab === 'home' ? 'scale-110' : 'group-hover:scale-110'}`} />
                            <span className={`text-sm font-bold whitespace-nowrap ${activeTab === 'home' ? 'text-purple-400' : 'text-gray-100'}`}>
                                {tab.label}
                            </span>
                        </>
                    ) : (
                        <span className="text-sm whitespace-nowrap">{tab.label}</span>
                    )}
                </a>
                )
            })}
          </div>
      </div>
    </header>
  );
}
