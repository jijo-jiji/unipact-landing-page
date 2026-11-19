// Example videos by Raziq Syahmee, one of UniPact's Digital Marketing talents. The clients
// agreed to their work being shown here. Each is a 15-second cut of the original, at
// 450x800 (tall) or 800x450 (wide): public/videos/creator-<name>.mp4, with a .webp poster.
// Used by the /sme gallery, its VideoObject schema and the /clients preview strip.

export type Clip = {
  name: string;
  /** Short name, shown under the clip and in button labels. */
  title: string;
  /** What the clip shows, for screen readers and search engines. */
  description: string;
  wide?: boolean;
  /** When the clip was added to the site, for its VideoObject schema. */
  added: string;
};

export type ClipGroup = { tab: string; lead: string; clips: Clip[] };

export const CLIPS = {
  eventPromo: {
    name: "event-promo",
    title: "Event promo with motion graphics",
    description: "A host introduces a community event, with animated scenes and shots of the crowd.",
    added: "2026-11-18",
  },
  voxPop: {
    name: "vox-pop",
    title: "Event vox pop",
    description: "Guests at a community event say, on camera, what they liked about it, with English captions.",
    added: "2026-11-19",
  },
  innogen: {
    name: "innogen",
    title: "Exhibition booth walkthrough",
    description: "A student presents her project at the INNOGEN 2026 innovation exhibition, with bold captions.",
    added: "2026-11-19",
  },
  campusSkit: {
    name: "campus-skit",
    title: "Event promo skit",
    description: "A short comedy skit, with captions, promoting a university event.",
    added: "2026-11-18",
  },
  interview: {
    name: "interview",
    title: "Interview with captions",
    description: "A rider at an equestrian centre talks about horse riding, with Malay captions.",
    added: "2026-11-18",
  },
  stables: {
    name: "stables",
    title: "Brand video on a professional camera",
    description: "A riding instructor shows the stables, filmed on a professional camera.",
    added: "2026-11-18",
  },
  butcher: {
    name: "butcher-iphone",
    title: "Shop tour filmed on iPhone",
    description: "The owners of a meat shop introduce their store and their wagyu, filmed on an iPhone for TikTok.",
    added: "2026-11-19",
  },
  officeSkit: {
    name: "office-skit",
    title: "Office meeting skit",
    description: "A light-hearted skit about a team's first meeting, filmed in an office with Malay captions.",
    added: "2026-11-19",
  },
  healthExplainer: {
    name: "health-explainer",
    title: "Health explainer",
    description: "An animated public health video about eating vegetables and avoiding diabetes, in Malay.",
    added: "2026-11-19",
  },
  healthyPlate: {
    name: "healthy-plate",
    title: "Animated nutrition tips",
    description: "Illustrated motion graphics explaining how to portion a balanced plate, in Malay.",
    added: "2026-11-19",
  },
  digitalLifelines: {
    name: "digital-lifelines",
    title: "Kinetic text and icons",
    description: "A motion graphics piece about digital connection and the economy, with animated lines and icons.",
    added: "2026-11-19",
  },
  podcastEdit: {
    name: "podcast-edit",
    title: "Podcast cut with motion graphics",
    description: "A podcast clip edited with animated charts, B-roll and sound design between the speaker's lines.",
    added: "2026-11-19",
  },
  kedah: {
    name: "kedah-documentary",
    title: "Short documentary",
    description: "A documentary on Kedah's geoparks and coastline, mixing interviews, drone shots and illustrations.",
    wide: true,
    added: "2026-11-19",
  },
  fama: {
    name: "fama-explainer",
    title: "Agency explainer",
    description: "An animated explainer about a farmers' market connecting local farmers with the community.",
    wide: true,
    added: "2026-11-19",
  },
  buyLocal: {
    name: "buy-local",
    title: "Buy-local campaign",
    description: "An illustrated campaign video encouraging Malaysians to support local products, in Malay.",
    wide: true,
    added: "2026-11-19",
  },
} satisfies Record<string, Clip>;

// The /sme gallery, grouped like the team's rate card: one tab per kind of content.
export const CLIP_GROUPS: ClipGroup[] = [
  {
    tab: "Events",
    lead: "Promos before the day, and vox pops and walkthroughs on the day.",
    clips: [CLIPS.eventPromo, CLIPS.voxPop, CLIPS.innogen, CLIPS.campusSkit],
  },
  {
    tab: "Brands and shops",
    lead: "Interviews, shop tours and skits that put a face to your business.",
    clips: [CLIPS.interview, CLIPS.stables, CLIPS.butcher, CLIPS.officeSkit],
  },
  {
    tab: "Motion graphics",
    lead: "Animated explainers and heavy edits for messages that need more than footage.",
    clips: [CLIPS.healthExplainer, CLIPS.healthyPlate, CLIPS.digitalLifelines, CLIPS.podcastEdit],
  },
  {
    tab: "Wide format",
    lead: "Landscape videos for YouTube, websites, events and LED screens.",
    clips: [CLIPS.kedah, CLIPS.fama, CLIPS.buyLocal],
  },
];

export const clipSrc = (name: string) => `/videos/creator-${name}.mp4`;
export const clipPoster = (name: string) => `/videos/creator-${name}.webp`;
