const PAGES = {
  HOME: "/",
  SEARCH: "/search",
  LIBRARY: "/library",
  TRACK: "/track",
  ALBUM: "/album",
  PLAYLIST: "/playlist",
  ARTIST: "/artist",
  DISCOVER: "/discover",
} as const;

const COMMON = {
  HOME: "/",
  LOGIN: "/login",
} as const;

export const ROUTES = {
  COMMON,
  PAGES,
} as const;
