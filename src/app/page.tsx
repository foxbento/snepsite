import Link from "next/link";
import { Star } from "lucide-react";
import { format } from "date-fns";
import GalleryPreview from "@/components/gallery/GalleryPreview";
import { galleryImages } from "@/data/gallery";
import { getAllDiaryPosts } from "@/lib/diary";
import SpotifyNowPlaying from "@/components/layout/SpotifyNowPlaying";

// Current year conventions
const currentYearConventions = [
  {
    name: "MYFur",
    date: "May 2, 2026",
    location: "Subang, Malaysia",
    confirmed: true,
  },
  {
    name: "IWAG",
    date: "July 4-5, 2026",
    location: "Jakarta, Indonesia",
    confirmed: true,
  },
  {
    name: "EF",
    date: "August 19-23, 2026",
    location: "Hamburg, Germany",
    confirmed: true,
  },
];

const pastConventions = {
  "2025": ["ANE", "FE", "FWA", "WAFF", "FURUM"],
  "2024": ["LIFC", "MFF"],
};

// Projects for the digital garden section
const projects = [
  { name: "personal site", progress: 65 },
  { name: "pc part collecting", progress: 35 },
  { name: "practicing drawing", progress: 5 },
];

export default function Home() {
  const [latestPost] = getAllDiaryPosts();

  return (
    <div className="pt-6 pb-10 px-4 sm:px-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-mono font-medium mb-2">
          {" "}
          &gt; smores&apos;s directory
        </h1>
        <p className="text-himalaya-shadow">
          links, projects, other stuff you should know about me
        </p>
      </header>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:col-span-2 transition-all hover:shadow-md border border-himalaya-mist">
          <h2 className="text-xl font-mono font-medium mb-4">latest post.</h2>
          <h3 className="text-lg mb-2">{latestPost.title}</h3>
          <p className="text-himalaya-shadow mb-4">{latestPost.excerpt}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-himalaya-shadow">
              {format(new Date(latestPost.date), "MMM d, yyyy")}
            </span>
            <Link
              href="/diary"
              className="text-himalaya-deep hover:text-himalaya-accent transition-colors"
            >
              Read more →
            </Link>
          </div>
        </div>

        {/* Currently Listening */}
        <SpotifyNowPlaying />

        {/* Container to hold both cards in a single column */}
        <div className="flex flex-col space-y-6 col-span-1">
          {/* Convention listings - taller card */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 transition-all hover:shadow-md border border-himalaya-mist">
            <h2 className="text-xl font-mono font-medium mb-3">conventions.</h2>

            {/* Current year plans - more compact */}
            <h3 className="text-md mb-2"> &gt; current cons</h3>
            <div className="space-y-2 mb-4">
              {currentYearConventions.map((con, index) => (
                <blockquote
                  key={index}
                  className={`border-l-4 ${con.confirmed ? "border-himalaya-accent" : "border-himalaya-stone"} pl-3 mb-1`}
                >
                  <div className="font-medium text-sm">{con.name}</div>
                  <div className="flex flex-wrap text-xs text-himalaya-shadow gap-x-2">
                    <span>{con.date}</span>
                    <span>•</span>
                    <span>{con.location}</span>
                    <span>•</span>
                    <span
                      className={
                        con.confirmed ? "text-green-600" : "text-amber-600"
                      }
                    >
                      {con.confirmed ? "Confirmed" : "Tentative"}
                    </span>
                  </div>
                </blockquote>
              ))}
            </div>

            {/* Past conventions - more compact */}
            <h3 className="text-md mb-2"> &gt; past cons </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {Object.entries(pastConventions).map(([year, cons]) => (
                <div key={year} className="mb-2">
                  <h4 className="text-sm font-medium mb-1">{year}</h4>
                  <ul className="font-medium list-disc list-inside text-xs text-himalaya-shadow">
                    {cons.map((con, idx) => (
                      <li key={idx}>{con}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Garden - shorter card */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 transition-all hover:shadow-md border border-himalaya-mist flex-shrink">
            <h2 className="text-xl font-mono font-medium mb-2">
              digital garden.
            </h2>
            <p className="text-himalaya-shadow mb-3 text-sm">
              projects i&apos;m currently growing:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((project, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">{project.name}</span>
                    <span className="text-xs text-himalaya-shadow">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-himalaya-mist rounded-full overflow-hidden">
                    <div
                      className="h-full bg-himalaya-accent rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  {/* Star decorations */}
                  <div className="absolute top-1 -left-3">
                    {project.progress > 50 && (
                      <Star size={10} className="text-himalaya-accent" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Art Gallery Teaser */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist">
          <h2 className="text-xl font-mono font-medium mb-4">art.</h2>
          <GalleryPreview />
          <div className="flex justify-between items-center">
            <span className="text-sm text-himalaya-shadow">
              {galleryImages.length} images
            </span>
            <Link
              href="/gallery"
              className="text-himalaya-deep hover:text-himalaya-accent transition-colors"
            >
              View Gallery →
            </Link>
          </div>
        </div>

        {/* NEW DIV - Added to the right of Art */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist">
          <h2 className="text-xl font-mono font-medium mb-4">reading list.</h2>
          <div className="space-y-3">
            <div>
              <p className="font-medium">currently reading</p>
              <p className="text-sm text-himalaya-shadow">
                A Philosophy of Software Design
              </p>
            </div>
            <div>
              <p className="font-medium">up next</p>
              <ul className="text-sm text-himalaya-shadow list-disc list-inside">
                <li>Designing Data-Intensive Applications</li>
                <li>The Pragmatic Programmer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tag Cloud */}
      <div className="mt-10 mb-6">
        <h2 className="text-xl font-mono font-medium mb-4">explore topics</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Art",
            "Code",
            "Travel",
            "Tech",
            "Design",
            "Music",
            "Boba reviews",
          ].map((tag, index) => (
            <Link
              key={index}
              href={`/tags/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-white rounded-full text-sm text-himalaya-shadow border border-himalaya-mist hover:bg-himalaya-mist transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
