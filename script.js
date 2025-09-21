const fetchData = async () => {
  try {
    const reponseServices = await fetch("data-services.json");
    const dataServices = await reponseServices.json();

    function generatorServices(dataServices) {
      const services__liste = document.querySelector("#services__liste div");

      // GÉNÉRATION SERVICES
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


    // GÉNÉRATION MODAL

    // On garde la structure dans le html
    // Au clic sur un "en savoir plus", on regarde quel bouton a été cliqué
    // On maj les infos dans chaque élément html

    const modal__card__intro = document.querySelector(".modal__card__intro h2");
    modal__card__intro.innerText = dataServices[3].titre;

    // POUR QUI
    const modal__card__paragraphe1 = document.querySelector(
      ".modal__card__paragraphe1"
    );
    const modal__card__paragraphe1__titre = document.querySelector(
      ".modal__card__paragraphe1 div h3"
    );
    modal__card__paragraphe1__titre.innerText = dataServices[3].titreParagraphe1;
    const listeUl__1 = document.createElement("ul");
    modal__card__paragraphe1.appendChild(listeUl__1);

    for (let j = 0; j < dataServices[3].contentParagraphe1.length; j++) {
      const li = document.createElement("li");
      listeUl__1.appendChild(li);
      li.innerText = dataServices[3].contentParagraphe1[j];
    }

    // OBJECTIFS
    const modal__card__paragraphe2 = document.querySelector(
      ".modal__card__paragraphe2"
    );
    const modal__card__paragraphe2__titre = document.querySelector(
      ".modal__card__paragraphe2 div h3"
    );
    modal__card__paragraphe2__titre.innerText = dataServices[3].titreParagraphe2;

    const listeUl__2 = document.createElement("ul");
    modal__card__paragraphe2.appendChild(listeUl__2);

    for (let j = 0; j < dataServices[3].contentParagraphe2.length; j++) {
      const li = document.createElement("li");
      listeUl__2.appendChild(li);
      li.innerText = dataServices[3].contentParagraphe2[j];
    }

    // COMMENT ÇA MARCHE
    const modal__card__paragraphe3 = document.querySelector(
      ".modal__card__paragraphe3"
    );
    const modal__card__paragraphe3__titre = document.querySelector(
      ".modal__card__paragraphe3 div h3"
    );
    modal__card__paragraphe3__titre.innerText = dataServices[3].titreParagraphe3;
    const listeUl__3 = document.createElement("ul");
    modal__card__paragraphe3.appendChild(listeUl__3);

    for (let j = 0; j < dataServices[3].contentParagraphe3.length; j++) {
      const li = document.createElement("li");
      listeUl__3.appendChild(li);
      li.innerText = dataServices[3].contentParagraphe3[j];
    }

    // LOCALISATION
    const modal__card__paragraphe4 = document.querySelector(
      ".modal__card__paragraphe4"
    );
    const modal__card__paragraphe4__titre = document.querySelector(
      ".modal__card__paragraphe4 div h3"
    );
    modal__card__paragraphe4__titre.innerText = dataServices[3].titreParagraphe4;
    const pLocalisation = document.querySelector(
      ".modal__card__paragraphe4 p"
    );
    pLocalisation.innerText = dataServices[3].contentParagraphe4
    ;


    /*
    function generatorModal(dataServices) {
      const modal__liste = document.querySelector("#modal__liste");

      for (let i = 0; i < dataServices.length; i++) {
        const modal__card = document.createElement("div");
        modal__card.classList.add("modal__card");
        modal__liste.appendChild(modal__card);

        const modal__card__intro = document.createElement("div");
        modal__card__intro.classList.add("modal__card__intro");
        modal__card.appendChild(modal__card__intro);

        const titre = document.createElement("h2");
        modal__card__intro.appendChild(titre);
        titre.innerText = dataServices[i].titre;

        const close = document.createElement("img");
        modal__card__intro.appendChild(close);
        close.src = "sources/icons/close.svg";

        const modal__card__content = document.createElement("div");
        modal__card__content.classList.add("modal__card__content");
        modal__card.appendChild(modal__card__content);

        const modal__card__content__titre = document.createElement("div");
        modal__card__content__titre.classList.add(
          "modal__card__content__titre"
        );
        modal__card__content.appendChild(modal__card__content__titre);

        const icon = document.createElement("img");
        modal__card__content__titre.appendChild(icon);
        icon.src = "dataServices[i].icon";

        const pourQui = document.createElement("h3");
        modal__card__content__titre.appendChild(pourQui);
        pourQui.innerText = "Pour qui ?";

        const listeUl = document.createElement("ul");
        modal__card__content.appendChild(listeUl);

        for (let j = 0; j < dataServices[i].pourQui.length; j++) {
          const li = document.createElement("li");
          listeUl.appendChild(li);
          li.innerText = dataServices[i].pourQui[j];
        }
      }
    }
    */

    generatorServices(dataServices);
    //generatorModal(dataServices);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();
