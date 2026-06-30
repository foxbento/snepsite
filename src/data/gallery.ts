export type GalleryCategory = "commission" | "convention"

export type Artist = {
  name: string
  url?: string
}

export const artists = {
  skiaskai:     { name: "SkiaSkai" },
  voidlexus:    { name: "voidlexus" },
  c_poring:       { name: "c_poring" },
  seagull:      { name: "seagull" },
  prua:         { name: "prua" },
  strayserval:  { name: "strayserval" },
  stoworm:      { name: "stoworm" },
  sweetchubbs:  { name: "sweetchubbs" },
  vnnn:         { name: "vnnn" },
  yoonkie:      { name: "yoonkie" },
  neisa:        { name: "neisa" },
} satisfies Record<string, Artist>

export type ArtistId = keyof typeof artists

export type GalleryImage = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  category: GalleryCategory
  nsfw?: boolean
  characters?: string[]
  description?: string
  artistId?: ArtistId
  date: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: "skiaskai",
    src: "/gallery/SkiaSkai.png",
    alt: "Commission by SkiaSkai",
    width: 1600,
    height: 2437,
    category: "commission",
    artistId: "skiaskai",
    characters: ["tesla", "smores"],
    date: "2025-01-01",
  },
  {
    id: "voidlexus-venturer",
    src: "/gallery/Venturer_Sketchbook_smores_B.png",
    alt: "Commission by voidlexus",
    width: 2480,
    height: 3508,
    category: "commission",
    nsfw: true,
    artistId: "voidlexus",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "poring",
    src: "/gallery/c_poring.png",
    alt: "Commission by c_poring",
    width: 2480,
    height: 3508,
    category: "commission",
    artistId: "c_poring",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "seagull",
    src: "/gallery/seagull.png",
    alt: "Commission by seagull",
    width: 2048,
    height: 1431,
    category: "commission",
    artistId: "seagull",
    characters: ["smores", "ekolt"],
    date: "2025-01-01",
  },
  {
    id: "prua",
    src: "/gallery/sfwprua.png",
    alt: "Commission by prua",
    width: 1348,
    height: 2048,
    category: "commission",
    artistId: "prua",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "strayserval-snep",
    src: "/gallery/snep.png",
    alt: "Commission by strayserval",
    width: 2758,
    height: 3090,
    category: "commission",
    artistId: "strayserval",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "strayserval-snepsfw",
    src: "/gallery/snepsfw.png",
    alt: "Commission by strayserval (sfw ver.)",
    width: 2758,
    height: 3090,
    category: "commission",
    artistId: "strayserval",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "solvilex",
    src: "/gallery/solvilex.png",
    alt: "Commission by strayserval",
    width: 3500,
    height: 2876,
    category: "commission",
    nsfw: true,
    artistId: "strayserval",
    characters: ["smores", "solvi"],
    date: "2025-01-01",
  },
  {
    id: "stoworm",
    src: "/gallery/stoworm.png",
    alt: "Commission by stoworm",
    width: 2048,
    height: 2048,
    category: "commission",
    artistId: "stoworm",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "sweetchubbs",
    src: "/gallery/sweetchubbsrewardsketch.png",
    alt: "Reward sketch by sweetchubbs",
    width: 1833,
    height: 3180,
    category: "commission",
    nsfw: true,
    artistId: "sweetchubbs",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "vnnn",
    src: "/gallery/vnnn.png",
    alt: "Commission by vnnn",
    width: 1796,
    height: 2800,
    category: "commission",
    artistId: "vnnn",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "voidlexus-done",
    src: "/gallery/voidlexusdoneupdated.png",
    alt: "Commission by voidlexus",
    width: 520,
    height: 724,
    category: "commission",
    nsfw: true,
    artistId: "voidlexus",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "voidlexus-rue",
    src: "/gallery/voidlexusrue.png",
    alt: "Commission by voidlexus",
    width: 3508,
    height: 2480,
    category: "commission",
    nsfw: true,
    artistId: "voidlexus",
    characters: ["rue", "smores"],
    date: "2025-01-01",
  },
  {
    id: "voidlexus-rue-alt",
    src: "/gallery/voidlexusruecumalt.png",
    alt: "Commission by voidlexus (alt ver.)",
    width: 3508,
    height: 2480,
    category: "commission",
    nsfw: true,
    artistId: "voidlexus",
    characters: ["rue", "smores"],
    date: "2025-01-01",
  },
  {
    id: "yoonkie",
    src: "/gallery/yoonkie.jpg",
    alt: "Commission by yoonkie",
    width: 2388,
    height: 1668,
    category: "commission",
    artistId: "yoonkie",
    characters: ["smores"],
    date: "2025-01-01",
  },
  {
    id: "neisa",
    src: "/gallery/Коммишка398.2.png",
    alt: "Commission by neisa",
    width: 4336,
    height: 4032,
    category: "commission",
    nsfw: true,
    artistId: "neisa",
    characters: ["smores", "nomsi"],
    date: "2025-01-01",
  },
]
