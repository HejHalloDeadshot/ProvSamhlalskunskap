'use client'

import { useState } from 'react'
import { Check, Download, Lightbulb, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TopicPicker } from '@/components/topic-picker'
import { cn } from '@/lib/utils'
import { openQuestions, topics, type OpenQuestion, type TopicId } from '@/lib/quiz-data'

type Props = {
  answers: Record<string, string>
  onAnswerChange: (id: string, value: string) => void
}

function matchKeywords(question: OpenQuestion, answer: string) {
  const text = answer.toLowerCase()
  return question.keywords.map((keyword) => ({
    ...keyword,
    found: keyword.matches.some((m) => text.includes(m.toLowerCase())),
  }))
}

function downloadAnswers(answers: Record<string, string>) {
  const lines: string[] = ['Mina svar – Samhällskunskap', '']
  for (const topic of topics) {
    const questions = openQuestions.filter((q) => q.topic === topic.id && answers[q.id]?.trim())
    if (questions.length === 0) continue
    lines.push(`== ${topic.label} ==`, '')
    for (const q of questions) {
      lines.push(q.question, answers[q.id].trim(), '')
    }
  }
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'mina-svar-samhallskunskap.txt'
  link.click()
  URL.revokeObjectURL(url)
}

export function OpenQuestions({ answers, onAnswerChange }: Props) {
  const [topic, setTopic] = useState<TopicId | 'alla'>('alla')
  const visible = openQuestions.filter((q) => topic === 'alla' || q.topic === topic)
  const answeredCount = openQuestions.filter((q) => answers[q.id]?.trim()).length

  return (
    <section aria-labelledby="open-heading" className="flex flex-col gap-6">
      <div className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 id="open-heading" className="font-serif text-2xl font-semibold">
              Skriv egna svar
            </h2>
            <p className="mt-1 max-w-xl leading-relaxed text-muted-foreground">
              Svara med egna ord och försök utveckla dina svar. Klicka sedan på &quot;Kolla mitt svar&quot; för att se
              vilka nyckelord du fått med och jämföra med ett exempelsvar.
            </p>
          </div>
          <Button
            variant="outline"
            className="h-10 px-4"
            disabled={answeredCount === 0}
            onClick={() => downloadAnswers(answers)}
          >
            <Download data-icon="inline-start" />
            Spara mina svar
          </Button>
        </div>
        <p className="mt-4 text-sm font-medium tabular-nums">
          {answeredCount} av {openQuestions.length} frågor besvarade
        </p>
        <div className="mt-6">
          <TopicPicker
            label="Område"
            value={topic}
            onChange={setTopic}
            options={[
              { id: 'alla', label: 'Alla områden', count: openQuestions.length },
              ...topics
                .map((t) => ({ id: t.id, label: t.label, count: openQuestions.filter((q) => q.topic === t.id).length }))
                .filter((t) => t.count > 0),
            ]}
          />
        </div>
      </div>

      <ol className="flex flex-col gap-4">
        {visible.map((question, i) => (
          <li key={question.id}>
            <OpenQuestionCard
              number={i + 1}
              question={question}
              answer={answers[question.id] ?? ''}
              onChange={(value) => onAnswerChange(question.id, value)}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}

function OpenQuestionCard({
  number,
  question,
  answer,
  onChange,
}: {
  number: number
  question: OpenQuestion
  answer: string
  onChange: (value: string) => void
}) {
  const [revealed, setRevealed] = useState(false)
  const keywords = matchKeywords(question, answer)
  const foundCount = keywords.filter((k) => k.found).length
  const topicLabel = topics.find((t) => t.id === question.topic)?.label
  const textareaId = `answer-${question.id}`
  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0

  return (
    <article className="rounded-2xl border bg-card p-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground tabular-nums">
          {number}
        </span>
        {topicLabel}
      </div>
      <label htmlFor={textareaId} className="block text-pretty font-serif text-lg font-semibold leading-snug">
        {question.question}
      </label>
      {question.hint && (
        <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
          {question.hint}
        </p>
      )}
      <textarea
        id={textareaId}
        value={answer}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Skriv ditt svar här..."
        className="mt-4 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 leading-relaxed placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
      />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs tabular-nums text-muted-foreground">{wordCount} ord</span>
        <Button
          variant={revealed ? 'outline' : 'secondary'}
          className="h-10 px-4"
          onClick={() => setRevealed((r) => !r)}
          aria-expanded={revealed}
          aria-controls={`feedback-${question.id}`}
        >
          <Sparkles data-icon="inline-start" />
          {revealed ? 'Dölj' : 'Kolla mitt svar'}
        </Button>
      </div>

      {revealed && (
        <div id={`feedback-${question.id}`} className="mt-5 flex flex-col gap-4 border-t pt-5">
          <div>
            <p className="text-sm font-semibold">
              Nyckelord du fått med:{' '}
              <span className="tabular-nums text-primary">
                {foundCount} av {keywords.length}
              </span>
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {keywords.map((keyword) => (
                <li
                  key={keyword.label}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm',
                    keyword.found
                      ? 'border-success/30 bg-success/10 font-medium text-success'
                      : 'border-dashed text-muted-foreground',
                  )}
                >
                  {keyword.found && <Check className="size-3.5" aria-hidden="true" />}
                  <span className="sr-only">{keyword.found ? 'Med: ' : 'Saknas: '}</span>
                  {keyword.label}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Nyckelorden är en hjälp – ett bra svar kan använda andra ord. Det viktigaste är att du förklarar varför.
            </p>
          </div>
          <div className="rounded-xl bg-highlight/30 p-4">
            <p className="text-sm font-semibold text-highlight-foreground">Exempelsvar</p>
            <p className="mt-1 text-pretty leading-relaxed">{question.exampleAnswer}</p>
          </div>
        </div>
      )}
    </article>
  )
}
