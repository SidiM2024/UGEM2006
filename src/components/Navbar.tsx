
import { useLanguage, type Language } from "@/providers/LanguageProvider";
import { useTheme } from "@/providers/ThemeProvider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const newLang: Language = language === "ar" ? "fr" : "ar";
    setLanguage(newLang);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <span className="text-lg font-bold text-ugem-yellow">{language === "ar" ? "U.G.E.M" : "U.G.E.M"}</span>
            <span className="hidden md:inline-block font-semibold">{t('siteName')}</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
            title={language === "ar" ? "Français" : "العربية"}
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
