'use client'

import { useState } from 'react'
import { BookOpen, ListChecks, PenLine } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MultipleChoiceQuiz } from '@/components/multiple-choice-quiz'
import { OpenQuestions } from '@/components/open-questions'
import { GlossaryCards } from '@/components/glossary-cards'

const tabs = [
  { id: 'quiz', label: 'Quiz', icon: ListChecks },
  { id: 'skriv', label: 'Skriv egna svar', icon: PenLine },
  { id: 'begrepp', label: 'Begreppskort', icon: BookOpen },
] as const

type TabId = (typeof tabs)[number]['id']

export function StudyApp() {
  const [activeTab, setActiveTab] = useState<TabId>('quiz')
  const [answers, setAnswers] = useState<Record<string, string>>({})

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 pb-16 pt-8 md:pt-12">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Samhällskunskap</p>
        <h1 className="text-balance font-serif text-4xl font-semibold leading-tight md:text-5xl">
          Plugga inför provet
        </h1>
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Demokrati, ideologier, grundlagar, begrepp och EU-samarbete – från ditt instuderingshäfte. Testa dig med quiz,
          skriv egna svar på frågorna och jämför med ett exempelsvar.
        </p>
      </header>

      <nav aria-label="Övningsläge" className="mb-6">
        <div role="tablist" className="flex gap-1 overflow-x-auto rounded-xl border bg-card p-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              id={`tab-${id}`}
              aria-selected={activeTab === id}
              aria-controls={`panel-${id}`}
              onClick={() => setActiveTab(id)}
              className={cn(
                'flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                activeTab === id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="flex-1">
        {activeTab === 'quiz' && <MultipleChoiceQuiz />}
        {activeTab === 'skriv' && (
          <OpenQuestions
            answers={answers}
            onAnswerChange={(id, value) => setAnswers((prev) => ({ ...prev, [id]: value }))}
          />
        )}
        {activeTab === 'begrepp' && <GlossaryCards />}
      </main>
    </div>
  )
}
