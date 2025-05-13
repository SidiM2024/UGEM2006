
import { useLanguage } from "@/providers/LanguageProvider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TypewriterEffect from "@/components/TypewriterEffect";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const { language, t } = useLanguage();

  const sections = [
    {
      title: t("institutions"),
      path: "/institutions",
      description: t("higherEducationInstitutions"),
      icon: "🏛️"
    },
    {
      title: t("examResults"),
      path: "/exam-results",
      description: t("examResults"),
      icon: "📝"
    },
    {
      title: t("baccalaureateResults"),
      path: "/baccalaureate-results",
      description: t("baccalaureateResults"),
      icon: "🎓"
    },
    {
      title: t("applicationGuidance"),
      path: "/application-guidance",
      description: t("applicationGuidance"),
      icon: "📋"
    },
    {
      title: t("archive"),
      path: "/archive",
      description: t("archive"),
      icon: "📚"
    },
    {
      title: t("institutionsGuide"),
      path: "/institutions-guide",
      description: t("institutionsGuide"),
      icon: "🔍"
    },
    {
      title: t("culturalSportSeason"),
      path: "/cultural-sport-season",
      description: t("culturalSportSeason"),
      icon: "🎭"
    },
    {
      title: t("whatsappGroups"),
      path: "/whatsapp-groups",
      description: t("whatsappGroups"),
      icon: "💬"
    },
  ];

  const getTypewriterTexts = () => {
    return language === "ar" 
      ? ["الاتحاد العام للطلاب الموريتانيين", "نخدم الطلاب نخدم الوطن"] 
      : ["Union Générale des Étudiants Mauritaniens", "Servir les étudiants, servir la patrie"];
  };

  return (
    <div className="fade-in">
      <section className="py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-ugem-yellow/10 rounded-3xl -z-10 transform skew-y-1"></div>
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48">
              <AspectRatio ratio={1/1}>
                <img 
                  src="/lovable-uploads/b54081de-64b1-4b72-badd-0ff12c02f4f6.png" 
                  alt="UGEM Logo" 
                  className="w-full h-full object-contain animate-scale-in drop-shadow-lg"
                />
              </AspectRatio>
            </div>
          </div>
          
          <div className="h-16 flex justify-center items-center mb-8">
            <TypewriterEffect 
              textArray={getTypewriterTexts()} 
              typingSpeed={80}
              deletingSpeed={40}
              className="text-2xl md:text-4xl font-bold text-ugem-yellow"
            />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-8 text-muted-foreground">
              {language === "ar" 
                ? "منصة الطلاب الموريتانيين للوصول إلى جميع المعلومات والخدمات التعليمية"
                : "La plateforme des étudiants mauritaniens pour accéder à toutes les informations et services éducatifs"}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link key={section.path} to={section.path}>
              <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-ugem-yellow transform hover:-translate-y-1 bg-gradient-to-br from-background to-ugem-yellow/5 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-ugem-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-4xl mb-3">{section.icon}</div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-ugem-yellow transition-colors">{section.title}</h2>
                  <p className="text-sm text-muted-foreground mb-6">{section.description}</p>
                  <Button className="mt-auto bg-ugem-yellow hover:bg-ugem-yellow-dark text-black group-hover:scale-105 transition-transform">
                    {t('explore')}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
