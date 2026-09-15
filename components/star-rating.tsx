import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  rating,
  reviews,
  className,
}: {
  rating: number
  reviews?: number
  className?: string
}) {
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(rating)
          return (
            <Star
              key={i}
              className={cn(
                'h-3.5 w-3.5',
                filled ? 'fill-gold text-gold' : 'fill-transparent text-ink/25',
              )}
            />
          )
        })}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-ink/50">({reviews})</span>
      )}
      <span className="sr-only">{rating} de 5 estrellas</span>
    </div>
  )
}
