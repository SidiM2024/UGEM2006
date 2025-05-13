
import { useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import PageTitle from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BackToHomeButton from "@/components/BackToHomeButton";

const WhatsappGroupsPage = () => {
  const { language, t } = useLanguage();
  const [bacNumber, setBacNumber] = useState("");
  const [showContacts, setShowContacts] = useState(false);
  
  const whatsappNumbers = [
    "31262707",
    "26500976",
    "33232419",
    "47420928",
    "42180465",
    "48141375"
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bacNumber.trim()) {
      setShowContacts(true);
    }
  };

  return (
    <div className="fade-in">
      <BackToHomeButton />
      <PageTitle 
        title={t("whatsappGroups")}
        subtitle={t("joinGroups")} 
      />
      
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6">
          {!showContacts ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="mb-4">
                {language === 'ar' 
                  ? "أدخل رقم الباكالوريا وسنوجهك للتواصل مع عضو الاتحاد المناسب لإضافتك إلى المجموعة"
                  : "Entrez votre numéro de baccalauréat et nous vous orienterons vers un membre de l'union approprié pour vous ajouter au groupe"}
              </p>
              
              <div className="space-y-2">
                <label htmlFor="bacNumber" className="text-sm font-medium">
                  {t("enterBacNumber")}
                </label>
                <Input 
                  id="bacNumber"
                  type="text" 
                  value={bacNumber}
                  onChange={(e) => setBacNumber(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-ugem-yellow hover:bg-ugem-yellow-dark text-black"
              >
                {t("joinButtonText")}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <p className="mb-4">
                {t("contactWhatsApp")}:
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {whatsappNumbers.map((number) => (
                  <a
                    key={number}
                    href={`https://wa.me/${number}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block"
                  >
                    <Button 
                      variant="outline"
                      className="w-full hover:text-ugem-yellow hover:border-ugem-yellow"
                    >
                      {number}
                    </Button>
                  </a>
                ))}
              </div>
              
              <Button 
                variant="link"
                onClick={() => {
                  setBacNumber("");
                  setShowContacts(false);
                }}
                className="w-full mt-4"
              >
                {language === 'ar' ? "عودة" : "Retour"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WhatsappGroupsPage;
