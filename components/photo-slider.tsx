'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Photo, type PhotoData } from '@/components/photo'

type PhotoSliderProps = {
  photos: PhotoData[]
  /** Bentuk tiap slide. Default: satu foto memenuhi lebar wadah. */
  slideClassName?: string
  sizes?: string
  priority?: boolean
  label?: string
}

/**
 * Deretan foto yang bisa digeser ke kanan dan kiri — lewat drag mouse,
 * usapan jari, tombol panah, titik indikator, atau tombol panah keyboard.
 *
 * Bila hanya ada satu foto, tombol dan titiknya otomatis tidak muncul.
 */
export function PhotoSlider({
  photos,
  slideClassName = 'aspect-[4/3] w-full',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  label = 'Galeri foto',
}: PhotoSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ x: number; scroll: number } | null>(null)
  const [active, setActive] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const multiple = photos.length > 1

  const slidesOf = (el: HTMLElement) => Array.from(el.children) as HTMLElement[]

  const nearestIndex = useCallback(() => {
    const el = trackRef.current
    if (!el) return 0
    const edge = el.getBoundingClientRect().left
    let best = 0
    let bestDist = Number.POSITIVE_INFINITY
    slidesOf(el).forEach((slide, i) => {
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
    if (!el || !multiple) return
    sync()
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync, multiple])

  const goTo = useCallback((index: number) => {
    const el = trackRef.current
    if (!el) return
    const slides = slidesOf(el)
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
    if (!el || !multiple || e.pointerType !== 'mouse') return
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

  // Satu foto saja: tampilkan biasa, tanpa perangkat geser.
  if (!multiple) {
    const only = photos[0]
    if (!only) return null
    return <Photo {...only} className={slideClassName} sizes={sizes} priority={priority} />
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <div
          ref={trackRef}
          role="group"
          aria-roledescription="galeri geser"
          aria-label={label}
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
          {photos.map((photo, i) => (
            <Photo
              key={i}
              {...photo}
              className={`shrink-0 snap-start ${slideClassName}`}
              sizes={sizes}
              priority={priority && i === 0}
            />
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
        {photos.map((_, i) => (
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
