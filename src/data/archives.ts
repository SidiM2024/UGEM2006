
export interface Archive {
  id: string;
  nameAr: string;
  nameFr: string;
  url: string;
  items?: Archive[];
}

export const archives: Archive[] = [
  {
    id: "iserie",
    nameAr: "ارشيف المعهد العالي لدراسة والبحوث الإسلامية",
    nameFr: "Archives de l'Institut Supérieur d'Études et de Recherche Islamiques",
    url: "https://www.mediafire.com/folder/sosbcl9xhzngv/Ugem+iserie"
  },
  {
    id: "iscae",
    nameAr: "ارشيف المعهد العالي للمحاسبة وادارة المؤسسات",
    nameFr: "Archives de l'Institut Supérieur de Comptabilité et d'Administration des Entreprises",
    url: "https://www.mediafire.com/folder/fa001xag6h8ic/Banque+assurence"
  },
  {
    id: "fmpo",
    nameAr: "ارشيف كلية الطب والصيدلة وطب الاسنان",
    nameFr: "Archives de la Faculté de Médecine, de Pharmacie et d'Odontologie",
    url: "#",  // Adding a placeholder URL to satisfy the interface
    items: [
      {
        id: "dcem3",
        nameAr: "ارشيف Dcem 3",
        nameFr: "Archives Dcem 3",
        url: "https://drive.google.com/drive/folders/11ew6xTqkPGWVJy1NE4jnDZxckt8hErBz"
      },
      {
        id: "dcem4",
        nameAr: "ارشيف Dcem 4",
        nameFr: "Archives Dcem 4",
        url: "https://drive.google.com/drive/folders/1ZpoL2H-vcYIO6SNaEYWBk3UYXr7w_GK1"
      },
      {
        id: "dcem2",
        nameAr: "ارشيف Dcem 2",
        nameFr: "Archives Dcem 2",
        url: "https://drive.google.com/drive/folders/12xxIiHeOQFEZ3HtdoHWfK2epjliMhW22"
      }
    ]
  },
  {
    id: "flsh",
    nameAr: "ارشيف كلية الاداب والعلوم الانسانية",
    nameFr: "Archives de la Faculté des Lettres et Sciences Humaines",
    url: "https://www.mediafire.com/folder/execc5zf2z0nw/Ugem+adab"
  },
  {
    id: "iset",
    nameAr: "ارشيف المعهد العالي للتعليم التكنولوجي في روصو",
    nameFr: "Archives de l'Institut Supérieur d'Enseignement Technologique de Rosso",
    url: "https://www.mediafire.com/folder/naswi06xiukfx/Ugem+rosso"
  }
];
