"use client"

import Image from "next/image"
import { artists, type GalleryImage } from "@/data/gallery"

interface Props {
  image: GalleryImage
  onClick: () => void
}

export default function GalleryCard({ image, onClick }: Props) {
  const artist = image.artistId ? artists[image.artistId] : undefined

  return (
    <div
      className="group relative cursor-pointer rounded-lg overflow-hidden border border-himalaya-mist bg-white shadow-sm hover:shadow-md transition-all"
      onClick={onClick}
    >
      <div className="relative w-full" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-himalaya-deep/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
          {image.characters && image.characters.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-1">
              {image.characters.map(c => (
                <span key={c} className="px-1.5 py-0.5 bg-himalaya-accent/80 text-himalaya-deep text-xs font-mono rounded-full">
                  {c}
                </span>
              ))}
            </div>
          )}
          {artist && (
            <p className="text-himalaya-accent text-xs">by {artist.name}</p>
          )}
        </div>
      </div>
    </div>
  )
}
