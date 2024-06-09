import { useContext } from 'react';

import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

import LatestArticleCard from './LatestArticleCard';

function HomePage() {
  return (
    <main className="homepage-container flex flex-col overflow-y-scroll h-full w-full text-pewter-900">
      <section
        id="welcome-section"
        className="hero-section flex flex-col md:flex-row"
      >
        <div className="homepage-content-left flex flex-col w-full md:w-2/4 p-9 place-content-center max-md:space-y-6">
          <h2 className="font-serif text-3xl">
            Welcome to Potato&rsquo;s Blog...
          </h2>
          <p>
            ... A place where cuteness, fluffiness and jugement combine to give
            birth to the most magnificent Patate.
          </p>
        </div>
        <div className="homepage-content-right flex h-full p-3 md:w-2/4 place-content-center items-center">
          <img
            src="/potato.jpg"
            alt="Fluffy cat laying down the floor"
            className="rounded-full saturate-50"
          />
        </div>
      </section>
      <section id="latest-articles" className="flex flex-col p-6 space-y-6">
        <div className="flex h-[50px] items-center justify-between section-header w-full">
          <h2 className="font-serif text-xl">Latest Articles</h2>
          <Button className="" variant="ghost">
            See All <ArrowRight className="ml-2" />
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around max-lg:space-y-3">
          <LatestArticleCard />
          <LatestArticleCard />
          <LatestArticleCard />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
