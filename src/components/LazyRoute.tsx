import { Suspense, lazy, ComponentType } from 'react';

interface LazyRouteProps {
  importFunc: () => Promise<{ default: ComponentType<any> }>;
}

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-muted-foreground text-lg">در حال بارگذاری...</p>
    </div>
  </div>
);

const LazyRoute = ({ importFunc }: LazyRouteProps) => {
  const LazyComponent = lazy(importFunc);
  
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyRoute;
