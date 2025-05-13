
import { useLanguage } from "@/providers/LanguageProvider";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { examResults } from "@/data/examResults";
import BackToHomeButton from "@/components/BackToHomeButton";

const ExamResultsPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="fade-in">
      <BackToHomeButton />
      <PageTitle title={t("examResults")} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examResults.map((result) => (
          <Card key={result.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">
                {language === 'ar' ? result.nameAr : result.nameFr}
              </h2>
              
              <Button 
                className="w-full bg-ugem-yellow hover:bg-ugem-yellow-dark text-black"
                onClick={() => window.open(result.url, '_blank')}
              >
                {language === 'ar' ? result.nameAr : result.nameFr}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExamResultsPage;
