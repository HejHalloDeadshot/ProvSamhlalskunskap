'use client'

import { cn } from '@/lib/utils'
import type { TopicId } from '@/lib/quiz-data'

type TopicOption = { id: TopicId | 'alla'; label: string; count: number }

export function TopicPicker({
  options,
  value,
  onChange,
  label,
}: {
  options: TopicOption[]
  value: TopicId | 'alla'
  onChange: (value: TopicId | 'alla') => void
  label: string
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.id === value
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                selected
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:border-primary/40 hover:bg-secondary',
              )}
            >
              {option.label}
              <span
                className={cn(
                  'rounded-full px-1.5 text-xs tabular-nums',
                  selected ? 'bg-primary-foreground/20' : 'bg-muted text-muted-foreground',
                )}
              >
                {option.count}
              </span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
