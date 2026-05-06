"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "ur";

const LanguageContext = createContext({
  lang: "en" as Lang,
  setLang: (lang: Lang) => {},
});

export function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);