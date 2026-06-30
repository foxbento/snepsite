"use client"

import { useState, useMemo } from "react"
import { galleryImages, type GalleryCategory } from "@/data/gallery"
import FilterBar, { type SortOrder } from "@/components/gallery/FilterBar"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import Lightbox from "@/components/gallery/Lightbox"
import { useNsfwToggle } from "@/hooks/useNsfwToggle"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all")
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { showNsfw, undecided, accept, decline, toggle: toggleNsfw } = useNsfwToggle()

  const filtered = useMemo(() => {
    let items =
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory)

    if (!showNsfw) items = items.filter(img => !img.nsfw)

    return [...items].sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime()
      return sortOrder === "newest" ? diff : -diff
    })
  }, [activeCategory, sortOrder, showNsfw])

  if (undecided) {
    return (
      <div className="relative min-h-[80vh] pt-6 pb-10 px-4 sm:px-6 overflow-hidden">
        {/* blurred gallery behind the gate */}
        <div className="absolute inset-0 blur-sm opacity-60 pointer-events-none px-4 sm:px-6 pt-6">
          <GalleryGrid images={filtered} onImageClick={() => {}} />
        </div>

        {/* gate */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-himalaya-mist text-center">
            <h1 className="text-3xl font-mono font-medium mb-3">&gt; art.</h1>
            <p className="text-himalaya-shadow mb-1">this gallery contains 18+ content.</p>
            <p className="text-himalaya-shadow mb-8">are you 18 or older?</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={accept}
                className="px-6 py-2 bg-himalaya-deep text-white font-mono rounded hover:bg-himalaya-peak transition-colors"
              >
                yes
              </button>
              <button
                onClick={decline}
                className="px-6 py-2 border border-himalaya-mist text-himalaya-shadow font-mono rounded hover:bg-himalaya-mist transition-colors"
              >
                no
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-6 pb-10 px-4 sm:px-6">
      <header className="mb-6">
        <h1 className="text-3xl font-mono font-medium mb-2">&gt; art.</h1>
        <p className="text-himalaya-shadow">commissions &amp; con photos</p>
      </header>

      <FilterBar
        activeCategory={activeCategory}
        sortOrder={sortOrder}
        showNsfw={showNsfw}
        onCategoryChange={setActiveCategory}
        onSortChange={setSortOrder}
        onNsfwToggle={toggleNsfw}
      />

      <GalleryGrid images={filtered} onImageClick={setLightboxIndex} />

      {lightboxIndex !== null && (
        <Lightbox
          image={filtered[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => i! - 1)}
          onNext={() => setLightboxIndex(i => i! + 1)}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filtered.length - 1}
        />
      )}
    </div>
  )
}
