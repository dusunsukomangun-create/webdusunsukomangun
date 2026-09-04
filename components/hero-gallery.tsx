'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

const SLIDES = [
  {
    src: '/images/hero-sawah.png',
    alt: 'Hamparan sawah hijau Dusun Sukomangun dengan latar pegunungan',
  },
  {
    src: '/images/dusun-jalan.png',
    alt: 'Jalan utama Dusun Sukomangun yang telah beraspal',
  },
  {
    src: '/images/kesenian.png',
    alt: 'Pertunjukan kesenian tradisional warga Dusun Sukomangun',
  },
  {
    src: '/images/dusun-jalan.png',
    alt: 'Jalan utama Dusun Sukomangun yang telah beraspal',
  },
]

export function HeroGallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ x: number; scroll: number } | null>(null)
  const [active, setActive] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const nearestIndex = useCallback(() => {
    const el = trackRef.current
    if (!el) return 0
    const edge = el.getBoundingClientRect().left
    let best = 0
    let bestDist = Number.POSITIVE_INFINITY
    el.querySelectorAll<HTMLElement>('[data-slide]').forEach((slide, i) => {
      const dist = Math.abs(slide.getBoundingClientRect().left - edge)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    return best
  }, [])

  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
    setActive(nearestIndex())
  }, [nearestIndex])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const goTo = useCallback((index: number) => {
    const el = trackRef.current
    if (!el) return
    const slides = el.querySelectorAll<HTMLElement>('[data-slide]')
    const target = slides[Math.max(0, Math.min(index, slides.length - 1))]
    if (!target) return
    el.scrollBy({
      left: target.getBoundingClientRect().left - el.getBoundingClientRect().left,
      behavior: 'smooth',
    })
  }, [])

  const step = useCallback((dir: -1 | 1) => goTo(nearestIndex() + dir), [goTo, nearestIndex])

  // Geser dengan mouse. Sentuhan tetap memakai scroll bawaan browser.
  function startDrag(e: React.PointerEvent<HTMLDivElement>) {
    const el = trackRef.current
    if (!el || e.pointerType !== 'mouse') return
    dragRef.current = { x: e.clientX, scroll: el.scrollLeft }
    el.style.scrollSnapType = 'none'
    el.setPointerCapture(e.pointerId)
  }

  function moveDrag(e: React.PointerEvent<HTMLDivElement>) {
    const el = trackRef.current
    const drag = dragRef.current
    if (!el || !drag) return
    el.scrollLeft = drag.scroll - (e.clientX - drag.x)
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    const el = trackRef.current
    if (!el || !dragRef.current) return
    dragRef.current = null
    el.style.scrollSnapType = ''
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId)
    goTo(nearestIndex())
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div
          ref={trackRef}
          role="group"
          aria-roledescription="galeri geser"
          aria-label="Galeri foto Dusun Sukomangun"
          tabIndex={0}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              e.preventDefault()
              step(1)
            } else if (e.key === 'ArrowLeft') {
              e.preventDefault()
              step(-1)
            }
          }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain rounded-3xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab select-none active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              data-slide
              className="relative aspect-[4/3] w-[86%] shrink-0 snap-start overflow-hidden rounded-3xl shadow-lg shadow-primary/10 ring-1 ring-border sm:aspect-[3/2] sm:w-[62%] lg:w-[46%]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                draggable={false}
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 62vw, 86vw"
                className="pointer-events-none object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => step(-1)}
          disabled={!canPrev}
          aria-label="Foto sebelumnya"
          className="absolute left-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur transition-all hover:bg-card disabled:pointer-events-none disabled:opacity-0 sm:flex"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={!canNext}
          aria-label="Foto berikutnya"
          className="absolute right-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur transition-all hover:bg-card disabled:pointer-events-none disabled:opacity-0 sm:flex"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ke foto ${i + 1}`}
            aria-current={i === active}
            className={
              i === active
                ? 'h-2 w-6 rounded-full bg-primary transition-all'
                : 'h-2 w-2 rounded-full bg-border transition-all hover:bg-muted-foreground/50'
            }
          />
        ))}
      </div>
    </div>
  )
}
