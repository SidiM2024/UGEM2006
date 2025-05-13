
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const BackToHomeButton = () => {
  const { language } = useLanguage();
  
  return (
    <Link to="/" className="inline-block mb-4">
      <Button 
        variant="outline" 
        className="group hover:bg-ugem-yellow hover:text-black border-ugem-yellow"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:text-black" />
        {language === "ar" ? "العودة للصفحة الرئيسية" : "Retour à l'accueil"}
      </Button>
    </Link>
  );
};

export default BackToHomeButton;
