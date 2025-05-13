
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "@/providers/LanguageProvider";

const Layout = () => {
  const { language } = useLanguage();
  
  return (
    <div className={`min-h-screen flex flex-col bg-background text-foreground ${language === "ar" ? "rtl" : "ltr"}`}>
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
