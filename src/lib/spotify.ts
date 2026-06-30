const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString('base64')

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1'

export type SpotifyTrack = {
  isPlaying: boolean
  isRecent: boolean
  title: string
  artist: string
  album: string
  albumImageUrl: string
  songUrl: string
}

async function getAccessToken(): Promise<string> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
    cache: 'no-store',
  })
  const data = await res.json()
  return data.access_token
}

export async function getNowPlaying(): Promise<SpotifyTrack | null> {
  const token = await getAccessToken()
  const headers = { Authorization: `Bearer ${token}` }

  const nowRes = await fetch(NOW_PLAYING_ENDPOINT, { headers, cache: 'no-store' })

  if (nowRes.status === 200) {
    const json = await nowRes.json()
    const item = json.item
    return {
      isPlaying: true,
      isRecent: false,
      title: item.name,
      artist: item.artists.map((a: { name: string }) => a.name).join(', '),
      album: item.album.name,
      albumImageUrl: item.album.images[0].url,
      songUrl: item.external_urls.spotify,
    }
  }

  const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, { headers, cache: 'no-store' })

  if (recentRes.status === 200) {
    const json = await recentRes.json()
    const track = json.items?.[0]?.track
    if (track) {
      return {
        isPlaying: false,
        isRecent: true,
        title: track.name,
        artist: track.artists.map((a: { name: string }) => a.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        songUrl: track.external_urls.spotify,
      }
    }
  }

  return null
}
