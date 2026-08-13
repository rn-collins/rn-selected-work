export type SiteLink = { label: string; href: string };

export const primaryNavigation: readonly SiteLink[] = [
  { label: "Practice", href: "/practice" },
  { label: "Selected Work", href: "/work" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export const conversationLink = { label: "Start a Conversation", href: "/contact" } as const;
export const footerNavigation: readonly SiteLink[] = [...primaryNavigation, conversationLink];
