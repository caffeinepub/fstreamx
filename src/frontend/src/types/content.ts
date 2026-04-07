export type ContentCategory = "movie" | "anime" | "drama" | "music";

export interface Part {
  partNumber: number;
  title: string;
  videoUrl?: string;
  duration: string;
}

export interface Episode {
  episodeNumber: number;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
  parts?: Part[];
}

export interface Season {
  seasonNumber: number;
  title: string;
  description: string;
  episodes: Episode[];
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: ContentCategory;
  genre: string;
  year: number;
  rating: number;
  duration: string;
  posterUrl: string;
  seasons?: Season[];
}

export interface ContentInput {
  title: string;
  description: string;
  category: ContentCategory;
  genre: string;
  year: number;
  rating: number;
  duration: string;
  posterUrl: string;
  seasons?: Season[];
}
