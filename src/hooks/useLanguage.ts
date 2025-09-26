import { useState, useEffect } from "react";

type Lang = "vi" | "en";

const translations: Record<Lang, Record<string, string>> = {
  vi: {
    about: "Giới Thiệu",
    skills: "Kỹ Năng",
    projects: "Dự Án",
    experience: "Kinh Nghiệm",
    education: "Học Vấn",
    contact: "Liên Hệ",
    toggleLang: "EN"
  },
  en: {
    about: "About",
    skills: "Skills",
    project: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    toggleLang: "VI",
  },
};

export const useLanguage = () => {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "vi";
  });
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key: string) => translations[lang][key] || [key];
  const toggleLang = () => setLang(lang === "vi" ? "en" : "vi");

  return { lang, t, setLang, toggleLang };
};
