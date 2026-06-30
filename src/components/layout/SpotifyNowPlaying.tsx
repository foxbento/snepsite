import Image from "next/image"
import Link from "next/link"
import { getNowPlaying } from "@/lib/spotify"

export default async function SpotifyNowPlaying() {
  const track = await getNowPlaying()

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist">
      <h2 className="text-xl font-mono font-medium mb-4">currently listening.</h2>
      <div className="flex flex-col md:flex-row md:items-start items-center gap-6">

        <div className="w-32 h-32 md:w-40 md:h-40 relative shrink-0">
          {track ? (
            <Image
              src={track.albumImageUrl}
              alt={track.album}
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="rounded-md shadow-sm object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-himalaya-stone rounded-lg flex items-center justify-center">
              <span className="text-white opacity-70 text-sm">not playing.</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center md:items-start md:justify-center md:h-40">
          {track ? (
            <>
              <p className="text-xs font-mono text-himalaya-stone mb-1 mt-4 md:mt-0">
                {track.isPlaying ? "now playing" : "last played"}
              </p>
              <h3 className="text-lg text-center md:text-left font-medium">{track.title}</h3>
              <p className="text-himalaya-shadow text-center md:text-left">{track.artist}</p>
              <p className="text-xs text-himalaya-shadow mt-1 mb-3 md:mb-4">{track.album}</p>
              <Link
                href={track.songUrl}
                target="_blank"
                className="text-himalaya-deep hover:text-himalaya-accent transition-colors text-sm inline-flex items-center gap-1 px-3 py-1.5 border border-himalaya-mist rounded-full hover:bg-himalaya-mist/30"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </Link>
            </>
          ) : (
            <>
              <p className="text-himalaya-shadow text-center md:text-left mt-4 md:mt-0">nothing playing on spotify</p>
              <p className="text-sm text-himalaya-shadow mt-1">check back later!</p>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
