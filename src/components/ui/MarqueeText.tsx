"use client";

export function MarqueeText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <span className="inline-flex whitespace-nowrap animate-marquee [animation-play-state:paused] group-hover/spotify:[animation-play-state:running]">
        <span>{children}</span>
        <span className="inline-block w-16" aria-hidden />
        <span aria-hidden>{children}</span>
        <span className="inline-block w-16" aria-hidden />
      </span>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
