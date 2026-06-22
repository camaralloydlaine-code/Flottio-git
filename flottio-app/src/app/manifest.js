export default function manifest() {
  return {
    name: 'Flottio',
    short_name: 'Flottio',
    description: 'Le système de gestion premium pour les flottes professionnelles et préparateurs esthétiques.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0D12',
    theme_color: '#0D0D12',
    icons: [
      {
        src: '/icons/icon.svg',
        sizes: '192x192 512x512',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }
    ],
  };
}
