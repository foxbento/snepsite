"use client"

import { useState, useEffect } from "react"

const KEY = "gallery-show-nsfw"

export function useNsfwToggle() {
  const [pref, setPref] = useState<boolean | null>(null) // null = not yet answered

  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    if (stored !== null) setPref(stored === "true")
  }, [])

  const accept = () => { localStorage.setItem(KEY, "true"); setPref(true) }
  const decline = () => { localStorage.setItem(KEY, "false"); setPref(false) }
  const toggle = () => {
    setPref(prev => {
      const next = prev !== true
      localStorage.setItem(KEY, String(next))
      return next
    })
  }

  return { showNsfw: pref === true, undecided: pref === null, accept, decline, toggle }
}
