import SpotlightCard from '../../import-components/SpotlightCard';
import { PostsCarousel } from './PostsCarousel';

export function PostsSection() {
  return (
    <section className="flex justify-center px-6 pb-24">
      <SpotlightCard className="max-w-7xl w-full p-7 md:p-8" spotlightColor="rgba(192, 132, 252, 0.3)" spotlightShape="wide">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Posts</h2>
              <p className="text-white/60 text-sm mt-1">Browse visual posts from my portfolio</p>
            </div>
            <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">View All</button>
          </div>
          <PostsCarousel />
        </div>
      </SpotlightCard>
    </section>
  );
}
