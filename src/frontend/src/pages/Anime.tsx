import { Tv } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ContentCard } from "../components/ContentCard";
import { PlayerModal } from "../components/PlayerModal";
import { useContentByCategory } from "../lib/backend-client";
import { useLanguage } from "../lib/i18n";
import type { ContentItem } from "../types/content";

export default function AnimePage() {
  const { data: anime = [], isLoading } = useContentByCategory("anime");
  const { t } = useLanguage();
  const [playing, setPlaying] = useState<ContentItem | null>(null);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Tv size={28} className="text-accent" />
        <h1 className="font-display font-black text-3xl text-foreground">
          {t("category.anime")}
        </h1>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }, (_, i) => `skel-${i}`).map((k) => (
            <div
              key={k}
              className="aspect-[2/3] rounded-lg bg-muted/40 animate-pulse"
            />
          ))}
        </div>
      ) : anime.length === 0 ? (
        <div
          className="text-center py-24 text-muted-foreground"
          data-ocid="anime-empty"
        >
          <Tv size={48} className="mx-auto mb-4 opacity-30" />
          <p className="font-display text-xl">{t("common.noResults")}</p>
        </div>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          data-ocid="anime-grid"
        >
          {anime.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <ContentCard item={item} onPlay={setPlaying} />
            </motion.div>
          ))}
        </div>
      )}

      {playing && (
        <PlayerModal item={playing} onClose={() => setPlaying(null)} />
      )}
    </div>
  );
}
