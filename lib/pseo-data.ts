export type PseoRole = "software-developer" | "digital-marketing";

export interface PseoEntry {
  slug: string;
  title: string;
  description: string;
  city: string;
  role: PseoRole;
  headline: string;
}

export const pseoPages: PseoEntry[] = [
  {
    slug: "hire-student-software-developers-in-san-francisco",
    title: "Hire Student Software Developers in San Francisco | UniPact",
    description:
      "Find and hire top student software developers in San Francisco. Escrow-secured, milestone-based matching with verified local talent.",
    city: "San Francisco",
    role: "software-developer",
    headline: "Hire Student Software Developers in",
  },
  {
    slug: "hire-student-software-developers-in-new-york",
    title: "Hire Student Software Developers in New York | UniPact",
    description:
      "Find and hire top student software developers in New York. Escrow-secured, milestone-based matching with verified local talent.",
    city: "New York",
    role: "software-developer",
    headline: "Hire Student Software Developers in",
  },
  {
    slug: "student-digital-marketing-freelancers-in-austin",
    title: "Student Digital Marketing Freelancers in Austin | UniPact",
    description:
      "Match with the best student digital marketers in Austin for paid, milestone-based project work.",
    city: "Austin",
    role: "digital-marketing",
    headline: "Student Digital Marketing Freelancers in",
  },
];

export function getPseoEntry(slug: string): PseoEntry | undefined {
  return pseoPages.find((entry) => entry.slug === slug);
}
