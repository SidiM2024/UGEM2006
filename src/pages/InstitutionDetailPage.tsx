
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/providers/LanguageProvider";
import { institutions } from "@/data/institutions";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BackToHomeButton from "@/components/BackToHomeButton";

const InstitutionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  const institution = institutions.find(inst => inst.id === id);
  
  if (!institution) {
    return (
      <div className="text-center py-16">
        <BackToHomeButton />
        <h1 className="text-2xl font-bold mb-4">{t('institutions')}</h1>
        <p className="text-muted-foreground mb-4">Institution not found</p>
        <Button onClick={() => navigate('/institutions')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('institutions')}
        </Button>
      </div>
    );
  }
  
  return (
    <div className="fade-in">
      <BackToHomeButton />
      <Button 
        variant="outline" 
        onClick={() => navigate('/institutions')} 
        className="mb-4 ml-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('institutions')}
      </Button>
      
      <PageTitle title={language === 'ar' ? institution.nameAr : institution.nameFr} />
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">{t("specializations")}</h2>
            <ul className="space-y-3">
              {(language === 'ar' ? institution.specializationsAr : institution.specializationsFr).map((spec, index) => (
                <li key={index} className="flex items-start">
                  <Badge className="bg-ugem-yellow text-black me-3 mt-1">
                    {index + 1}
                  </Badge>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">{t("services")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                {institution.housing ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
                <div>
                  <span className="font-medium">{t("housing")}</span>
                  <p className="text-sm text-muted-foreground">
                    {institution.housing ? t("available") : t("notAvailable")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {institution.transport ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
                <div>
                  <span className="font-medium">{t("transport")}</span>
                  <p className="text-sm text-muted-foreground">
                    {institution.transport ? t("available") : t("notAvailable")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {institution.restaurant ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <X size={20} className="text-red-500" />
                )}
                <div>
                  <span className="font-medium">{t("restaurant")}</span>
                  <p className="text-sm text-muted-foreground">
                    {institution.restaurant ? t("available") : t("notAvailable")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionDetailPage;
