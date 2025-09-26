import { lazy, Suspense } from "react";

// Lazy load the Hero component
const HeroComponent = lazy(() => import("./Hero"));

// Loading fallback component
const HeroSkeleton = () => (
  <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="flex flex-col lg:flex-row items-center min-h-[40vh]">
        {/* Left Content Skeleton */}
        <div className="lg:w-1/2 mb-16 lg:mb-0 text-left">
          <div className="mb-6">
            <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-sm font-medium mb-4 w-32 h-8 animate-pulse"></div>
            <div className="w-96 h-16 bg-gray-200 rounded animate-pulse mb-4"></div>
          </div>
          <div className="mb-8">
            <div className="w-80 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="mb-10">
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse mb-3"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse mb-6"></div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="w-32 h-12 bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Right Avatar Skeleton */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-72 h-72 lg:w-96 lg:h-96 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Main lazy Hero component with error boundary
const HeroLazy = () => (
  <Suspense fallback={<HeroSkeleton />}>
    <HeroComponent />
  </Suspense>
);

export default HeroLazy;
