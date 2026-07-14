import Image from "next/image";

const basics = [
  { label: "species", value: "snow leopard!!! mrowmrowmrppp" },
  { label: "based in", value: "Singapore, GMT+8" },
  { label: "day job", value: "software, the boring kind that pays rent" },
  { label: "night job", value: "this website, apparently" },
];

const stats = [
  { label: "caffeine dependency", note: "92%", progress: 92 },
  { label: "chaos : order ratio", note: "70:30", progress: 70 },
  { label: "boba enthusiasm", note: "immeasurable", progress: 100 },
  { label: "to-do list items cleared", note: "15%", progress: 15 },
];

const interests = [
  "furry art",
  "conventions",
  "mechanical keyboards",
  "baking (poorly)",
  "rhythm games",
  "boba reviews",
  "low-effort cooking",
  "naps",
  "drawing (poorly)",
];

const rightNow = [
  { tag: "reading", value: "A Philosophy of Software Design" },
  { tag: "tinkering", value: "this site, 65% of the way there" },
  { tag: "packing for", value: "Eurofurence, August 19" },
  { tag: "practicing", value: "drawing my own fursona for once" },
];

const elsewhere = [
  { label: "github", handle: "@foxbento", href: "https://github.com/foxbento" },
  {
    label: "twitter",
    handle: "@lynxposter",
    href: "https://twitter.com/lynxposter",
  },
  {
    label: "twitter (nsfw)",
    handle: "@smoresmut",
    href: "https://twitter.com/smoresmut",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-6 pb-10 px-4 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-mono font-medium mb-2">
          &gt; about smores.
        </h1>
        <p className="text-himalaya-shadow">
          {" "}
          because every personal site has one, right?
        </p>
      </header>

      {/* Hero / intro */}
      <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-7 items-center text-center sm:text-left">
        <Image
          src="/avatar.png"
          alt="smores, a scruffy lil snep, resting their chin on their paws and looking at Ekolt, a friend's deer furson!"
          width={128}
          height={128}
          className="rounded-full border-4 border-himalaya-accent object-cover mx-auto sm:mx-0"
        />
        <div>
          <h2 className="text-2xl font-mono font-medium mb-1">smores</h2>
          <p className="text-sm text-himalaya-shadow mb-3">
            she/they · 20s · usually awake at hours that are bad for me
          </p>
          <p className="max-w-2xl">
            <span className="font-serif italic text-himalaya-deep block mb-2">
              a small snep who plays rhythm games, inhales milk tea, and goes to
              the occasional convention.
            </span>
            i&apos;m a full stack dev by day, and by night i&apos;m either
            playing some rhythm game (recently maimai or DDR) or hanging out
            with friends and maybe enjoy some nice food or boba. this site is a
            curated lil digital garden for me to yap a little and share about my
            interests with ny&apos;all!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {/* The basics */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist">
          <h2 className="text-xl font-mono font-medium mb-4">the basics.</h2>
          <ul className="space-y-3">
            {basics.map((fact) => (
              <li
                key={fact.label}
                className="border-l-4 border-himalaya-accent pl-3"
              >
                <span className="block text-xs uppercase tracking-wide text-himalaya-shadow">
                  {fact.label}
                </span>
                <span className="text-sm">{fact.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core stats */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist">
          <h2 className="text-xl font-mono font-medium mb-4">core stats.</h2>
          <div className="space-y-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex justify-between mb-1 text-sm">
                  <span>{stat.label}</span>
                  <span className="text-xs text-himalaya-shadow">
                    {stat.note}
                  </span>
                </div>
                <div className="h-2 bg-himalaya-mist rounded-full overflow-hidden">
                  <div
                    className="h-full bg-himalaya-accent rounded-full"
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Things I'm into */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist sm:col-span-2">
          <h2 className="text-xl font-mono font-medium mb-4">
            things i&apos;m into.
          </h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 bg-himalaya-ice rounded-full text-sm text-himalaya-shadow border border-himalaya-mist"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Right now */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist">
          <h2 className="text-xl font-mono font-medium mb-4">right now.</h2>
          <div className="space-y-2">
            {rightNow.map((line) => (
              <p key={line.tag} className="text-sm">
                <span className="font-mono text-xs text-himalaya-deep bg-himalaya-ice border border-himalaya-mist px-1.5 py-0.5 rounded mr-2">
                  {line.tag}
                </span>
                {line.value}
              </p>
            ))}
          </div>
        </div>

        {/* Find me elsewhere */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist">
          <h2 className="text-xl font-mono font-medium mb-4">
            find me elsewhere.
          </h2>
          <div className="flex flex-col">
            {elsewhere.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex justify-between items-baseline font-mono text-sm text-himalaya-peak hover:text-himalaya-accent transition-colors py-2 ${
                  index !== elsewhere.length - 1
                    ? "border-b border-himalaya-mist"
                    : ""
                }`}
              >
                {link.label}
                <span className="text-xs text-himalaya-shadow font-sans">
                  {link.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-center font-serif italic text-himalaya-shadow">
        thanks for reading this far. go pet a cat or something.
      </p>
    </div>
  );
}
