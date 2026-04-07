import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  ContentCategory,
  ContentInput,
  ContentItem,
  Episode,
  Part,
  Season,
} from "../types/content";

// Re-export types so consumers can import from one place
export type { Season, Episode, Part };

// ── local in-memory store ────────────────────────────────────────────────────
let _localId = 100;
const STORAGE_KEY = "fstreamx_content";

function loadLocal(): ContentItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ContentItem[];
  } catch {
    /* ignore */
  }
  return getDefaultContent();
}

function saveLocal(items: ContentItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function makeSeasons(
  numSeasons: number,
  epsPerSeason: number,
  videoUrl?: string,
): Season[] {
  return Array.from({ length: numSeasons }, (_, si) => ({
    seasonNumber: si + 1,
    title: `Season ${si + 1}`,
    description: `Season ${si + 1} continues the story with ${epsPerSeason} episodes.`,
    episodes: Array.from({ length: epsPerSeason }, (_, ei) => ({
      episodeNumber: ei + 1,
      title: `Episode ${ei + 1}`,
      description: `Episode ${ei + 1} of Season ${si + 1}.`,
      duration: "~24 min",
      videoUrl: videoUrl ?? undefined,
    })),
  }));
}

function makeSeasonsWithParts(
  numSeasons: number,
  epsPerSeason: number,
  partsPerEp: number,
): Season[] {
  return Array.from({ length: numSeasons }, (_, si) => ({
    seasonNumber: si + 1,
    title: `Season ${si + 1}`,
    description: `Season ${si + 1} — each episode split into parts.`,
    episodes: Array.from(
      { length: epsPerSeason },
      (_, ei) =>
        ({
          episodeNumber: ei + 1,
          title: `Episode ${ei + 1}`,
          description: `Episode ${ei + 1} of Season ${si + 1}.`,
          duration: `${partsPerEp * 12} min`,
          parts: Array.from(
            { length: partsPerEp },
            (_, pi) =>
              ({
                partNumber: pi + 1,
                title: `Part ${pi + 1}`,
                duration: "~12 min",
              }) satisfies Part,
          ),
        }) satisfies Episode,
    ),
  }));
}

function getDefaultContent(): ContentItem[] {
  return [
    // ── Movies (no seasons) ────────────────────────────────────────────────
    {
      id: "1",
      title: "Galactic Odyssey",
      description:
        "An epic journey across the cosmos where humanity discovers it is not alone in the universe.",
      category: "movie",
      genre: "Sci-Fi",
      year: 2024,
      rating: 4.8,
      duration: "2h 34m",
      posterUrl: "/assets/generated/poster-galactic-odyssey.dim_400x600.jpg",
    },
    {
      id: "2",
      title: "Shadow Protocol",
      description:
        "A rogue agent uncovers a global conspiracy that reaches the highest levels of government.",
      category: "movie",
      genre: "Action",
      year: 2024,
      rating: 4.5,
      duration: "2h 12m",
      posterUrl: "/assets/generated/poster-shadow-protocol.dim_400x600.jpg",
    },
    {
      id: "3",
      title: "Neon Requiem",
      description:
        "In a rain-soaked cyberpunk city, a detective investigates murders tied to illegal neural implants.",
      category: "movie",
      genre: "Thriller",
      year: 2023,
      rating: 4.6,
      duration: "1h 58m",
      posterUrl: "/assets/generated/poster-neon-requiem.dim_400x600.jpg",
    },
    {
      id: "4",
      title: "The Last Meridian",
      description:
        "Two astronauts stranded near Jupiter must find a way home before their oxygen runs out.",
      category: "movie",
      genre: "Drama",
      year: 2024,
      rating: 4.7,
      duration: "2h 08m",
      posterUrl: "/assets/generated/poster-last-meridian.dim_400x600.jpg",
    },
    {
      id: "5",
      title: "Crimson Tide Rising",
      description:
        "A war drama set in the Pacific that redefines courage and sacrifice.",
      category: "movie",
      genre: "War",
      year: 2023,
      rating: 4.4,
      duration: "2h 25m",
      posterUrl: "/assets/generated/poster-shadow-protocol.dim_400x600.jpg",
    },
    {
      id: "6",
      title: "Hollow Earth Chronicles",
      description:
        "An underground civilisation is discovered beneath Antarctica, upending all of human history.",
      category: "movie",
      genre: "Adventure",
      year: 2024,
      rating: 4.3,
      duration: "2h 01m",
      posterUrl: "/assets/generated/poster-galactic-odyssey.dim_400x600.jpg",
    },

    // ── Anime (with seasons) ───────────────────────────────────────────────
    {
      id: "7",
      title: "Blade Soul: Reborn",
      description:
        "A demon slayer reincarnates in the future and must master forgotten techniques to defeat an ancient evil.",
      category: "anime",
      genre: "Action",
      year: 2024,
      rating: 4.9,
      duration: "24 eps",
      posterUrl: "/assets/generated/poster-blade-soul.dim_400x600.jpg",
      seasons: makeSeasons(2, 12),
    },
    {
      id: "8",
      title: "Starforge Academy",
      description:
        "Students at an interstellar academy compete to claim the most powerful mech in the galaxy.",
      category: "anime",
      genre: "Mecha",
      year: 2024,
      rating: 4.7,
      duration: "26 eps",
      posterUrl: "/assets/generated/poster-starforge.dim_400x600.jpg",
      seasons: makeSeasons(2, 13),
    },
    {
      id: "9",
      title: "Violet Phantom",
      description:
        "A phantom thief with supernatural abilities steals cursed artefacts to protect the innocent.",
      category: "anime",
      genre: "Fantasy",
      year: 2023,
      rating: 4.8,
      duration: "24 eps",
      posterUrl: "/assets/generated/poster-violet-phantom.dim_400x600.jpg",
      seasons: makeSeasons(2, 12),
    },
    {
      id: "10",
      title: "Zero Chronicle: Abyss",
      description:
        "Parallel timelines collide as two protagonists unknowingly alter each other's fates.",
      category: "anime",
      genre: "Isekai",
      year: 2024,
      rating: 4.6,
      duration: "22 eps",
      posterUrl: "/assets/generated/poster-blade-soul.dim_400x600.jpg",
      seasons: makeSeasons(1, 22),
    },
    {
      id: "11",
      title: "Oni Warriors",
      description:
        "A band of warriors with oni blood fight to protect a realm teetering on the edge of collapse.",
      category: "anime",
      genre: "Shonen",
      year: 2024,
      rating: 4.5,
      duration: "28 eps",
      posterUrl: "/assets/generated/poster-starforge.dim_400x600.jpg",
      seasons: makeSeasons(2, 14),
    },
    {
      id: "12",
      title: "Digital Phantom",
      description:
        "A hacker anime following a genius programmer who dives into a deadly virtual reality world.",
      category: "anime",
      genre: "Cyberpunk",
      year: 2023,
      rating: 4.4,
      duration: "20 eps",
      posterUrl: "/assets/generated/poster-violet-phantom.dim_400x600.jpg",
      seasons: makeSeasons(1, 20),
    },

    // ── Dramas (with seasons + parts for some) ────────────────────────────
    {
      id: "13",
      title: "Kingdom of Thorns",
      description:
        "Political intrigue, forbidden romance, and betrayal in a fictional Asian dynasty spanning four generations.",
      category: "drama",
      genre: "Historical",
      year: 2024,
      rating: 4.8,
      duration: "16 eps",
      posterUrl: "/assets/generated/poster-kingdom-thorns.dim_400x600.jpg",
      seasons: makeSeasons(2, 8),
    },
    {
      id: "14",
      title: "Glass Heart",
      description:
        "A surgeon and a musician fall in love but are torn apart by family secrets and hidden pasts.",
      category: "drama",
      genre: "Romance",
      year: 2024,
      rating: 4.7,
      duration: "20 eps",
      posterUrl: "/assets/generated/poster-glass-heart.dim_400x600.jpg",
      seasons: makeSeasons(1, 20),
    },
    {
      id: "15",
      title: "The Midnight Counsel",
      description:
        "A legal thriller following a charismatic defence attorney who discovers corruption at every level of the justice system.",
      category: "drama",
      genre: "Legal",
      year: 2023,
      rating: 4.6,
      duration: "18 eps",
      posterUrl: "/assets/generated/poster-kingdom-thorns.dim_400x600.jpg",
      seasons: makeSeasonsWithParts(2, 9, 2),
    },
    {
      id: "16",
      title: "Echo of Yesterday",
      description:
        "A time-slip romance where letters from the past guide two souls toward each other across decades.",
      category: "drama",
      genre: "Romance",
      year: 2024,
      rating: 4.9,
      duration: "16 eps",
      posterUrl: "/assets/generated/poster-glass-heart.dim_400x600.jpg",
      seasons: makeSeasonsWithParts(1, 16, 2),
    },
    {
      id: "17",
      title: "Warlord's Bride",
      description:
        "An arranged marriage between rivals blossoms into an unbreakable alliance during wartime.",
      category: "drama",
      genre: "Historical",
      year: 2024,
      rating: 4.5,
      duration: "24 eps",
      posterUrl: "/assets/generated/poster-kingdom-thorns.dim_400x600.jpg",
      seasons: makeSeasons(3, 8),
    },
    {
      id: "18",
      title: "Neon City Nights",
      description:
        "A neo-noir crime drama set in a sprawling city where nothing is ever what it seems.",
      category: "drama",
      genre: "Crime",
      year: 2023,
      rating: 4.4,
      duration: "12 eps",
      posterUrl: "/assets/generated/poster-glass-heart.dim_400x600.jpg",
      seasons: makeSeasons(1, 12),
    },

    // ── Music (no seasons) ─────────────────────────────────────────────────
    {
      id: "19",
      title: "Echoes of the Universe",
      description:
        "An ambient electronic journey through synthesised cosmic soundscapes recorded over two years.",
      category: "music",
      genre: "Electronic",
      year: 2024,
      rating: 4.9,
      duration: "58m",
      posterUrl: "/assets/generated/poster-echoes-universe.dim_400x600.jpg",
    },
    {
      id: "20",
      title: "Soul Awakening",
      description:
        "A soul and R&B album exploring themes of resilience, identity, and love after loss.",
      category: "music",
      genre: "R&B",
      year: 2024,
      rating: 4.7,
      duration: "42m",
      posterUrl: "/assets/generated/poster-soul-awakening.dim_400x600.jpg",
    },
    {
      id: "21",
      title: "Neon Frequencies",
      description:
        "High-energy synthwave that draws influence from 80s retrofuturism and modern electronica.",
      category: "music",
      genre: "Synthwave",
      year: 2024,
      rating: 4.6,
      duration: "48m",
      posterUrl: "/assets/generated/poster-echoes-universe.dim_400x600.jpg",
    },
    {
      id: "22",
      title: "Mountain Silence",
      description:
        "A meditative acoustic album featuring guitar, piano, and the natural sounds of the Himalayas.",
      category: "music",
      genre: "Ambient",
      year: 2023,
      rating: 4.8,
      duration: "54m",
      posterUrl: "/assets/generated/poster-soul-awakening.dim_400x600.jpg",
    },
    {
      id: "23",
      title: "Urban Pulse",
      description:
        "Hip-hop beats and spoken word poetry documenting life in the city across 14 tracks.",
      category: "music",
      genre: "Hip-Hop",
      year: 2024,
      rating: 4.5,
      duration: "45m",
      posterUrl: "/assets/generated/poster-echoes-universe.dim_400x600.jpg",
    },
    {
      id: "24",
      title: "Crimson Strings",
      description:
        "Orchestral compositions inspired by classic film scores, performed by a 70-piece orchestra.",
      category: "music",
      genre: "Orchestral",
      year: 2024,
      rating: 4.9,
      duration: "62m",
      posterUrl: "/assets/generated/poster-soul-awakening.dim_400x600.jpg",
    },
  ];
}

// ── hooks ────────────────────────────────────────────────────────────────────

export function useAllContent() {
  return useQuery<ContentItem[]>({
    queryKey: ["content", "all"],
    queryFn: async () => loadLocal(),
    staleTime: 30_000,
  });
}

export function useContentByCategory(category: ContentCategory) {
  return useQuery<ContentItem[]>({
    queryKey: ["content", "category", category],
    queryFn: async () => loadLocal().filter((i) => i.category === category),
    staleTime: 30_000,
  });
}

export function useContentById(id: string) {
  return useQuery<ContentItem | null>({
    queryKey: ["content", "id", id],
    queryFn: async () => loadLocal().find((i) => i.id === id) ?? null,
    enabled: !!id,
  });
}

export function useSearchContent(term: string) {
  return useQuery<ContentItem[]>({
    queryKey: ["content", "search", term],
    queryFn: async () => {
      if (!term.trim()) return [];
      const lower = term.toLowerCase();
      return loadLocal().filter(
        (i) =>
          i.title.toLowerCase().includes(lower) ||
          i.description.toLowerCase().includes(lower) ||
          i.genre.toLowerCase().includes(lower),
      );
    },
    enabled: term.trim().length > 1,
  });
}

export function useAddContent() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: ContentInput): Promise<ContentItem> => {
      const newItem: ContentItem = { ...input, id: String(++_localId) };
      const items = loadLocal();
      items.push(newItem);
      saveLocal(items);
      return newItem;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["content"] }),
  });
}

export function useUpdateContent() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      input,
    }: { id: string; input: ContentInput }): Promise<ContentItem> => {
      const items = loadLocal();
      const idx = items.findIndex((i) => i.id === id);
      if (idx === -1) throw new Error("Not found");
      const updated: ContentItem = { ...input, id };
      items[idx] = updated;
      saveLocal(items);
      return updated;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["content"] }),
  });
}

export function useDeleteContent() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string): Promise<void> => {
      const items = loadLocal().filter((i) => i.id !== id);
      saveLocal(items);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["content"] }),
  });
}
