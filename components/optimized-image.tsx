import Image from 'next/image'
import { cn } from '@/lib/utils'

type AspectRatio = '16/9' | '21/9' | '4/3' | '3/4' | '1/1' | '9/16'

interface OptimizedImageProps {
  src: string
  alt: string
  ratio?: AspectRatio
  className?: string
  sizes?: string
  priority?: boolean
  fill?: boolean
}

const ratioClass: Record<AspectRatio, string> = {
  '16/9': 'aspect-[16/9]',
  '21/9': 'aspect-[21/9]',
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '1/1': 'aspect-square',
  '9/16': 'aspect-[9/16]',
}

export function OptimizedImage({
  src,
  alt,
  ratio = '4/3',
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}: OptimizedImageProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-bg-secondary border border-border-dark/20',
        ratioClass[ratio],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  )
}
