import { NextResponse } from 'next/server'
import { getNowPlaying } from '@/lib/spotify'

export async function GET() {
  const track = await getNowPlaying()
  if (!track) return NextResponse.json({ isPlaying: false })
  return NextResponse.json(track)
}
