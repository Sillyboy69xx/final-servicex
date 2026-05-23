import { cn } from '@/lib/utils'

interface PlaceholderImageProps {
  label: string
  ratio?: '16/9' | '21/9' | '4/3' | '3/4' | '1/1' | '9/16'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function PlaceholderImage({
  label,
  ratio = '4/3',
  className,
  size = 'md',
}: PlaceholderImageProps) {
  const ratioClass = {
    '16/9': 'aspect-[16/9]',
    '21/9': 'aspect-[21/9]',
    '4/3': 'aspect-[4/3]',
    '3/4': 'aspect-[3/4]',
    '1/1': 'aspect-square',
    '9/16': 'aspect-[9/16]',
  }[ratio]

  const textSize = {
    sm: 'text-base',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-4xl',
  }[size]

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-bg-secondary border border-border-dark/20',
        ratioClass,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(26,26,26,0.06),transparent_60%)]" />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <span className={cn('font-accent text-text-muted text-center', textSize)}>
          {label}
        </span>
      </div>
      <div className="absolute top-3 left-3 w-6 h-px bg-border-dark/40" />
      <div className="absolute top-3 left-3 w-px h-6 bg-border-dark/40" />
      <div className="absolute bottom-3 right-3 w-6 h-px bg-border-dark/40" />
      <div className="absolute bottom-3 right-3 w-px h-6 bg-border-dark/40" />
    </div>
  )
}
