import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ContentCard } from "../components/ContentCard";
import { PlayerModal } from "../components/PlayerModal";
import { useSearchContent } from "../lib/backend-client";
import { useLanguage } from "../lib/i18n";
import type { ContentItem } from "../types/content";

export default function SearchPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState<ContentItem | null>(null);
  const { data: results = [], isLoading } = useSearchContent(query);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      {/* Search input */}
      <div className="relative mb-8 max-w-2xl mx-auto">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder={t("search.placeholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-card border border-border/60 rounded-xl text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-smooth text-sm"
          data-ocid="search-input"
        />
      </div>

      {/* Results */}
      {query.trim().length > 1 && (
        <div>
          <h2 className="font-display font-bold text-lg text-foreground mb-4">
            {t("search.results")} {results.length > 0 && `(${results.length})`}
          </h2>

          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: 5 }, (_, i) => `skel-${i}`).map((k) => (
                <div
                  key={k}
                  className="aspect-[2/3] rounded-lg bg-muted/40 animate-pulse"
                />
              ))}
            </div>
          ) : results.length === 0 ? (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="search-empty"
            >
              <Search size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-display text-xl">{t("common.noResults")}</p>
              <p className="text-sm mt-2 font-body">Try a different keyword</p>
            </div>
          ) : (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              data-ocid="search-results"
            >
              {results.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <ContentCard item={item} onPlay={setPlaying} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}

      {!query.trim() && (
        <div className="text-center py-20 text-muted-foreground">
          <Search size={64} className="mx-auto mb-6 opacity-20" />
          <p className="font-display text-2xl font-bold mb-2">
            Search FStreamX
          </p>
          <p className="text-sm font-body">
            Find movies, anime, dramas, and music
          </p>
        </div>
      )}

      {playing && (
        <PlayerModal item={playing} onClose={() => setPlaying(null)} />
      )}
    </div>
  );
}
