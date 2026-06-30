"use client"

import Image from "next/image"
import { galleryImages } from "@/data/gallery"
import { useNsfwToggle } from "@/hooks/useNsfwToggle"

const preview = galleryImages.slice(0, 4)
const hasNsfw = preview.some(img => img.nsfw)

export default function GalleryPreview() {
  const { showNsfw, undecided, accept, decline } = useNsfwToggle()

  return (
    <div className="relative mb-4">
      <div className="grid grid-cols-2 gap-1.5 rounded-lg overflow-hidden">
        {preview.map(img => (
          <div key={img.id} className="relative aspect-square bg-himalaya-ice overflow-hidden rounded">
            <Image
              src={img.src}
              alt={img.nsfw ? "18+ image" : img.alt}
              fill
              sizes="150px"
              className={`object-cover ${img.nsfw && !showNsfw ? "blur-md scale-110" : ""}`}
            />
          </div>
        ))}
      </div>

      {hasNsfw && undecided && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-himalaya-peak/85 rounded-lg p-4 text-center">
          <p className="text-white font-mono text-sm mb-1">this gallery contains 18+ content.</p>
          <p className="text-himalaya-accent text-xs mb-4">are you 18 or older?</p>
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="px-4 py-1.5 bg-white text-himalaya-peak font-mono text-sm rounded hover:bg-himalaya-ice transition-colors"
            >
              yes
            </button>
            <button
              onClick={decline}
              className="px-4 py-1.5 border border-white/30 text-white/80 font-mono text-sm rounded hover:bg-white/10 transition-colors"
            >
              no
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
