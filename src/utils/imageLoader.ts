// src/utils/imageLoader.ts

interface LoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: LoaderProps) {
  // 1. Handle external images
  if (src.startsWith('http')) return src;

  // 2. Remove leading slash for processing
  const rootSrc = src.startsWith('/') ? src.slice(1) : src;

  // 3. Determine the extension. 
  // If your config converts everything to webp, use 'webp'.
  // Otherwise, use the original extension.
  const lastDotIndex = rootSrc.lastIndexOf('.');
  const extension = 'webp'; // Matches your export-optimize-images.config.ts

  // 4. Construct the path pattern used by next-export-optimize-images
  // Format: /_next/static/chunks/images/[path]_[width]_[quality].[extension]
  return `/_next/static/chunks/images/${rootSrc}_${width}_${quality || 75}.${extension}`;
}