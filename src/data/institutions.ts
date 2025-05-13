
export interface Institution {
  id: string;
  nameAr: string;
  nameFr: string;
  specializationsAr: string[];
  specializationsFr: string[];
  housing: boolean;
  transport: boolean;
  restaurant: boolean;
}

export const institutions: Institution[] = [
  {
    id: "esp",
    nameAr: "المدرسة العليا متعدد التقنيات",
    nameFr: "École Supérieure Polytechnique",
    specializationsAr: [
      "المعهد التحضيري للمدارس العليا للمهندسين: الرياضيات + الفيزياء + علوم الهندسة",
      "المعهد العالي لمهن الطاقة: الهندسة الكهربائية والطاقة المتجددة، الهندسة الكيمياء وهندسة البترول",
      "المعهد العالي لمهن المعادن بالزويرات: صيانة الانظمة الهوائية والهديورلوكية، تشخيص وصيانة الانظمة الاتوماتكية، صيانة السيارات",
      "المعهد العالي لمهن الاحصاء: تحليل البيانات والاحصاء المطبق على الاقتصاد",
      "المعهد العالي لمهن البناء والاشغال العمومية والعمران ب الاك: هندسة المدنية"
    ],
    specializationsFr: [
      "Institut Préparatoire aux Grandes Écoles d'Ingénieurs: Mathématiques + Physique + Sciences de l'Ingénieur",
      "Institut Supérieur des Métiers de l'Énergie: Génie Électrique et Énergies Renouvelables, Génie Chimique et Génie Pétrolier",
      "Institut Supérieur des Métiers des Mines à Zouérat: Maintenance des Systèmes Pneumatiques et Hydrauliques, Diagnostic et Maintenance des Systèmes Automatiques, Maintenance Automobile",
      "Institut Supérieur des Métiers de la Statistique: Analyse des Données et Statistiques Appliquées à l'Économie",
      "Institut Supérieur des Métiers du Bâtiment, des Travaux Publics et de l'Urbanisme à Aleg: Génie Civil"
    ],
    housing: true,
    transport: true,
    restaurant: true
  },
  {
    id: "fmpo",
    nameAr: "كلية الطب والصيدلة وطب الاسنان",
    nameFr: "Faculté de Médecine, de Pharmacie et d'Odontologie",
    specializationsAr: [
      "الطب البشري",
      "الصيدلة",
      "طب الاسنان"
    ],
    specializationsFr: [
      "Médecine Humaine",
      "Pharmacie",
      "Dentisterie"
    ],
    housing: true,
    transport: true,
    restaurant: true
  },
  {
    id: "fst",
    nameAr: "كلية العلوم والتقنيات",
    nameFr: "Faculté des Sciences et Techniques",
    specializationsAr: [
      "البيولوجيا والجيولوجيا",
      "الفيزياء والكيمياء",
      "الرياضيات والمعلوماتية والفيزياء"
    ],
    specializationsFr: [
      "Biologie et Géologie",
      "Physique et Chimie",
      "Mathématiques, Informatique et Physique"
    ],
    housing: true,
    transport: true,
    restaurant: true
  },
  {
    id: "flsh",
    nameAr: "كلية الاداب والعلوم الانسانية",
    nameFr: "Faculté des Lettres et Sciences Humaines",
    specializationsAr: [
      "المهنية: البيئة والتنمية المستدامه، التنمية المحلية، العمل الاجتماعي",
      "اللغات والادب: الدراسات العربية، الدراسات الفرنسية، الدراسات الانكليزية، اللغة الصينية، اللغة التركية، اللغة الاسبانية، اللغات الوطنية",
      "العلوم الانسانية: التاريخ والجغرافيا، الجغرافيا، علوم الاجتماع، الفلسفة"
    ],
    specializationsFr: [
      "Professionnel: Environnement et Développement Durable, Développement Local, Travail Social",
      "Langues et Littérature: Études Arabes, Études Françaises, Études Anglaises, Langue Chinoise, Langue Turque, Langue Espagnole, Langues Nationales",
      "Sciences Humaines: Histoire et Géographie, Géographie, Sciences Sociales, Philosophie"
    ],
    housing: true,
    transport: true,
    restaurant: true
  },
  {
    id: "isn",
    nameAr: "المعهد العالي لرقمنة",
    nameFr: "Institut Supérieur du Numérique",
    specializationsAr: [
      "تطوير النظام المعلوماتية",
      "الشبكات وحماية الانظمة",
      "التواصل الرقمي والوسائط المتعددة"
    ],
    specializationsFr: [
      "Développement de Systèmes Informatiques",
      "Réseaux et Sécurité des Systèmes",
      "Communication Numérique et Multimédia"
    ],
    housing: true,
    transport: true,
    restaurant: true
  },
  {
    id: "iscae",
    nameAr: "المعهد العالي للمحاسبة وادارة المؤسسات",
    nameFr: "Institut Supérieur de Comptabilité et d'Administration des Entreprises",
    specializationsAr: [
      "المالية والمحاسبة",
      "البنك وتأمين",
      "تسيير الموارد البشرية",
      "تقنيات التجارة والتسويق",
      "التنمية المعلوماتية"
    ],
    specializationsFr: [
      "Finance et Comptabilité",
      "Banque et Assurance",
      "Gestion des Ressources Humaines",
      "Techniques Commerciales et Marketing",
      "Développement Informatique"
    ],
    housing: false,
    transport: false,
    restaurant: true
  },
  {
    id: "enesss",
    nameAr: "المدرسة الوطنية العليا لعلوم الصحة",
    nameFr: "École Nationale Supérieure des Sciences de la Santé",
    specializationsAr: [
      "التخدير",
      "علوم التمريض",
      "علوم التوليد",
      "العلاج الطبي",
      "التصوير الطبي"
    ],
    specializationsFr: [
      "Anesthésie",
      "Sciences Infirmières",
      "Obstétrique",
      "Thérapie Médicale",
      "Imagerie Médicale"
    ],
    housing: false,
    transport: false,
    restaurant: true
  }
];

// Add the rest of the institutions following the same structure
