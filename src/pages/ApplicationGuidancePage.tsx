
import { useLanguage } from "@/providers/LanguageProvider";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import BackToHomeButton from "@/components/BackToHomeButton";

const ApplicationGuidancePage = () => {
  const { t } = useLanguage();

  return (
    <div className="fade-in">
      <BackToHomeButton />
      <PageTitle title={t("applicationGuidance")} />
      
      <Card className="max-w-lg mx-auto">
        <CardContent className="p-6 text-center">
          <Button 
            size="lg"
            className="bg-ugem-yellow hover:bg-ugem-yellow-dark text-black"
            onClick={() => window.open("https://www.tewjih.com/rescnb-2024778sgqtsrffe45qsHusydu.php", '_blank')}
          >
            {t("applicationGuidance")}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationGuidancePage;
