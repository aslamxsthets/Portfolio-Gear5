export const PROFILE_IMAGE_SOURCES = [
  `${import.meta.env.BASE_URL}Suit%20DP.jpeg`,
];

export const handleImageFallback = (e: Event) => {
  const target = e.currentTarget as HTMLImageElement;

  if (!target.src.includes('aslam_suit_art.svg')) {
    target.src = `${import.meta.env.BASE_URL}aslam_suit_art.svg`;
  }
};