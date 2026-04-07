import {
  ChevronDown,
  ChevronRight,
  Film,
  Layers,
  ListVideo,
  Pencil,
  Plus,
  Shield,
  Trash2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import {
  useAddContent,
  useAllContent,
  useDeleteContent,
  useUpdateContent,
} from "../lib/backend-client";
import { useLanguage } from "../lib/i18n";
import type {
  ContentCategory,
  ContentInput,
  ContentItem,
  Episode,
  Part,
  Season,
} from "../types/content";

// ─── helpers ───────────────────────────────────────────────────────────────

const makeEpisode = (n: number): Episode => ({
  episodeNumber: n,
  title: "",
  description: "",
  duration: "",
  videoUrl: "",
  parts: [],
});

const makeSeason = (n: number): Season => ({
  seasonNumber: n,
  title: "",
  description: "",
  episodes: [makeEpisode(1)],
});

const makePart = (n: number): Part => ({
  partNumber: n,
  title: "",
  videoUrl: "",
  duration: "",
});

const CATEGORIES: ContentCategory[] = ["movie", "anime", "drama", "music"];
const SHOW_SEASONS: ContentCategory[] = ["anime", "drama"];

const EMPTY_FORM: ContentInput = {
  title: "",
  description: "",
  category: "movie",
  genre: "",
  year: new Date().getFullYear(),
  rating: 0,
  duration: "",
  posterUrl: "",
  seasons: undefined,
};

// ─── field style ───────────────────────────────────────────────────────────

const fieldCls =
  "w-full px-3 py-2 bg-background border border-border/60 rounded-lg text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth";

const labelCls =
  "block text-xs text-muted-foreground mb-1 font-body uppercase tracking-wide";

// ─── Parts editor ──────────────────────────────────────────────────────────

function PartsEditor({
  parts,
  onChange,
}: {
  parts: Part[];
  onChange: (p: Part[]) => void;
}) {
  const addPart = () => onChange([...parts, makePart(parts.length + 1)]);
  const removePart = (i: number) => {
    const next = parts
      .filter((_, idx) => idx !== i)
      .map((p, idx) => ({ ...p, partNumber: idx + 1 }));
    onChange(next);
  };
  const setPart = (i: number, k: keyof Part, v: string | number) => {
    onChange(parts.map((p, idx) => (idx === i ? { ...p, [k]: v } : p)));
  };

  return (
    <div className="mt-3 space-y-2 pl-4 border-l-2 border-accent/30">
      <p className="text-xs text-accent font-display uppercase tracking-widest flex items-center gap-1">
        <Film size={11} /> Parts
      </p>
      {parts.map((part, i) => (
        <div
          key={`part-${part.partNumber}`}
          className="bg-muted/20 rounded-lg p-3 space-y-2 relative"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-display text-accent font-semibold">
              Part {part.partNumber}
            </span>
            <button
              type="button"
              onClick={() => removePart(i)}
              className="text-muted-foreground hover:text-primary transition-smooth p-0.5 rounded"
              aria-label="Remove part"
            >
              <X size={12} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="sm:col-span-1">
              <label
                htmlFor={`part-title-${part.partNumber}`}
                className={labelCls}
              >
                Part Title
              </label>
              <input
                id={`part-title-${part.partNumber}`}
                type="text"
                value={part.title}
                onChange={(e) => setPart(i, "title", e.target.value)}
                className={fieldCls}
                placeholder="Part 1 title"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor={`part-video-${part.partNumber}`}
                className={labelCls}
              >
                Video URL
              </label>
              <input
                id={`part-video-${part.partNumber}`}
                type="url"
                value={part.videoUrl ?? ""}
                onChange={(e) => setPart(i, "videoUrl", e.target.value)}
                className={fieldCls}
                placeholder="https://..."
              />
            </div>
            <div>
              <label
                htmlFor={`part-dur-${part.partNumber}`}
                className={labelCls}
              >
                Duration
              </label>
              <input
                id={`part-dur-${part.partNumber}`}
                type="text"
                value={part.duration}
                onChange={(e) => setPart(i, "duration", e.target.value)}
                className={fieldCls}
                placeholder="e.g. 12m"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addPart}
        className="flex items-center gap-1.5 text-xs text-accent hover:text-foreground font-display transition-smooth px-2 py-1 rounded-md hover:bg-accent/10"
        data-ocid="admin-add-part"
      >
        <Plus size={12} /> Add Part
      </button>
    </div>
  );
}

// ─── Episode editor ────────────────────────────────────────────────────────

function EpisodeEditor({
  episode,
  onChange,
  onRemove,
}: {
  episode: Episode;
  onChange: (e: Episode) => void;
  onRemove: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const setField = (k: keyof Episode, v: string | number) =>
    onChange({ ...episode, [k]: v });

  return (
    <div
      className="bg-muted/10 border border-border/30 rounded-lg overflow-hidden"
      data-ocid={`admin-episode-${episode.episodeNumber}`}
    >
      {/* Row header */}
      <div className="flex items-center gap-2 px-3 py-2">
        <button
          type="button"
          onClick={() => setExpanded((x) => !x)}
          className="text-muted-foreground hover:text-foreground transition-smooth"
          aria-label="Toggle episode"
        >
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>
        <span className="text-xs font-display text-foreground/80 font-semibold min-w-[70px]">
          Ep {episode.episodeNumber}
        </span>
        <input
          type="text"
          value={episode.title}
          onChange={(e) => setField("title", e.target.value)}
          className="flex-1 px-2 py-1 bg-background border border-border/50 rounded-md text-foreground font-body text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-smooth"
          placeholder="Episode title"
        />
        <button
          type="button"
          onClick={onRemove}
          className="text-muted-foreground hover:text-primary transition-smooth p-0.5"
          aria-label="Remove episode"
        >
          <X size={13} />
        </button>
      </div>

      {/* Expanded fields */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 border-t border-border/20 pt-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor={`ep-desc-${episode.episodeNumber}`}
                    className={labelCls}
                  >
                    Description
                  </label>
                  <textarea
                    id={`ep-desc-${episode.episodeNumber}`}
                    rows={2}
                    value={episode.description}
                    onChange={(e) => setField("description", e.target.value)}
                    className={`${fieldCls} resize-none`}
                    placeholder="Episode synopsis"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor={`ep-video-${episode.episodeNumber}`}
                      className={labelCls}
                    >
                      Video URL
                    </label>
                    <input
                      id={`ep-video-${episode.episodeNumber}`}
                      type="url"
                      value={episode.videoUrl ?? ""}
                      onChange={(e) => setField("videoUrl", e.target.value)}
                      className={fieldCls}
                      placeholder="https://..."
                      data-ocid={`admin-ep-videourl-${episode.episodeNumber}`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor={`ep-dur-${episode.episodeNumber}`}
                      className={labelCls}
                    >
                      Duration
                    </label>
                    <input
                      id={`ep-dur-${episode.episodeNumber}`}
                      type="text"
                      value={episode.duration}
                      onChange={(e) => setField("duration", e.target.value)}
                      className={fieldCls}
                      placeholder="e.g. 24m"
                    />
                  </div>
                </div>
              </div>
              {/* Parts */}
              <PartsEditor
                parts={episode.parts ?? []}
                onChange={(p) => onChange({ ...episode, parts: p })}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Season editor ─────────────────────────────────────────────────────────

function SeasonEditor({
  season,
  onChange,
  onRemove,
}: {
  season: Season;
  onChange: (s: Season) => void;
  onRemove: () => void;
}) {
  const [expanded, setExpanded] = useState(true);

  const setField = (k: "title" | "description", v: string) =>
    onChange({ ...season, [k]: v });

  const addEpisode = () =>
    onChange({
      ...season,
      episodes: [...season.episodes, makeEpisode(season.episodes.length + 1)],
    });

  const removeEpisode = (i: number) => {
    const next = season.episodes
      .filter((_, idx) => idx !== i)
      .map((ep, idx) => ({ ...ep, episodeNumber: idx + 1 }));
    onChange({ ...season, episodes: next });
  };

  const updateEpisode = (i: number, ep: Episode) => {
    onChange({
      ...season,
      episodes: season.episodes.map((e, idx) => (idx === i ? ep : e)),
    });
  };

  return (
    <div
      className="border border-border/40 rounded-xl overflow-hidden"
      data-ocid={`admin-season-${season.seasonNumber}`}
    >
      {/* Season header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-muted/30">
        <button
          type="button"
          onClick={() => setExpanded((x) => !x)}
          className="text-muted-foreground hover:text-foreground transition-smooth"
          aria-label="Toggle season"
        >
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        <Layers size={15} className="text-primary shrink-0" />
        <span className="text-sm font-display font-bold text-foreground min-w-[80px]">
          Season {season.seasonNumber}
        </span>
        <input
          type="text"
          value={season.title}
          onChange={(e) => setField("title", e.target.value)}
          className="flex-1 px-3 py-1.5 bg-background border border-border/50 rounded-lg text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth"
          placeholder="Season title (optional)"
        />
        <button
          type="button"
          onClick={onRemove}
          className="text-muted-foreground hover:text-primary transition-smooth p-1 rounded-md hover:bg-primary/10"
          aria-label="Remove season"
        >
          <X size={15} />
        </button>
      </div>

      {/* Season body */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-3 space-y-3">
              {/* Season description */}
              <div>
                <label
                  htmlFor={`season-desc-${season.seasonNumber}`}
                  className={labelCls}
                >
                  Season Description
                </label>
                <input
                  id={`season-desc-${season.seasonNumber}`}
                  type="text"
                  value={season.description}
                  onChange={(e) => setField("description", e.target.value)}
                  className={fieldCls}
                  placeholder="Brief description for this season"
                />
              </div>

              {/* Episodes */}
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground font-display uppercase tracking-widest flex items-center gap-1">
                  <ListVideo size={11} /> Episodes ({season.episodes.length})
                </p>
                {season.episodes.map((ep, i) => (
                  <EpisodeEditor
                    key={`ep-${season.seasonNumber}-${ep.episodeNumber}`}
                    episode={ep}
                    onChange={(updated) => updateEpisode(i, updated)}
                    onRemove={() => removeEpisode(i)}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={addEpisode}
                className="flex items-center gap-1.5 text-sm text-primary hover:text-foreground font-display transition-smooth px-3 py-1.5 rounded-lg hover:bg-primary/10 border border-dashed border-primary/30"
                data-ocid={`admin-add-episode-${season.seasonNumber}`}
              >
                <Plus size={13} /> Add Episode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Seasons section ───────────────────────────────────────────────────────

function SeasonsSection({
  seasons,
  onChange,
}: {
  seasons: Season[];
  onChange: (s: Season[]) => void;
}) {
  const addSeason = () =>
    onChange([...seasons, makeSeason(seasons.length + 1)]);

  const removeSeason = (i: number) => {
    const next = seasons
      .filter((_, idx) => idx !== i)
      .map((s, idx) => ({ ...s, seasonNumber: idx + 1 }));
    onChange(next);
  };

  const updateSeason = (i: number, s: Season) =>
    onChange(seasons.map((ss, idx) => (idx === i ? s : ss)));

  return (
    <div
      className="mt-6 border-t border-border/40 pt-6 space-y-4"
      data-ocid="admin-seasons-section"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers size={18} className="text-primary" />
          <h3 className="font-display font-bold text-base text-foreground">
            Seasons & Episodes
          </h3>
          <span className="text-xs text-muted-foreground font-body">
            ({seasons.length} season{seasons.length !== 1 ? "s" : ""})
          </span>
        </div>
        <button
          type="button"
          onClick={addSeason}
          className="flex items-center gap-1.5 text-sm font-display text-primary hover:text-foreground px-4 py-1.5 rounded-lg border border-primary/40 hover:bg-primary/10 transition-smooth"
          data-ocid="admin-add-season"
        >
          <Plus size={14} /> Add Season
        </button>
      </div>

      {seasons.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-border/40 rounded-xl text-muted-foreground">
          <Layers size={32} className="mx-auto mb-2 opacity-30" />
          <p className="text-sm font-body">No seasons yet — add one above</p>
        </div>
      ) : (
        <div className="space-y-3">
          {seasons.map((season, i) => (
            <SeasonEditor
              key={`season-${season.seasonNumber}`}
              season={season}
              onChange={(s) => updateSeason(i, s)}
              onRemove={() => removeSeason(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Content form ──────────────────────────────────────────────────────────

function ContentForm({
  initial,
  onSave,
  onCancel,
  isLoading,
}: {
  initial: ContentInput;
  onSave: (v: ContentInput) => void;
  onCancel: () => void;
  isLoading: boolean;
}) {
  const { t } = useLanguage();
  const [form, setForm] = useState<ContentInput>(() => ({
    ...initial,
    seasons:
      initial.seasons ??
      (SHOW_SEASONS.includes(initial.category) ? [] : undefined),
  }));

  const set = (k: keyof ContentInput, v: string | number) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleCategoryChange = (cat: ContentCategory) => {
    setForm((f) => ({
      ...f,
      category: cat,
      seasons: SHOW_SEASONS.includes(cat) ? (f.seasons ?? []) : undefined,
    }));
  };

  const showSeasons = SHOW_SEASONS.includes(form.category);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave({
          ...form,
          seasons: showSeasons ? form.seasons : undefined,
        });
      }}
      className="bg-card border border-border/50 rounded-xl p-6 space-y-4"
      data-ocid="admin-form"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Title */}
        <div className="md:col-span-2">
          <label htmlFor="admin-title" className={labelCls}>
            Title *
          </label>
          <input
            id="admin-title"
            required
            type="text"
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            className={fieldCls}
            data-ocid="admin-input-title"
          />
        </div>
        {/* Description */}
        <div className="md:col-span-2">
          <label htmlFor="admin-desc" className={labelCls}>
            Description *
          </label>
          <textarea
            id="admin-desc"
            required
            rows={3}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            className={`${fieldCls} resize-none`}
            data-ocid="admin-input-description"
          />
        </div>
        {/* Category */}
        <div>
          <label htmlFor="admin-category" className={labelCls}>
            Category *
          </label>
          <select
            id="admin-category"
            value={form.category}
            onChange={(e) =>
              handleCategoryChange(e.target.value as ContentCategory)
            }
            className={fieldCls}
            data-ocid="admin-input-category"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
        </div>
        {/* Genre */}
        <div>
          <label htmlFor="admin-genre" className={labelCls}>
            Genre *
          </label>
          <input
            id="admin-genre"
            required
            type="text"
            value={form.genre}
            onChange={(e) => set("genre", e.target.value)}
            className={fieldCls}
            data-ocid="admin-input-genre"
          />
        </div>
        {/* Year */}
        <div>
          <label htmlFor="admin-year" className={labelCls}>
            Year *
          </label>
          <input
            id="admin-year"
            required
            type="number"
            min={1900}
            max={2099}
            value={form.year}
            onChange={(e) => set("year", Number(e.target.value))}
            className={fieldCls}
            data-ocid="admin-input-year"
          />
        </div>
        {/* Rating */}
        <div>
          <label htmlFor="admin-rating" className={labelCls}>
            Rating (0–5)
          </label>
          <input
            id="admin-rating"
            type="number"
            min={0}
            max={5}
            step={0.1}
            value={form.rating}
            onChange={(e) => set("rating", Number(e.target.value))}
            className={fieldCls}
            data-ocid="admin-input-rating"
          />
        </div>
        {/* Duration */}
        <div>
          <label htmlFor="admin-duration" className={labelCls}>
            Duration
          </label>
          <input
            id="admin-duration"
            type="text"
            placeholder="e.g. 2h 15m or 24 eps"
            value={form.duration}
            onChange={(e) => set("duration", e.target.value)}
            className={fieldCls}
            data-ocid="admin-input-duration"
          />
        </div>
        {/* Poster URL */}
        <div className="md:col-span-2">
          <label htmlFor="admin-poster" className={labelCls}>
            Poster URL
          </label>
          <input
            id="admin-poster"
            type="url"
            placeholder="https://..."
            value={form.posterUrl}
            onChange={(e) => set("posterUrl", e.target.value)}
            className={fieldCls}
            data-ocid="admin-input-poster"
          />
        </div>
      </div>

      {/* Seasons section — only for anime/drama */}
      <AnimatePresence>
        {showSeasons && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <SeasonsSection
              seasons={form.seasons ?? []}
              onChange={(s) => setForm((f) => ({ ...f, seasons: s }))}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3 pt-2 border-t border-border/30">
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm hover:bg-primary/90 disabled:opacity-50 transition-smooth glow-red"
          data-ocid="admin-save-btn"
        >
          {t("admin.save")}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 bg-muted/60 border border-border/40 text-foreground rounded-lg font-display font-semibold text-sm hover:bg-muted transition-smooth"
          data-ocid="admin-cancel-btn"
        >
          {t("admin.cancel")}
        </button>
      </div>
    </form>
  );
}

// ─── Admin page ────────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  movie: "Movie",
  anime: "Anime",
  drama: "Drama",
  music: "Music",
};

export default function AdminPage() {
  const { t } = useLanguage();
  const { data: all = [], isLoading } = useAllContent();
  const addMut = useAddContent();
  const updateMut = useUpdateContent();
  const deleteMut = useDeleteContent();

  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState<ContentItem | null>(null);

  const handleAdd = async (input: ContentInput) => {
    await addMut.mutateAsync(input);
    setShowAdd(false);
  };

  const handleUpdate = async (input: ContentInput) => {
    if (!editing) return;
    await updateMut.mutateAsync({ id: editing.id, input });
    setEditing(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this item?")) return;
    await deleteMut.mutateAsync(id);
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Shield size={28} className="text-accent" />
          <div>
            <h1 className="font-display font-black text-3xl text-foreground">
              {t("admin.title")}
            </h1>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Manage all platform content
            </p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-display font-semibold text-sm hover:bg-primary/90 transition-smooth glow-red"
          onClick={() => {
            setShowAdd(true);
            setEditing(null);
          }}
          data-ocid="admin-add-btn"
        >
          <Plus size={16} />
          {t("admin.addContent")}
        </button>
      </div>

      {/* Add form */}
      {showAdd && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="font-display font-bold text-lg text-foreground mb-4">
            {t("admin.addContent")}
          </h2>
          <ContentForm
            initial={EMPTY_FORM}
            onSave={handleAdd}
            onCancel={() => setShowAdd(false)}
            isLoading={addMut.isPending}
          />
        </motion.div>
      )}

      {/* Content table */}
      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 6 }, (_, i) => `skel-${i}`).map((k) => (
            <div
              key={k}
              className="h-14 rounded-lg bg-muted/30 animate-pulse"
            />
          ))}
        </div>
      ) : all.length === 0 ? (
        <div
          className="text-center py-20 text-muted-foreground"
          data-ocid="admin-empty"
        >
          <Shield size={48} className="mx-auto mb-4 opacity-30" />
          <p className="font-display text-xl">No content yet</p>
          <p className="text-sm mt-2 font-body">Add your first item above</p>
        </div>
      ) : (
        <div
          className="rounded-xl border border-border/40 overflow-hidden"
          data-ocid="admin-table"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead className="bg-muted/40 border-b border-border/40">
                <tr>
                  {[
                    "Title",
                    "Category",
                    "Genre",
                    "Year",
                    "Rating",
                    "Duration",
                    "Seasons",
                    "Actions",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left text-xs uppercase tracking-wide text-muted-foreground font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {all.map((item, i) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-border/30 hover:bg-muted/20 transition-smooth"
                    data-ocid={`admin-row-${item.id}`}
                  >
                    <td className="px-4 py-3 font-medium text-foreground max-w-[180px]">
                      <span className="line-clamp-1">{item.title}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-primary/20 text-primary rounded-full text-xs">
                        {CATEGORY_LABELS[item.category] ?? item.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {item.genre}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground tabular-nums">
                      {item.year}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground tabular-nums">
                      {item.rating.toFixed(1)}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {item.duration}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground tabular-nums">
                      {item.seasons?.length ? (
                        <span className="px-2 py-0.5 bg-accent/20 text-accent rounded-full text-xs">
                          {item.seasons.length}S
                        </span>
                      ) : (
                        <span className="text-muted-foreground/40">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          className="p-1.5 rounded-md hover:bg-accent/20 text-accent hover:text-foreground transition-smooth"
                          onClick={() => {
                            setEditing(item);
                            setShowAdd(false);
                          }}
                          aria-label={`Edit ${item.title}`}
                          data-ocid={`admin-edit-${item.id}`}
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          type="button"
                          className="p-1.5 rounded-md hover:bg-primary/20 text-primary hover:text-foreground transition-smooth"
                          onClick={() => handleDelete(item.id)}
                          aria-label={`Delete ${item.title}`}
                          data-ocid={`admin-delete-${item.id}`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Edit form */}
      {editing && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <h2 className="font-display font-bold text-lg text-foreground mb-4">
            {t("admin.editContent")}: {editing.title}
          </h2>
          <ContentForm
            initial={{
              title: editing.title,
              description: editing.description,
              category: editing.category,
              genre: editing.genre,
              year: editing.year,
              rating: editing.rating,
              duration: editing.duration,
              posterUrl: editing.posterUrl,
              seasons: editing.seasons,
            }}
            onSave={handleUpdate}
            onCancel={() => setEditing(null)}
            isLoading={updateMut.isPending}
          />
        </motion.div>
      )}
    </div>
  );
}
