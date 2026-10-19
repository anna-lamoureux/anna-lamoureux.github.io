// Four icons, each with one coloured pixel; a visitor gets one at random per page load.
const icons = ['blue', 'orange', 'magenta', 'green'];

export function pickFavicon(): void {
  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) return;
  const name = icons[Math.floor(Math.random() * icons.length)];
  link.href = `/favicon-${name}.svg`;
}
