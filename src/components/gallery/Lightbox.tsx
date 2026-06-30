"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { artists, type GalleryImage } from "@/data/gallery"

interface Props {
  image: GalleryImage
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}

export default function Lightbox({ image, onClose, onPrev, onNext, hasPrev, hasNext }: Props) {
  const artist = image.artistId ? artists[image.artistId] : undefined
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => { ref.current?.showModal() }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && hasPrev) onPrev()
      if (e.key === "ArrowRight" && hasNext) onNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [hasPrev, hasNext, onPrev, onNext])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={e => e.target === ref.current && ref.current?.close()}
      className="m-auto p-0 w-[95vw] h-[92vh] rounded-lg overflow-hidden shadow-xl backdrop:bg-himalaya-peak/90"
    >
      <div className="flex flex-col md:flex-row w-full h-full bg-white">
        {/* Image */}
        <div className="relative flex-1 min-h-[55vh] md:min-h-0 bg-himalaya-ice">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 95vw, 75vw"
          />
        </div>

        {/* Info panel */}
        <div className="md:w-64 shrink-0 p-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-himalaya-mist">
          <div>
            <button
              onClick={() => ref.current?.close()}
              className="mb-4 text-himalaya-shadow hover:text-himalaya-peak transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {image.characters && image.characters.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {image.characters.map(c => (
                  <span key={c} className="px-2 py-0.5 bg-himalaya-accent text-himalaya-deep text-xs font-mono rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            )}
            {image.description && (
              <p className="text-xs text-himalaya-shadow mb-3">{image.description}</p>
            )}
            <div className="h-px bg-himalaya-mist mb-3" />

            {artist && (
              <div className="mb-3">
                <p className="text-xs text-himalaya-shadow mb-1">art by</p>
                {artist.url ? (
                  <a
                    href={artist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-himalaya-deep hover:text-himalaya-accent transition-colors flex items-center gap-1"
                  >
                    {artist.name}
                    <ExternalLink size={11} />
                  </a>
                ) : (
                  <p className="text-sm text-himalaya-deep">{artist.name}</p>
                )}
              </div>
            )}

            <p className="text-xs text-himalaya-shadow">
              {new Date(image.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
            <p className="text-xs text-himalaya-stone font-mono mt-1">
              {image.category === "commission" ? "commissioned art" : "convention photo"}
            </p>
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex-1 py-2 rounded border border-himalaya-mist text-himalaya-shadow hover:bg-himalaya-ice transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-mono text-sm flex items-center justify-center gap-1"
            >
              <ChevronLeft size={14} /> prev
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="flex-1 py-2 rounded border border-himalaya-mist text-himalaya-shadow hover:bg-himalaya-ice transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-mono text-sm flex items-center justify-center gap-1"
            >
              next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
