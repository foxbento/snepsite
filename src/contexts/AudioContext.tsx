"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type AudioContextType = {
  isPlaying: boolean
  togglePlay: () => void
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  togglePlay: () => {},
})

interface AudioProviderProps {
  children: ReactNode
}

export function AudioProvider({ children }: AudioProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  // Move audio initialization to useEffect to avoid hydration mismatch
  useEffect(() => {
    // This will only run on the client side after hydration
    const audioElement = new Audio('/music/nostalgic-bossa.mp3')
    setAudio(audioElement)
  }, [])

  const togglePlay = () => {
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause()
    } else {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Play failed:", error)
        })
      }
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => useContext(AudioContext)