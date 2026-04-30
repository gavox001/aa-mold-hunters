"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-eco-primary-light/30 hover:border-eco-primary hover:bg-eco-primary/5 transition-all group"
      aria-label={`Switch to ${locale === "en" ? "Spanish" : "English"}`}
    >
      <Globe className="w-4 h-4 text-eco-primary group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-bold text-foreground uppercase tracking-wider">
        {locale === "en" ? "ES" : "EN"}
      </span>
    </button>
  );
}
