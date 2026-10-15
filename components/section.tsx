import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'putih' | 'lembut' | 'hijau'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  /** Warna latar bagian: putih, hijau sangat muda, atau pita hijau tua. */
  tone?: Tone
}

export function Section({ id, children, className, tone = 'putih' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-16 py-20 sm:py-24',
        tone === 'lembut' && 'bg-lembut',
        tone === 'hijau' && 'bg-gradient-to-br from-hijau-tua to-hijau-gelap text-white',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  /** 'gelap' bila diletakkan di atas pita hijau tua. */
  tone?: 'terang' | 'gelap'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'terang',
}: SectionHeaderProps) {
  const center = align === 'center'
  const dark = tone === 'gelap'

  return (
    <header className={cn('flex max-w-2xl flex-col gap-4', center && 'mx-auto items-center text-center')}>
      {/* Label kecil dengan garis emas di kiri-kanannya. */}
      <span
        className={cn(
          'flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]',
          dark ? 'text-emas-muda' : 'text-emas',
        )}
      >
        <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
        {eyebrow}
        {center && <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />}
      </span>
      <h2 className="text-3xl font-semibold sm:text-[2.75rem]">{title}</h2>
      {description && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            center && 'text-center sm:text-center',
            dark ? 'text-white/80' : 'text-pudar',
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}
