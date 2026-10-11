const SOCIAL: [string, string, string][] = [
  ["beehiiv", "The Polymath on Beehiiv", "https://polymath-rn-collins.beehiiv.com"],
  ["linkedin", "LinkedIn", "https://www.linkedin.com/in/rn-collins"],
  ["instagram", "Instagram @rn_collins", "https://www.instagram.com/rn_collins"],
  ["threads", "Threads @rn_collins", "https://www.threads.net/@rn_collins"],
  ["x", "X @renaissancex2m3", "https://x.com/renaissancex2m3"],
  ["tiktok", "TikTok @renaissancex2m3", "https://www.tiktok.com/@renaissancex2m3"],
  ["bluesky", "Bluesky @rncollins.bsky.social", "https://bsky.app/profile/rncollins.bsky.social"],
  ["youtube", "YouTube @Renaissance-Woman-3000", "https://www.youtube.com/@Renaissance-Woman-3000"],
  ["pinterest", "Pinterest renaissancex2m3", "https://www.pinterest.com/renaissancex2m3"],
];

export function SocialIcons() {
  return (
    <ul className="siteFooterSocial" aria-label="RN Collins elsewhere">
      {SOCIAL.map(([n, label, href]) => (
        <li key={n}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
            <img src={`/rnc-icons/${n}.png`} width={32} height={32} alt="" />
          </a>
        </li>
      ))}
    </ul>
  );
}
