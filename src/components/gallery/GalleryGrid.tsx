import type { GalleryImage } from "@/data/gallery"
import GalleryCard from "./GalleryCard"

interface Props {
  images: GalleryImage[]
  onImageClick: (index: number) => void
}

export default function GalleryGrid({ images, onImageClick }: Props) {
  if (images.length === 0) {
    return (
      <div className="text-center py-20 text-himalaya-shadow font-mono">
        nothing here yet.
      </div>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {images.map((image, index) => (
        <div key={image.id} className="break-inside-avoid mb-4">
          <GalleryCard image={image} onClick={() => onImageClick(index)} />
        </div>
      ))}
    </div>
  )
}
