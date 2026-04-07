import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Part {
    title: string;
    duration: string;
    partNumber: bigint;
    videoUrl?: string;
}
export interface Season {
    title: string;
    episodes: Array<Episode>;
    description: string;
    seasonNumber: bigint;
}
export type ContentId = string;
export interface ContentItem {
    id: ContentId;
    title: string;
    duration: string;
    seasons?: Array<Season>;
    year: bigint;
    description: string;
    genre: string;
    posterUrl: string;
    category: Category;
    rating: number;
}
export interface ContentInput {
    title: string;
    duration: string;
    seasons?: Array<Season>;
    year: bigint;
    description: string;
    genre: string;
    posterUrl: string;
    category: Category;
    rating: number;
}
export type Category = string;
export interface Episode {
    title: string;
    duration: string;
    description: string;
    episodeNumber: bigint;
    parts?: Array<Part>;
    videoUrl?: string;
}
export interface backendInterface {
    addContent(input: ContentInput): Promise<ContentId>;
    deleteContent(id: ContentId): Promise<boolean>;
    getAllContent(): Promise<Array<ContentItem>>;
    getContentByCategory(category: Category): Promise<Array<ContentItem>>;
    getContentById(id: ContentId): Promise<ContentItem | null>;
    searchContent(term: string): Promise<Array<ContentItem>>;
    updateContent(id: ContentId, input: ContentInput): Promise<boolean>;
}
