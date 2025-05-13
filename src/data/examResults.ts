
export interface ExamResult {
  id: string;
  nameAr: string;
  nameFr: string;
  url: string;
}

export const examResults: ExamResult[] = [
  {
    id: "fsje",
    nameAr: "نتائج كلية العلوم القانونية والاقتصادية",
    nameFr: "Résultats de la Faculté des Sciences Juridiques et Économiques",
    url: "http://resultats.una.mr/FSJE/"
  },
  {
    id: "flsh",
    nameAr: "نتائج الاداب والعلوم الإسلامية",
    nameFr: "Résultats des Lettres et Sciences Islamiques",
    url: "http://resultats.una.mr/FLSH/"
  },
  {
    id: "fst",
    nameAr: "نتائج كلية العلوم والتقنيات",
    nameFr: "Résultats de la Faculté des Sciences et Techniques",
    url: "http://resultats.una.mr/FST/"
  },
  {
    id: "iscae",
    nameAr: "المعهد العالي للمحاسبة وادارة المؤسسات",
    nameFr: "Institut Supérieur de Comptabilité et d'Administration des Entreprises",
    url: "https://www.iscae.mr/resultats"
  },
  {
    id: "iup",
    nameAr: "المعهد الجامعي المهني",
    nameFr: "Institut Universitaire Professionnel",
    url: "http://resultats.una.mr/IUP/"
  }
];
