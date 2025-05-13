
import { useLanguage } from "@/providers/LanguageProvider";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import BackToHomeButton from "@/components/BackToHomeButton";

const InstitutionsGuidePage = () => {
  const { t } = useLanguage();

  return (
    <div className="fade-in">
      <BackToHomeButton />
      <PageTitle title={t("institutionsGuide")} />
      
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6 text-center">
          <p className="mb-6">{t("downloadGuide")}</p>
          <Button 
            size="lg"
            className="bg-ugem-yellow hover:bg-ugem-yellow-dark text-black"
            onClick={() => window.open("https://drive.google.com/file/d/1vpFcBhtWlge5aGVxLQck82lhp7boPICC/view?usp=sharing", '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            {t("institutionsGuide")}
          </Button>
          
          <p className="mt-8 text-ugem-yellow font-bold">#{t("tagline")}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionsGuidePage;
