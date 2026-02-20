import { useState } from 'react';
import { YouTubeShortsCarousel, shorts } from './ShortsCarosel';
import SpotlightCard from '../../import-components/SpotlightCard';
import { X, Play, Instagram } from 'lucide-react';

export function ShortsSection() {
  const [isViewAllOpen, setIsViewAllOpen] = useState(false);
  const [activeShort, setActiveShort] = useState<typeof shorts[0] | null>(null);

  return (
    <section className="flex justify-center px-6 pb-24">
      <SpotlightCard
        className="max-w-7xl w-full p-7 md:p-8"
        spotlightColor="rgba(192, 132, 252, 0.32)"
        spotlightShape="wide"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Short-Form Videos</h2>
              <p className="text-white/60 text-sm mt-1">Discover my latest Works</p>
            </div>
            <button 
              onClick={() => setIsViewAllOpen(true)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              View All
            </button>
          </div>
          <YouTubeShortsCarousel />
        </div>
      </SpotlightCard>

      {/* View All Modal */}
      {isViewAllOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm overflow-y-auto px-4 py-8 animate-in fade-in duration-200">
           <div className="max-w-7xl mx-auto space-y-8">
             <div className="flex items-center justify-between sticky top-0 z-10 bg-black/80 backdrop-blur-xl p-4 rounded-b-2xl border-b border-white/10">
               <h2 className="text-3xl font-bold text-white">All Short-Form Videos</h2>
               <button
                 onClick={() => setIsViewAllOpen(false)}
                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
               >
                 <X className="w-6 h-6" />
               </button>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
               {shorts.map((short) => (
                 <div
                   key={short.id}
                   onClick={() => setActiveShort(short)}
                   className="aspect-[9/16] rounded-xl overflow-hidden relative group cursor-pointer bg-gray-900 border border-white/5"
                 >
                    {short.type === 'instagram' ? (
                        <img 
                            src={short.thumbnailSrc} 
                            alt={short.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                        />
                        ) : (
                        <video
                            src={short.videoSrc}
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                        />
                    )}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                     <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {short.type === 'instagram' ? (
                            <Instagram className="w-6 h-6 text-white" />
                        ) : (
                            <Play className="w-6 h-6 text-white fill-white ml-1" />
                        )}
                     </div>
                   </div>
                   <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                     <p className="text-sm font-medium text-white line-clamp-1">{short.title || 'Untitled'}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      )}

      {/* Detail Modal for View All */}
      {activeShort && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveShort(null)}
        >
          <div
            className="relative w-full max-w-sm md:max-w-md max-h-[90vh] rounded-3xl overflow-hidden border border-white/10 bg-black shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="absolute top-4 right-4 z-50">
                <button
                onClick={() => setActiveShort(null)}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95 group"
                aria-label="Close"
                >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
            </div>

            {activeShort.type === 'instagram' ? (
              <div className="w-full h-[80vh] md:h-[85vh] bg-black flex items-center justify-center">
                <iframe
                  src={activeShort.embedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  title={activeShort.title}
                />
              </div>
            ) : (
              <video
                src={activeShort.videoSrc}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[85vh] object-contain bg-black"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
