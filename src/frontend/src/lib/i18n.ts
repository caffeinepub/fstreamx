import React, { createContext, useContext, useState } from "react";

export type Language = "EN" | "HI" | "UR" | "ES";

export type TranslationKey =
  | "nav.home"
  | "nav.movies"
  | "nav.anime"
  | "nav.dramas"
  | "nav.music"
  | "nav.admin"
  | "nav.search"
  | "hero.watchNow"
  | "hero.moreInfo"
  | "common.play"
  | "common.close"
  | "common.search"
  | "common.loading"
  | "common.noResults"
  | "category.movies"
  | "category.anime"
  | "category.dramas"
  | "category.music"
  | "detail.genre"
  | "detail.year"
  | "detail.rating"
  | "detail.duration"
  | "detail.seasons"
  | "detail.episodes"
  | "detail.parts"
  | "detail.season"
  | "detail.episode"
  | "detail.part"
  | "detail.noEpisodes"
  | "admin.title"
  | "admin.addContent"
  | "admin.editContent"
  | "admin.deleteContent"
  | "admin.save"
  | "admin.cancel"
  | "player.comingSoon"
  | "player.streamSoon"
  | "search.placeholder"
  | "search.results";

type Translations = Record<TranslationKey, string>;

const translations: Record<Language, Translations> = {
  EN: {
    "nav.home": "Home",
    "nav.movies": "Movies",
    "nav.anime": "Anime",
    "nav.dramas": "Dramas",
    "nav.music": "Music",
    "nav.admin": "Admin",
    "nav.search": "Search",
    "hero.watchNow": "Watch Now",
    "hero.moreInfo": "More Info",
    "common.play": "Play",
    "common.close": "Close",
    "common.search": "Search",
    "common.loading": "Loading...",
    "common.noResults": "No results found",
    "category.movies": "Movies",
    "category.anime": "Anime",
    "category.dramas": "Dramas",
    "category.music": "Music",
    "detail.genre": "Genre",
    "detail.year": "Year",
    "detail.rating": "Rating",
    "detail.duration": "Duration",
    "detail.seasons": "Seasons",
    "detail.episodes": "Episodes",
    "detail.parts": "Parts",
    "detail.season": "Season",
    "detail.episode": "Episode",
    "detail.part": "Part",
    "detail.noEpisodes": "No episodes available yet",
    "admin.title": "Admin Panel",
    "admin.addContent": "Add Content",
    "admin.editContent": "Edit Content",
    "admin.deleteContent": "Delete",
    "admin.save": "Save",
    "admin.cancel": "Cancel",
    "player.comingSoon": "Coming Soon",
    "player.streamSoon": "Stream starts soon — stay tuned!",
    "search.placeholder": "Search movies, anime, dramas, music...",
    "search.results": "Search Results",
  },
  HI: {
    "nav.home": "होम",
    "nav.movies": "मूवीज़",
    "nav.anime": "एनीमे",
    "nav.dramas": "ड्रामा",
    "nav.music": "म्यूज़िक",
    "nav.admin": "एडमिन",
    "nav.search": "खोजें",
    "hero.watchNow": "अभी देखें",
    "hero.moreInfo": "अधिक जानकारी",
    "common.play": "चलाएं",
    "common.close": "बंद करें",
    "common.search": "खोजें",
    "common.loading": "लोड हो रहा है...",
    "common.noResults": "कोई परिणाम नहीं मिला",
    "category.movies": "मूवीज़",
    "category.anime": "एनीमे",
    "category.dramas": "ड्रामा",
    "category.music": "म्यूज़िक",
    "detail.genre": "शैली",
    "detail.year": "वर्ष",
    "detail.rating": "रेटिंग",
    "detail.duration": "अवधि",
    "detail.seasons": "सीज़न",
    "detail.episodes": "एपिसोड",
    "detail.parts": "भाग",
    "detail.season": "सीज़न",
    "detail.episode": "एपिसोड",
    "detail.part": "भाग",
    "detail.noEpisodes": "अभी कोई एपिसोड उपलब्ध नहीं",
    "admin.title": "एडमिन पैनल",
    "admin.addContent": "सामग्री जोड़ें",
    "admin.editContent": "सामग्री संपादित करें",
    "admin.deleteContent": "हटाएं",
    "admin.save": "सहेजें",
    "admin.cancel": "रद्द करें",
    "player.comingSoon": "जल्द आ रहा है",
    "player.streamSoon": "स्ट्रीम जल्द शुरू होगी — बने रहें!",
    "search.placeholder": "मूवी, एनीमे, ड्रामा, म्यूज़िक खोजें...",
    "search.results": "खोज परिणाम",
  },
  UR: {
    "nav.home": "ہوم",
    "nav.movies": "فلمیں",
    "nav.anime": "انیمے",
    "nav.dramas": "ڈرامے",
    "nav.music": "موسیقی",
    "nav.admin": "ایڈمن",
    "nav.search": "تلاش",
    "hero.watchNow": "ابھی دیکھیں",
    "hero.moreInfo": "مزید معلومات",
    "common.play": "چلائیں",
    "common.close": "بند کریں",
    "common.search": "تلاش",
    "common.loading": "لوڈ ہو رہا ہے...",
    "common.noResults": "کوئی نتیجہ نہیں ملا",
    "category.movies": "فلمیں",
    "category.anime": "انیمے",
    "category.dramas": "ڈرامے",
    "category.music": "موسیقی",
    "detail.genre": "صنف",
    "detail.year": "سال",
    "detail.rating": "ریٹنگ",
    "detail.duration": "دورانیہ",
    "detail.seasons": "سیزنز",
    "detail.episodes": "اقساط",
    "detail.parts": "حصے",
    "detail.season": "سیزن",
    "detail.episode": "قسط",
    "detail.part": "حصہ",
    "detail.noEpisodes": "ابھی کوئی قسط دستیاب نہیں",
    "admin.title": "ایڈمن پینل",
    "admin.addContent": "مواد شامل کریں",
    "admin.editContent": "مواد ترمیم کریں",
    "admin.deleteContent": "حذف کریں",
    "admin.save": "محفوظ کریں",
    "admin.cancel": "منسوخ کریں",
    "player.comingSoon": "جلد آ رہا ہے",
    "player.streamSoon": "اسٹریم جلد شروع ہوگی — انتظار کریں!",
    "search.placeholder": "فلم، انیمے، ڈرامے، موسیقی تلاش کریں...",
    "search.results": "تلاش کے نتائج",
  },
  ES: {
    "nav.home": "Inicio",
    "nav.movies": "Películas",
    "nav.anime": "Anime",
    "nav.dramas": "Dramas",
    "nav.music": "Música",
    "nav.admin": "Admin",
    "nav.search": "Buscar",
    "hero.watchNow": "Ver Ahora",
    "hero.moreInfo": "Más Información",
    "common.play": "Reproducir",
    "common.close": "Cerrar",
    "common.search": "Buscar",
    "common.loading": "Cargando...",
    "common.noResults": "Sin resultados",
    "category.movies": "Películas",
    "category.anime": "Anime",
    "category.dramas": "Dramas",
    "category.music": "Música",
    "detail.genre": "Género",
    "detail.year": "Año",
    "detail.rating": "Calificación",
    "detail.duration": "Duración",
    "detail.seasons": "Temporadas",
    "detail.episodes": "Episodios",
    "detail.parts": "Partes",
    "detail.season": "Temporada",
    "detail.episode": "Episodio",
    "detail.part": "Parte",
    "detail.noEpisodes": "Aún no hay episodios disponibles",
    "admin.title": "Panel de Admin",
    "admin.addContent": "Agregar Contenido",
    "admin.editContent": "Editar Contenido",
    "admin.deleteContent": "Eliminar",
    "admin.save": "Guardar",
    "admin.cancel": "Cancelar",
    "player.comingSoon": "Próximamente",
    "player.streamSoon": "¡El stream comienza pronto — mantente atento!",
    "search.placeholder": "Buscar películas, anime, dramas, música...",
    "search.results": "Resultados de búsqueda",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");
  const t = (key: TranslationKey) => translations[language][key] ?? key;
  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage, t } },
    children,
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
