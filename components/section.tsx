import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  tone?: 'plain' | 'soft'
}

export function Section({ id, children, className, tone = 'plain' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 py-16 sm:py-20 lg:py-24',
        tone === 'soft' && 'bg-muted',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex max-w-2xl flex-col gap-3',
        align === 'center' && 'mx-auto items-center text-center',
      )}
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'text-center',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
