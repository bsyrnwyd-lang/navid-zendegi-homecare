import { memo, useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  aspectRatio?: string;
  sizes?: string;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  placeholder = 'blur',
  aspectRatio,
  sizes = '100vw'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01,
        rootMargin: '300px' // Load images 300px before they enter viewport for smoother UX
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate srcset for responsive images
  const generateSrcSet = (src: string) => {
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) return undefined;
    // For local assets, let the bundler handle optimization
    return undefined;
  };

  return (
    <div 
      ref={imgRef}
      className="relative overflow-hidden"
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : 'auto',
        aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined)
      }}
    >
      {/* Placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <div 
          className={`absolute inset-0 bg-muted/50 animate-pulse ${className}`}
          aria-hidden="true"
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div 
          className={`absolute inset-0 bg-muted flex items-center justify-center ${className}`}
          aria-hidden="true"
        >
          <span className="text-muted-foreground text-sm">تصویر بارگذاری نشد</span>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          srcSet={generateSrcSet(src)}
          sizes={sizes}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
