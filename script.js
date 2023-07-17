function changeFiliere() {
  var firstSelectBox = document.getElementById("1select");
  var secondSelectBox = document.getElementById("2select");
  secondSelectBox.innerHTML = "";

  switch(firstSelectBox.value) {
    case "1":
      var options = [
        {
          text: "--Sélectionnez le Module--",
          value: "",
          selected: true,
        },
        {
          text: "M101 Se situer au regard du métier et de la démarche de formation",
          value: "Value 1",
          modules:[1,1,1,1,1]
        },
        {
          text: "M102 Acquérir les bases de l’algorithmique",
          value: "Value 2",
        },
        {
          text: "M103 Programmer en Orienté Objet",
          value: "Value 3",
        },
        {
          text: "M104 Développer des sites web statiques",
          value: "Value 4",
        },
        {
          text: "M105 Programmer en JavaScript",
          value: "Value 5",
        },
        {
          text: "M106 Manipuler des bases de données",
          value: "Value 6",
        },
        {
          text: "M107 Développer des sites web dynamiques",
          value: "Value 7",
        },
        {
          text: "M108 S’initier à la sécurité des systèmes d’information",
          value: "Value 8",
        },
      ];
      break;
    case "2":
      var options = [
        //Modules TSGE
        {
          text: "--Sélectionnez le Module--",
          value: "",
          selected: true,
        },
        {
          text: "Module 1 Métier et Formation dans le secteur AGC",
          value: "Value 9",
        },
        {
          text: "Module 2 Bureautique",
          value: "Value 10",
        },
        {
          text: "Module 3 L’entreprise et son environnement",
          value: "Value 11",
        },
        {
          text: "Module 4 Statistiques",
          value: "Value 12",
        },
        {
          text: "Module 5 Comptabilité générale : les concepts de base",
          value: "Value 13",
        },
        {
          text: "Module 6 Marketing",
          value: "Value 14",
        },
        {
          text: "Module 7 Comptabilité générale : les opérations courantes",
          value: "Value 15",
        },
        {
          text: "Module 8 Traitement des salaires",
          value: "Value 16",
        },
      ];
      break;
    case "3":
      var options = [
        //Modules TSGC
        {
          text: "--Sélectionnez le Module--",
          value: "",
          selected: true,
        },
        {
          text: "Module 1 Métier et Formation dans le secteur AGC",
          value: "Value 17",
        },
        {
          text: "Module 2 Bureautique",
          value: "Value 18",
        },
        {
          text: "Module 3 L’entreprise et son environnement",
          value: "Value 19",
        },
        {
          text: "Module 4 Statistiques",
          value: "Value 20",
        },
        {
          text: "Module 5 Comptabilité générale : les concepts de base",
          value: "Value 21",
        },
        {
          text: "Module 6 Marketing",
          value: "Value 14",
        }
      ];
      break;
    default:
      var options = 0
  }
  for (var i = 0, l = options.length; i < l; i++) {
    var option = options[i];
    secondSelectBox.options.add(
      new Option(option.text, option.value, option.selected ,)
    );
  }
}
