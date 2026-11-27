export type SiteLink = { label: string; href: string };

export const primaryNavigation: readonly SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Archive", href: "/archive" },
];

export const conversationLink = { label: "Work with me", href: "/work-with-me" } as const;
export const footerNavigation: readonly SiteLink[] = [...primaryNavigation, conversationLink];
