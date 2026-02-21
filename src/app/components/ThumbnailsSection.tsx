import { useState, useRef } from 'react';
import SpotlightCard from '../../import-components/SpotlightCard';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const thumbnails = [
  { id: '1', title: 'Thumbnail 1', src: '/tbs/tb1.jpeg' },
  { id: '2', title: 'Thumbnail 2', src: '/tbs/tb2.jpeg' },
];

export function ThumbnailsSection() {
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [activeThumbnail, setActiveThumbnail] = useState<typeof thumbnails[0] | null>(null);

  return (
    <section className="flex justify-center px-6 pb-24">
      <SpotlightCard className="max-w-7xl w-full p-7 md:p-8" spotlightColor="rgba(192, 132, 252, 0.3)" spotlightShape="wide">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Thumbnails</h2>
              <p className="text-white/60 text-sm mt-1">High-quality thumbnails designed for impact</p>
            </div>
            <button 
              onClick={() => setIsViewAllOpen(true)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              View All
            </button>
          </div>
          <ThumbnailsCarousel onSelect={(thumb) => setActiveThumbnail(thumb)} />
        </div>
      </SpotlightCard>

      {/* View All Modal */}
      {isViewAllOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto w-full h-full animate-in fade-in duration-200">
           <div className="max-w-7xl mx-auto min-h-full flex flex-col p-4 md:p-8">
             <div className="flex items-center justify-between mb-8 sticky top-0 z-10 bg-black/80 backdrop-blur-xl -mx-4 px-4 py-4 md:-mx-8 md:px-8 border-b border-white/10">
               <h2 className="text-3xl font-bold text-white">All Thumbnails</h2>
               <button
                 onClick={() => setIsViewAllOpen(false)}
                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
               {thumbnails.map((thumb) => (
                 <div
                   key={thumb.id}
                   onClick={() => setActiveThumbnail(thumb)}
                   className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer bg-slate-900 border border-white/5 shadow-lg hover:shadow-purple-500/10 transition-all hover:scale-[1.02]"
                 >
                   <img 
                     src={thumb.src} 
                     alt={thumb.title} 
                     className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                     loading="lazy" 
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors">
                        View Full Size
                      </span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      )}

      {/* Warning/Preview Modal */}
      {activeThumbnail && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveThumbnail(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl animate-in zoom-in-95 duration-300 flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActiveThumbnail(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95 group"
              aria-label="Close"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <img 
              src={activeThumbnail.src} 
              alt={activeThumbnail.title} 
              className="w-full h-full max-h-[85vh] object-contain" 
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ThumbnailsCarousel({ onSelect }: { onSelect: (thumb: typeof thumbnails[0]) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/carousel">
      {/* Scroll Controls */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white/20 disabled:opacity-0"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white/20 disabled:opacity-0"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {thumbnails.map((thumb) => (
          <div 
            key={thumb.id}
            onClick={() => onSelect(thumb)}
            className="flex-none w-[300px] sm:w-[400px] aspect-video rounded-xl overflow-hidden relative group cursor-pointer bg-slate-900 border border-white/5 snap-center hover:scale-[1.02] transition-transform duration-300 shadow-md"
          >
            <img 
              src={thumb.src} 
              alt={thumb.title} 
              className="w-full h-full object-cover" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                View
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
