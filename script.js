const fetchData = async () => {
  try {
    const reponseServices = await fetch("data-services.json");
    const dataServices = await reponseServices.json();

    const html = document.documentElement;

    function generatorServices(dataServices) {
      const services__liste = document.querySelector("#services__liste div");

      const allButtons = [];
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
        button.innerText = "En savoir plus"; // ICI
        allButtons.push(button);

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

      allButtons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
          const modal = document.getElementById("modal__liste");
          modal.style.display = "flex";
          html.style.overflow = "hidden";

          const close = document.querySelector(".modal__card__intro img");
          close.addEventListener("click", (event) => {
            modal.style.display = "none";
            html.style.overflow = "auto";
          });

          const handleOutsideClick = (event) => {
            if (event.target === modal) {
              modal.style.display = "none";
              html.style.overflow = "auto";
              modal.removeEventListener("click", handleOutsideClick);
            }
          };
          modal.addEventListener("click", handleOutsideClick);

          // Empêche la propagation des clics à l'intérieur de modal__card
          const modalCard = document.querySelector(".modal__card");
          modalCard.addEventListener("click", (event) => {
            event.stopPropagation();
          });

          const modal__card__intro = document.querySelector(
            ".modal__card__intro h2"
          );
          modal__card__intro.innerText = dataServices[index].titre;

          // POUR QUI
          const modal__card__paragraphe1 = document.querySelector(
            ".modal__card__paragraphe1"
          );
          const modal__card__paragraphe1__titre = document.querySelector(
            ".modal__card__paragraphe1 div h3"
          );
          modal__card__paragraphe1__titre.innerText =
            dataServices[index].titreParagraphe1;
          const listeUl__1 = document.querySelector(
            ".modal__card__paragraphe1 ul"
          );
          listeUl__1.innerHTML = "";

          for (
            let j = 0;
            j < dataServices[index].contentParagraphe1.length;
            j++
          ) {
            const li = document.createElement("li");
            listeUl__1.appendChild(li);
            li.innerText = dataServices[index].contentParagraphe1[j];
          }

          // OBJECTIFS
          const modal__card__paragraphe2 = document.querySelector(
            ".modal__card__paragraphe2"
          );
          const modal__card__paragraphe2__titre = document.querySelector(
            ".modal__card__paragraphe2 div h3"
          );
          modal__card__paragraphe2__titre.innerText =
            dataServices[index].titreParagraphe2;

          const listeUl__2 = document.querySelector(
            ".modal__card__paragraphe2 ul"
          );
          listeUl__2.innerHTML = "";

          for (
            let j = 0;
            j < dataServices[index].contentParagraphe2.length;
            j++
          ) {
            const li = document.createElement("li");
            listeUl__2.appendChild(li);
            li.innerText = dataServices[index].contentParagraphe2[j];
          }

          // COMMENT ÇA MARCHE
          const modal__card__paragraphe3 = document.querySelector(
            ".modal__card__paragraphe3"
          );
          const modal__card__paragraphe3__titre = document.querySelector(
            ".modal__card__paragraphe3 div h3"
          );
          modal__card__paragraphe3__titre.innerText =
            dataServices[index].titreParagraphe3;
          const listeUl__3 = document.querySelector(
            ".modal__card__paragraphe3 ul"
          );
          listeUl__3.innerHTML = "";

          for (
            let j = 0;
            j < dataServices[index].contentParagraphe3.length;
            j++
          ) {
            const li = document.createElement("li");
            listeUl__3.appendChild(li);
            li.innerText = dataServices[index].contentParagraphe3[j];
          }

          const modal__card__paragraphe3__infoDeplacement =
            document.querySelector(
              ".modal__card__paragraphe3 .infoDeplacement"
            );
          modal__card__paragraphe3__infoDeplacement.innerText =
            dataServices[index].infoParagraphe3;

          // LOCALISATION
          const modal__card__paragraphe4 = document.querySelector(
            ".modal__card__paragraphe4"
          );
          const modal__card__paragraphe4__titre = document.querySelector(
            ".modal__card__paragraphe4 div h3"
          );
          modal__card__paragraphe4__titre.innerText =
            dataServices[index].titreParagraphe4;
          const pLocalisation = document.querySelector(
            ".modal__card__paragraphe4 p"
          );
          pLocalisation.innerText = dataServices[index].contentParagraphe4;
        });
      });
    }

    generatorServices(dataServices);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();
