import { SiGithub, SiX, SiDiscord } from "@icons-pack/react-simple-icons";

const socials = [
  {
    label: "github",
    handle: "@foxbento",
    href: "https://github.com/foxbento",
    blurb: "i host my pet projects here!",
    Icon: SiGithub,
    edge: "#4a5159",
    badgeBg: "#eceef0",
    badgeFg: "#26292d",
  },
  {
    label: "twitter",
    handle: "@lynxposter",
    href: "https://twitter.com/lynxposter",
    blurb: "mostly reposts, don't tweet much nowadays awawa",
    Icon: SiX,
    edge: "#8fa6bf",
    badgeBg: "#eef2f6",
    badgeFg: "#435163",
  },
  {
    label: "twitter (nsfw)",
    handle: "@smoresmut",
    href: "https://twitter.com/smoresmut",
    blurb: "18+. you've been warned.",
    Icon: SiX,
    edge: "#c98a8a",
    badgeBg: "#f7ecec",
    badgeFg: "#a15a5a",
  },
  {
    label: "discord",
    handle: "@smoressnep",
    href: "https://discord.gg/sAzdUCreg",
    blurb: "i use this a bunch, but i usually reserve this for mutuals only!",
    Icon: SiDiscord,
    edge: "#7289da",
    badgeBg: "#eef0fb",
    badgeFg: "#5865b0",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-6 pb-10 px-4 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-mono font-medium mb-2">
          &gt; contact me.
        </h1>
        <p className="text-himalaya-shadow">
          or don&apos;t! i&apos;m not a cop!
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md border border-himalaya-mist text-center sm:text-left">
        <p className="max-w-2xl">
          <span className="font-serif italic text-himalaya-deep block mb-2">
            socials.
          </span>
          you can reach me through any of these! but preferably do tell me where
          you found me from and what you wanna talk about &mdash; else i&apos;ll
          really struggle to have a good convo with you TwT
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderLeftColor: social.edge }}
            className="bg-white rounded-lg shadow-sm p-5 transition-all hover:shadow-md border border-himalaya-mist border-l-[3px] flex flex-col gap-2.5"
          >
            <div className="flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  style={{
                    backgroundColor: social.badgeBg,
                    color: social.badgeFg,
                  }}
                  className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg"
                >
                  <social.Icon size={17} />
                </span>
                <h2 className="font-mono text-base font-medium truncate">
                  {social.label}
                </h2>
              </div>
              <span className="text-xs text-himalaya-shadow shrink-0">
                {social.handle}
              </span>
            </div>
            <p className="text-sm text-himalaya-shadow leading-relaxed">
              {social.blurb}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
