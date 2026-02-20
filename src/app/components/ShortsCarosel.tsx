import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import shortVideo from '../../assets/videos/video1.mp4';

interface Short {
  id: string;
  title: string;
  videoSrc: string;
  channel: string;
}

const baseShort: Omit<Short, 'id'> = {
  title: 'Video Title',
  videoSrc: shortVideo,
  channel: 'Creator Name'
};

const mockShorts: Short[] = Array.from({ length: 6 }, (_, index) => ({
  id: String(index + 1),
  ...baseShort
}));

export function YouTubeShortsCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeShort, setActiveShort] = useState<Short | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 272; // width of one card + gap
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(
            scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth,
            scrollPosition + scrollAmount
          );
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button 
        onClick={() => handleScroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
        disabled={scrollPosition === 0}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Right Arrow */}
      <button 
        onClick={() => handleScroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {mockShorts.map((short) => (
          <div 
            key={short.id}
            onClick={() => setActiveShort(short)}
            className="flex-shrink-0 w-[260px] h-[430px] rounded-2xl overflow-hidden relative group/card cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            {/* Video */}
            <video
              src={short.videoSrc}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />

            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <span className="text-white text-sm font-medium">{short.channel}</span>
                </div>
                <h3 className="text-white font-semibold line-clamp-2">{short.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeShort && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveShort(null)}
        >
          <div
            className="relative w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden border border-white/15 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveShort(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              aria-label="Close video modal"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              src={activeShort.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[85vh] object-contain bg-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}