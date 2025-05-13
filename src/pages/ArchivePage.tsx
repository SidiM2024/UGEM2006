
import { useLanguage } from "@/providers/LanguageProvider";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { archives } from "@/data/archives";
import BackToHomeButton from "@/components/BackToHomeButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArchivePage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="fade-in">
      <BackToHomeButton />
      <PageTitle title={t("archive")} />
      
      <div className="grid grid-cols-1 gap-6">
        {archives.map((archive) => (
          <Card key={archive.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">
                {language === 'ar' ? archive.nameAr : archive.nameFr}
              </h2>
              
              {archive.items ? (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="items">
                    <AccordionTrigger className="text-left">
                      {language === 'ar' ? archive.nameAr : archive.nameFr}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 gap-4 mt-2">
                        {archive.items.map((item) => (
                          <Button 
                            key={item.id}
                            variant="outline"
                            className="w-full justify-between"
                            onClick={() => window.open(item.url, '_blank')}
                          >
                            <span>{language === 'ar' ? item.nameAr : item.nameFr}</span>
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Button 
                  className="w-full bg-ugem-yellow hover:bg-ugem-yellow-dark text-black"
                  onClick={() => window.open(archive.url, '_blank')}
                >
                  {language === 'ar' ? archive.nameAr : archive.nameFr}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
