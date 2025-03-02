// app/api/spotify/route.ts
import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN!,
    }),
  });

  return response.json();
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getRecentlyPlayed = async () => {
  const { access_token } = await getAccessToken();

  return fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET() {
  // Try to get currently playing
  const response = await getNowPlaying();

  // If currently playing, return that data
  if (response.status === 200) {
    const song = await response.json();
    const trackData = {
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0].url,
      artist: song.item.artists.map((_artist: { name: string }) => _artist.name).join(', '),
      isPlaying: true,
      songUrl: song.item.external_urls.spotify,
      title: song.item.name,
      timestamp: new Date().toISOString(),
    };
    
    return NextResponse.json(trackData);
  }

  // If nothing is playing, get recently played
  const recentResponse = await getRecentlyPlayed();
      
  if (recentResponse.status === 200) {
    const recentData = await recentResponse.json();
    
    if (recentData.items && recentData.items.length > 0) {
      const recentTrack = recentData.items[0].track;
      const trackData = {
        album: recentTrack.album.name,
        albumImageUrl: recentTrack.album.images[0].url,
        artist: recentTrack.artists.map((_artist: { name: string }) => _artist.name).join(', '),
        isPlaying: false,
        songUrl: recentTrack.external_urls.spotify,
        title: recentTrack.name,
        timestamp: recentData.items[0].played_at,
        isRecent: true,
      };
      
      return NextResponse.json(trackData);
    }
  }

  // If all API requests fail, return not playing
  return NextResponse.json({ isPlaying: false });
}