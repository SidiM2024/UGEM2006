
import { useLanguage } from "@/providers/LanguageProvider";
import PageTitle from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { institutions } from "@/data/institutions";
import BackToHomeButton from "@/components/BackToHomeButton";

const InstitutionsPage = () => {
  const { language, t } = useLanguage();

  return (
    <div className="fade-in">
      <BackToHomeButton />
      <PageTitle title={t("higherEducationInstitutions")} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {institutions.map((institution) => (
          <Link 
            key={institution.id} 
            to={`/institutions/${institution.id}`}
            className="block h-full"
          >
            <Card className="h-full hover:shadow-md transition-shadow border-2 hover:border-ugem-yellow">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">
                  {language === 'ar' ? institution.nameAr : institution.nameFr}
                </h2>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold mb-2">{t("specializations")}</h3>
                  <ul className="text-sm space-y-1">
                    {(language === 'ar' ? institution.specializationsAr : institution.specializationsFr)
                      .slice(0, 2)
                      .map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <Badge className="bg-ugem-yellow text-black me-2 mt-1">
                            {index + 1}
                          </Badge>
                          <span>{spec}</span>
                        </li>
                      ))}
                    {(language === 'ar' ? institution.specializationsAr : institution.specializationsFr).length > 2 && (
                      <li className="text-muted-foreground">...</li>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold mb-2">{t("services")}</h3>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      {institution.housing ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <X size={16} className="text-red-500" />
                      )}
                      <span>{t("housing")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {institution.transport ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <X size={16} className="text-red-500" />
                      )}
                      <span>{t("transport")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {institution.restaurant ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <X size={16} className="text-red-500" />
                      )}
                      <span>{t("restaurant")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InstitutionsPage;
