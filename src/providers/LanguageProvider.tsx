
import { createContext, useContext, useEffect, useState } from "react";
import arabicTranslations from "@/locales/ar";
import frenchTranslations from "@/locales/fr";

export type Language = "ar" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  ar: arabicTranslations,
  fr: frenchTranslations,
};

const LanguageContext = createContext<LanguageContextType>({
  language: "ar",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("ugem-language") as Language;
    return savedLanguage || "ar";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.classList.remove("rtl", "ltr");
    document.documentElement.classList.add(language === "ar" ? "rtl" : "ltr");
    localStorage.setItem("ugem-language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const translationObj = translations[language];
    return translationObj[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
