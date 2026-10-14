'use client'

import { useState } from 'react'
import { ArrowRight, Check, RotateCcw, Trophy, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TopicPicker } from '@/components/topic-picker'
import { cn } from '@/lib/utils'
import { multipleChoiceQuestions, topics, type MultipleChoiceQuestion, type TopicId } from '@/lib/quiz-data'

type PlayableQuestion = MultipleChoiceQuestion & { shuffled: { text: string; correct: boolean }[] }
type Result = { question: PlayableQuestion; selected: number }

const quizTopics = topics.filter((topic) => multipleChoiceQuestions.some((q) => q.topic === topic.id))
const lengthOptions = [10, 20, 0] as const

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function MultipleChoiceQuiz() {
  const [topic, setTopic] = useState<TopicId | 'alla'>('alla')
  const [length, setLength] = useState<(typeof lengthOptions)[number]>(10)
  const [questions, setQuestions] = useState<PlayableQuestion[] | null>(null)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [results, setResults] = useState<Result[]>([])

  const pool = multipleChoiceQuestions.filter((q) => topic === 'alla' || q.topic === topic)

  function start() {
    const picked = shuffle(pool).slice(0, length === 0 ? pool.length : length)
    setQuestions(
      picked.map((q) => ({
        ...q,
        shuffled: shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer }))),
      })),
    )
    setIndex(0)
    setSelected(null)
    setResults([])
  }

  function choose(optionIndex: number) {
    if (selected !== null || !questions) return
    setSelected(optionIndex)
    setResults((prev) => [...prev, { question: questions[index], selected: optionIndex }])
  }

  function next() {
    setSelected(null)
    setIndex((i) => i + 1)
  }

  if (!questions) {
    return (
      <section aria-labelledby="quiz-setup-heading" className="rounded-2xl border bg-card p-6 md:p-8">
        <h2 id="quiz-setup-heading" className="font-serif text-2xl font-semibold">
          Starta ett quiz
        </h2>
        <p className="mt-1 text-muted-foreground">Välj område och hur många frågor du vill svara på.</p>
        <div className="mt-6 flex flex-col gap-6">
          <TopicPicker
            label="Område"
            value={topic}
            onChange={setTopic}
            options={[
              { id: 'alla', label: 'Alla områden', count: multipleChoiceQuestions.length },
              ...quizTopics.map((t) => ({
                id: t.id,
                label: t.label,
                count: multipleChoiceQuestions.filter((q) => q.topic === t.id).length,
              })),
            ]}
          />
          <fieldset>
            <legend className="mb-3 text-sm font-medium">Antal frågor</legend>
            <div className="flex flex-wrap gap-2">
              {lengthOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={length === option}
                  onClick={() => setLength(option)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    length === option
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'bg-card hover:border-primary/40 hover:bg-secondary',
                  )}
                >
                  {option === 0 ? 'Alla' : option}
                </button>
              ))}
            </div>
          </fieldset>
          <Button onClick={start} className="h-11 w-full px-6 text-base sm:w-auto sm:self-start">
            Starta quiz
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          EU-arbetsbladet består av resonerande frågor – de hittar du under fliken &quot;Skriv egna svar&quot;.
        </p>
      </section>
    )
  }

  const finished = index >= questions.length

  if (finished) {
    const correctCount = results.filter((r) => r.question.shuffled[r.selected].correct).length
    const wrong = results.filter((r) => !r.question.shuffled[r.selected].correct)
    const percent = Math.round((correctCount / questions.length) * 100)
    const message =
      percent === 100 ? 'Fullpott! Du kan det här.' : percent >= 70 ? 'Bra jobbat!' : 'Fortsätt öva – du är på väg!'

    return (
      <section aria-labelledby="quiz-result-heading" className="flex flex-col gap-6">
        <div className="rounded-2xl border bg-card p-6 text-center md:p-10">
          <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-highlight text-highlight-foreground">
            <Trophy className="size-7" aria-hidden="true" />
          </div>
          <h2 id="quiz-result-heading" className="font-serif text-3xl font-semibold">
            {correctCount} av {questions.length} rätt
          </h2>
          <p className="mt-2 text-muted-foreground">{message}</p>
          <div className="mx-auto mt-6 flex flex-col justify-center gap-2 sm:flex-row">
            <Button onClick={start} className="h-11 px-6">
              <RotateCcw data-icon="inline-start" />
              Nytt quiz
            </Button>
            <Button variant="outline" onClick={() => setQuestions(null)} className="h-11 px-6">
              Byt område
            </Button>
          </div>
        </div>

        {wrong.length > 0 && (
          <div>
            <h3 className="mb-3 font-serif text-xl font-semibold">Repetera de här</h3>
            <ul className="flex flex-col gap-3">
              {wrong.map(({ question, selected: s }) => (
                <li key={question.id} className="rounded-xl border bg-card p-5">
                  <p className="font-medium">{question.question}</p>
                  <p className="mt-2 flex items-start gap-2 text-sm text-destructive">
                    <X className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Ditt svar: </span>
                      {question.shuffled[s].text}
                    </span>
                  </p>
                  <p className="mt-1 flex items-start gap-2 text-sm font-medium text-success">
                    <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                      <span className="sr-only">Rätt svar: </span>
                      {question.options[question.answer]}
                    </span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{question.explanation}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    )
  }

  const current = questions[index]
  const answered = selected !== null
  const topicLabel = topics.find((t) => t.id === current.topic)?.label

  return (
    <section aria-labelledby="question-heading" className="rounded-2xl border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4 text-sm">
        <span className="rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">{topicLabel}</span>
        <span className="tabular-nums text-muted-foreground">
          Fråga {index + 1} av {questions.length}
        </span>
      </div>
      <div
        className="mb-6 h-1.5 overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-label="Framsteg"
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-valuenow={index}
      >
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>

      <h2 id="question-heading" className="text-balance font-serif text-2xl font-semibold leading-snug">
        {current.question}
      </h2>

      <ul className="mt-6 flex flex-col gap-3">
        {current.shuffled.map((option, i) => {
          const isSelected = selected === i
          const showCorrect = answered && option.correct
          const showWrong = answered && isSelected && !option.correct
          return (
            <li key={option.text}>
              <button
                type="button"
                onClick={() => choose(i)}
                disabled={answered}
                className={cn(
                  'flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default',
                  !answered && 'hover:border-primary/50 hover:bg-secondary',
                  showCorrect && 'border-success bg-success/10',
                  showWrong && 'border-destructive bg-destructive/10',
                  answered && !showCorrect && !showWrong && 'opacity-60',
                )}
              >
                <span
                  className={cn(
                    'flex size-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold',
                    showCorrect && 'border-success bg-success text-success-foreground',
                    showWrong && 'border-destructive bg-destructive text-primary-foreground',
                  )}
                  aria-hidden="true"
                >
                  {showCorrect ? <Check className="size-4" /> : showWrong ? <X className="size-4" /> : 'ABCD'[i]}
                </span>
                <span className="leading-snug">{option.text}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <div aria-live="polite">
        {answered && (
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div
              className={cn(
                'flex-1 rounded-xl p-4',
                current.shuffled[selected].correct ? 'bg-success/10' : 'bg-destructive/10',
              )}
            >
              <p
                className={cn(
                  'font-semibold',
                  current.shuffled[selected].correct ? 'text-success' : 'text-destructive',
                )}
              >
                {current.shuffled[selected].correct ? 'Rätt!' : 'Inte riktigt.'}
              </p>
              <p className="mt-1 text-sm leading-relaxed">{current.explanation}</p>
            </div>
            <Button onClick={next} className="h-11 px-6" autoFocus>
              {index + 1 === questions.length ? 'Se resultat' : 'Nästa fråga'}
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
