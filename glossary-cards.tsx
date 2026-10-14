'use client'

import { useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { glossary } from '@/lib/quiz-data'

export function GlossaryCards() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set())

  function toggle(term: string) {
    setFlipped((prev) => {
      const next = new Set(prev)
      if (next.has(term)) next.delete(term)
      else next.add(term)
      return next
    })
  }

  return (
    <section aria-labelledby="glossary-heading" className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
        <div>
          <h2 id="glossary-heading" className="font-serif text-2xl font-semibold">
            Begreppskort
          </h2>
          <p className="mt-1 leading-relaxed text-muted-foreground">
            Försök förklara ordet själv – vänd sedan kortet och kolla.
          </p>
        </div>
        <Button
          variant="outline"
          className="h-10 px-4"
          disabled={flipped.size === 0}
          onClick={() => setFlipped(new Set())}
        >
          <RotateCcw data-icon="inline-start" />
          Vänd tillbaka alla
        </Button>
      </div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {glossary.map(({ term, definition }) => {
          const isFlipped = flipped.has(term)
          return (
            <li key={term}>
              <button
                type="button"
                onClick={() => toggle(term)}
                aria-pressed={isFlipped}
                aria-label={isFlipped ? `${term}: ${definition}` : `${term} – vänd kortet`}
                className={cn(
                  'flex h-36 w-full flex-col justify-between rounded-2xl border-2 p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  isFlipped
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'bg-card hover:border-primary/40 hover:bg-secondary',
                )}
              >
                {isFlipped ? (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-80">{term}</span>
                    <span className="text-pretty leading-snug">{definition}</span>
                  </>
                ) : (
                  <>
                    <span className="font-serif text-xl font-semibold">{term}</span>
                    <span className="text-xs text-muted-foreground">Klicka för att vända</span>
                  </>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
