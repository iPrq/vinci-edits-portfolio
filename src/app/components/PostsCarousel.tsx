import { useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const postImageModules = import.meta.glob('../../assets/posts/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const extractOrder = (path: string) => {
  const fileName = path.split('/').pop() ?? '';
  const baseName = fileName.split('.')[0] ?? '';
  const parsed = Number.parseInt(baseName, 10);
  return Number.isNaN(parsed) ? Number.MAX_SAFE_INTEGER : parsed;
};

export interface PostItem {
  id: string;
  title: string;
  imageSrc: string;
}

export const usePosts = () => {
    return useMemo<PostItem[]>(() => {
    const seen = new Set<string>();

    return Object.entries(postImageModules)
      .sort(([pathA], [pathB]) => {
        // Sort by filename number first to keep order consistent
        const getNum = (p: string) => {
          const name = p.split('/').pop()?.split('.')[0] || '0';
          return parseInt(name) || 0;
        };
        return getNum(pathA) - getNum(pathB);
      })
      .filter(([path]) => {
        const fileName = path.split('/').pop() ?? '';
        const baseName = fileName.split('.')[0] ?? '';
        
        // If we already saw this base name (e.g. '3'), skip duplicates
        if (seen.has(baseName)) {
            return false;
        }
        seen.add(baseName);
        return true;
      })
      .map(([path, imageSrc]) => {
        const fileName = path.split('/').pop() ?? '';
        const baseName = fileName.split('.')[0] ?? 'Post';

        return {
          id: baseName,
          title: `Post ${baseName}`,
          imageSrc
        };
      });
  }, []);
}

export function PostsCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activePost, setActivePost] = useState<PostItem | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const posts = usePosts();

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 272;
    const newPosition =
      direction === 'left'
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
  };

  return (
    <div className="relative group">
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
        disabled={scrollPosition === 0}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => handleScroll('right')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => setActivePost(post)}
            className="flex-shrink-0 w-[260px] h-[430px] rounded-2xl overflow-hidden relative group/card cursor-pointer hover:scale-105 transition-transform duration-300 bg-slate-900"
          >
            <img src={post.imageSrc} alt={post.title} className="w-full h-full object-cover" loading="lazy" />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              {/* <h3 className="text-white font-semibold line-clamp-2">{post.title}</h3> */}
            </div>
          </div>
        ))}
      </div>

      {activePost && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePost(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-white/15 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              aria-label="Close post modal"
            >
              <X className="w-5 h-5" />
            </button>

            <img src={activePost.imageSrc} alt={activePost.title} className="w-full max-h-[85vh] object-contain bg-black" />
          </div>
        </div>
      )}
    </div>
  );
}
