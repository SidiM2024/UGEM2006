
import { useLanguage } from "@/providers/LanguageProvider";
import PageTitle from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BackToHomeButton from "@/components/BackToHomeButton";

const CulturalSportSeasonPage = () => {
  const { language, t } = useLanguage();
  
  const competitions = [
    {
      nameAr: "بطولة كرة القدم الـ16",
      nameFr: "Championnat de Football 16",
      conditionsAr: [
        "أن لايزيد الفريق على 8 لاعبين ولايقل عن 5",
        "دفع رسوم الاشتراك 400 للفريق",
        "نسخة من إفادة التسجيل"
      ],
      conditionsFr: [
        "L'équipe ne doit pas dépasser 8 joueurs et ne pas être inférieure à 5",
        "Frais d'inscription 400 pour l'équipe",
        "Copie du certificat d'inscription"
      ]
    },
    {
      nameAr: "بطولة كرة اليد",
      nameFr: "Tournoi de Handball",
      conditionsAr: [
        "دفع الرسوم 250 للفريق",
        "نسخة من إفادة التسجيل"
      ],
      conditionsFr: [
        "Frais d'inscription 250 pour l'équipe",
        "Copie du certificat d'inscription"
      ]
    },
    {
      nameAr: "بطولة ابلايستيشن",
      nameFr: "Tournoi de PlayStation",
      conditionsAr: [
        "دفع الرسوم 20 أوقية للفرد",
        "إفادة التسجيل"
      ],
      conditionsFr: [
        "Frais d'inscription 20 ouguiyas par personne",
        "Certificat d'inscription"
      ]
    },
    {
      nameAr: "بطولة الألعاب التقليدية",
      nameFr: "Tournoi de Jeux Traditionnels",
      conditionsAr: [
        "دفع الرسوم 20 للفرد",
        "نسخة من إفادة التسجيل"
      ],
      conditionsFr: [
        "Frais d'inscription 20 ouguiyas par personne",
        "Copie du certificat d'inscription"
      ]
    },
    {
      nameAr: "سباق المارثون",
      nameFr: "Course de Marathon",
      conditionsAr: [
        "دفع الرسوم 20 أوقية للفرد",
        "نسخة من إفادة التسجيل"
      ],
      conditionsFr: [
        "Frais d'inscription 20 ouguiyas par personne",
        "Copie du certificat d'inscription"
      ]
    },
    {
      nameAr: "مسابقة القرآن الكريم",
      nameFr: "Concours du Saint Coran",
      conditionsAr: [
        "دفع الرسوم 40 أوقية للفرد",
        "نسخة من إفادة التسجيل"
      ],
      conditionsFr: [
        "Frais d'inscription 40 ouguiyas par personne",
        "Copie du certificat d'inscription"
      ]
    },
    {
      nameAr: "المسابقة الثقافية",
      nameFr: "Concours Culturel",
      conditionsAr: [
        "دفع الرسوم 50 أوقية للفريق",
        "إفادة التسجيل"
      ],
      conditionsFr: [
        "Frais d'inscription 50 ouguiyas pour l'équipe",
        "Certificat d'inscription"
      ]
    }
  ];

  return (
    <div className="fade-in">
      <BackToHomeButton />
      <PageTitle title={t("culturalSportSeason")} />
      
      <Card className="mb-8">
        <CardContent className="p-6">
          <p className="mb-6">
            {language === 'ar' 
              ? "ترفع اللجنة التحضيرية للموسم الثقافي والرياضي إلى علم جميع طلاب وطالبات مؤسسات التعليم العالي أن باب دفع ملفات مسابقات الموسم الثقافي والرياضي سيفتح الخميس 11 يناير 2024 بجميع مؤسسات التعليم العالي الوطني في البطولات والمسابقات التالية:"
              : "Le comité préparatoire de la saison culturelle et sportive informe tous les étudiants des établissements d'enseignement supérieur que le dépôt des dossiers pour les compétitions de la saison culturelle et sportive sera ouvert le jeudi 11 janvier 2024 dans tous les établissements d'enseignement supérieur nationaux pour les championnats et concours suivants:"}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitions.map((comp, index) => (
              <Card key={index} className="border-2 border-ugem-yellow-light">
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold mb-3">
                    {language === 'ar' ? comp.nameAr : comp.nameFr}
                  </h2>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-2">
                      {language === 'ar' ? "شروط المشاركة:" : "Conditions de participation:"}
                    </h3>
                    <ul className="space-y-2">
                      {(language === 'ar' ? comp.conditionsAr : comp.conditionsFr).map((cond, idx) => (
                        <li key={idx} className="flex items-start">
                          <Badge className="bg-ugem-yellow text-black me-2 mt-1 shrink-0">
                            {idx + 1}
                          </Badge>
                          <span>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="mt-8 text-center text-ugem-yellow font-bold">
            #{t("tagline")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CulturalSportSeasonPage;
