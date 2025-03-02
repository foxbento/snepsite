"use client"


import { Pause, Play } from 'lucide-react'
import { useAudio } from '@/contexts/AudioContext'

export default function MusicToggle() {
  const { isPlaying, togglePlay } = useAudio()

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 bg-pastel-secondary p-2 rounded-full shadow-lg"
    >
      {isPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6" />
      )}
    </button>
  )
}