"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { getDictionary, type Dictionary, type Lang } from "@/lib/i18n";

type LangCtxValue = {
  lang: Lang;
  t: Dictionary;
  setLang: (l: Lang) => void;
};

const LangCtx = createContext<LangCtxValue | null>(null);

export function LangProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = l;
  }, []);

  return (
    <LangCtx.Provider value={{ lang, t: getDictionary(lang), setLang }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang(): LangCtxValue {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
