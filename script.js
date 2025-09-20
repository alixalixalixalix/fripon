const fetchData = async () => {
  try {
    const reponseServices = await fetch("data-services.json");
    const dataServices = await reponseServices.json();

    function generatorServices(dataServices) {
      const services__liste = document.querySelector("#services__liste");

      for (let i = 0; i < dataServices.length; i++) {
        const services__card = document.createElement("div");
        services__card.classList.add("services__card");
        services__liste.appendChild(services__card);

        const icon = document.createElement("img");
        services__card.appendChild(icon);
        icon.src = dataServices[i].icon;

        const services__card__txt = document.createElement("div");
        services__card__txt.classList.add("services__card__txt");
        services__card.appendChild(services__card__txt);

        const titre = document.createElement("h3");
        services__card__txt.appendChild(titre);
        titre.innerText = dataServices[i].titre;

        const txtIntro = document.createElement("p");
        services__card__txt.appendChild(txtIntro);
        txtIntro.innerText = dataServices[i].texte;

        const button = document.createElement("button");
        services__card__txt.appendChild(button);
        button.innerText = "En savoir plus";

        const services__card__tarifs = document.createElement("div");
        services__card__tarifs.classList.add("services__card__tarifs");
        services__card.appendChild(services__card__tarifs);

        const prix = document.createElement("h3");
        services__card__tarifs.appendChild(prix);
        prix.innerText = dataServices[i].prix;

        const duree = document.createElement("h4");
        services__card__tarifs.appendChild(duree);
        duree.innerText = dataServices[i].duree;
      }
    }

    generatorServices(dataServices);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();
