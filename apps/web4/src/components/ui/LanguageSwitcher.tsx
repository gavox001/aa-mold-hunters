"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative inline-flex items-center">
      <select
        value={locale}
        onChange={(e) => handleChange(e.target.value)}
        className="appearance-none inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-background/10 text-foreground text-sm hover:bg-background/20 transition-all duration-300 cursor-pointer pr-7 border border-border"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option
            key={lang.code}
            value={lang.code}
            className="bg-background text-foreground"
          >
            {lang.label}
          </option>
        ))}
      </select>
      <Globe className="absolute right-1.5 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
    </div>
  );
}