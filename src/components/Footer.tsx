
import { useLanguage } from "@/providers/LanguageProvider";
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-background to-ugem-yellow/10 py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/b54081de-64b1-4b72-badd-0ff12c02f4f6.png" 
              alt="UGEM Logo"
              className="w-12 h-12 mr-3" 
            />
            <div>
              <h3 className="text-lg font-bold text-ugem-yellow">{language === "ar" ? "U.G.E.M" : "U.G.E.M"}</h3>
              <p className="text-sm text-muted-foreground">{t('tagline')}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm font-medium">{t('contact')}</span>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1CSpbdpScq/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 hover:bg-ugem-yellow transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ugem2006.com?_t=ZM-8wJvwDTl3gL&_r=1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 hover:bg-ugem-yellow transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                aria-label="TikTok"
              >
                <span className="font-bold text-sm">TT</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-muted text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t('siteName')}. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
