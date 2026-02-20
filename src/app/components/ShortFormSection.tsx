import { YouTubeShortsCarousel } from './ShortsCarosel';
import SpotlightCard from '../../import-components/SpotlightCard';

export function ShortsSection() {
  return (
    <section className="flex justify-center px-6 pb-24">
      <SpotlightCard
        className="max-w-6xl w-full"
        spotlightColor="rgba(192, 132, 252, 0.35)"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Trending Shorts</h2>
              <p className="text-white/60 text-sm mt-1">Discover the latest content</p>
            </div>
            <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              View All
            </button>
          </div>
          <YouTubeShortsCarousel />
        </div>
      </SpotlightCard>
    </section>
  );
}
