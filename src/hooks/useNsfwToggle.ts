"use client";

import { useSyncExternalStore } from "react";

const KEY = "gallery-show-nsfw";
const listeners = new Set<() => void>();

function getSnapshot(): boolean | null {
  const stored = localStorage.getItem(KEY);
  return stored === null ? null : stored === "true";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function notify() {
  listeners.forEach((cb) => cb());
}

export function useNsfwToggle() {
  const pref = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const accept = () => {
    localStorage.setItem(KEY, "true");
    notify();
  };
  const decline = () => {
    localStorage.setItem(KEY, "false");
    notify();
  };
  const toggle = () => {
    localStorage.setItem(KEY, String(pref !== true));
    notify();
  };

  return {
    showNsfw: pref === true,
    undecided: pref === null,
    accept,
    decline,
    toggle,
  };
}
