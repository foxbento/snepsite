"use client"

import { Eye, EyeOff } from "lucide-react"
import type { GalleryCategory } from "@/data/gallery"

export type SortOrder = "newest" | "oldest"

interface Props {
  activeCategory: GalleryCategory | "all"
  sortOrder: SortOrder
  showNsfw: boolean
  onCategoryChange: (cat: GalleryCategory | "all") => void
  onSortChange: (sort: SortOrder) => void
  onNsfwToggle: () => void
}

const categories: { value: GalleryCategory | "all"; label: string }[] = [
  { value: "all", label: "all" },
  { value: "commission", label: "commissioned art" },
  { value: "convention", label: "convention photos" },
]

export default function FilterBar({ activeCategory, sortOrder, showNsfw, onCategoryChange, onSortChange, onNsfwToggle }: Props) {
  return (
    <div className="flex flex-wrap gap-3 items-center justify-between mb-6">
      <div className="flex gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={`px-3 py-1 rounded-full text-sm font-mono border transition-colors ${
              activeCategory === cat.value
                ? "bg-himalaya-deep text-white border-himalaya-deep"
                : "bg-white text-himalaya-shadow border-himalaya-mist hover:bg-himalaya-mist"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onNsfwToggle}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-mono border transition-colors ${
            showNsfw
              ? "bg-himalaya-peak text-white border-himalaya-peak"
              : "bg-white text-himalaya-shadow border-himalaya-mist hover:bg-himalaya-mist"
          }`}
          title={showNsfw ? "hide 18+ content" : "show 18+ content"}
        >
          {showNsfw ? <Eye size={13} /> : <EyeOff size={13} />}
          18+
        </button>
        <button
          onClick={() => onSortChange(sortOrder === "newest" ? "oldest" : "newest")}
          className="px-3 py-1 text-sm text-himalaya-shadow font-mono hover:text-himalaya-peak transition-colors"
        >
          ↕ {sortOrder}
        </button>
      </div>
    </div>
  )
}
