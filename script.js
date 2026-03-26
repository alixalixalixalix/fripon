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
        services__card.classList.add("blocListe__card");
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

        const services__card__tarifs__RESP = document.createElement("div");
        services__card__tarifs__RESP.classList.add(
          "services__card__tarifs__resp",
        );
        services__card__txt.appendChild(services__card__tarifs__RESP);

        const prix__RESP = document.createElement("h3");
        services__card__tarifs__RESP.appendChild(prix__RESP);
        prix__RESP.innerText = dataServices[i].prix;

        const duree__RESP = document.createElement("h4");
        services__card__tarifs__RESP.appendChild(duree__RESP);
        duree__RESP.innerText = dataServices[i].duree;
      }

      allButtons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
          const modale = document.getElementById("modale");
          modale.style.top = "0vh";
          document.body.classList.add("bodyBloquage");

          const close = document.querySelector("#modale__close button");
          close.addEventListener("click", (event) => {
            modale.style.top = "100vh";
            document.body.classList.remove("bodyBloquage");
          });

          const handleOutsideClick = (event) => {
            if (event.target === modale) {
              html.style.overflow = "auto";
              modale.removeEventListener("click", handleOutsideClick);
            }
          };
          modale.addEventListener("click", handleOutsideClick);

          const modale__img = document.querySelector("#modale__intro > img");
          const modale__titre = document.querySelector("#modale__intro__titre");
          const modale__intro = document.querySelector("#modale__intro__txt");
          modale__titre.innerText = dataServices[index].titre;
          modale__intro.innerText = dataServices[index].intro;

          // PREMIER POINT : POUR QUI ———————————————————————————————
          const blocListe__card__item1__titre = document.querySelector(
            ".blocListe__card__item1 h3",
          );
          blocListe__card__item1__titre.innerText =
            dataServices[index].titreItem1;
          const listeUl__1 = document.querySelector(
            ".blocListe__card__item1 ul",
          );
          listeUl__1.innerHTML = "";

          for (let j = 0; j < dataServices[index].contentItem1.length; j++) {
            const li = document.createElement("li");
            listeUl__1.appendChild(li);
            li.innerText = dataServices[index].contentItem1[j];
          }

          // SECOND POINT : OBJECTIFS ———————————————————————————————
          const blocListe__card__item2__titre = document.querySelector(
            ".blocListe__card__item2 h3",
          );
          blocListe__card__item2__titre.innerText =
            dataServices[index].titreItem2;

          /*
          const blocListe__card__item2 = document.querySelector(
            ".blocListe__card__item2",
          );

          if (dataServices[index].introItem2 != "") {
            const pItem2 = document.createElement("p");
            blocListe__card__item2.appendChild(pItem2);
            pItem2.innerText = dataServices[index].introItem2;
          }
            */

          const listeUl__2 = document.querySelector(
            ".blocListe__card__item2 ul",
          );
          listeUl__2.innerHTML = "";

          for (let j = 0; j < dataServices[index].contentItem2.length; j++) {
            const li = document.createElement("li");
            listeUl__2.appendChild(li);
            li.innerText = dataServices[index].contentItem2[j];
          }

          // TROISIÈME POINT : COMMENT ÇA MARCHE ———————————————————————————————
          const blocListe__card__item3__titre = document.querySelector(
            ".blocListe__card__item3 h3",
          );
          blocListe__card__item3__titre.innerText =
            dataServices[index].titreItem3;
          const listeUl__3 = document.querySelector(
            ".blocListe__card__item3 ul",
          );
          listeUl__3.innerHTML = "";

          for (let j = 0; j < dataServices[index].contentItem3.length; j++) {
            const li = document.createElement("li");
            listeUl__3.appendChild(li);
            li.innerText = dataServices[index].contentItem3[j];
          }

          const blocListe__card__item3__infoDeplacement =
            document.querySelector(".blocListe__card__item3 .infoDeplacement");
          blocListe__card__item3__infoDeplacement.innerText =
            dataServices[index].infoParagraphe3;

          // QUATRIÈME POINT : LOCALISATION ———————————————————————————————
          const blocListe__card__item4__titre = document.querySelector(
            ".blocListe__card__item4 h3",
          );
          blocListe__card__item4__titre.innerText =
            dataServices[index].titreItem4;
          const pLocalisation = document.querySelector(
            ".blocListe__card__item4 p",
          );
          pLocalisation.innerText = dataServices[index].contentItem4;

          // CINQUIÈME POINT : TARIFS ———————————————————————————————
          const blocListe__card__item5__titre = document.querySelector(
            ".blocListe__card__item5 h3",
          );
          blocListe__card__item5__titre.innerText =
            dataServices[index].titreItem5;

          const tableau = document.querySelector(".tableau");
          tableau.innerHTML = "";
          for (let j = 0; j < dataServices[index].contentTableau.length; j++) {
            const pTableau = document.createElement("p");
            tableau.appendChild(pTableau);
            pTableau.innerText = dataServices[index].contentTableau[j];
          }

          const listeUl__5 = document.querySelector(
            ".blocListe__card__item5 ul",
          );
          listeUl__5.innerHTML = "";
          for (let j = 0; j < dataServices[index].contentItem5.length; j++) {
            const li = document.createElement("li");
            listeUl__5.appendChild(li);
            li.innerText = dataServices[index].contentItem5[j];
          }
        });
      });
    }

    generatorServices(dataServices);
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};

fetchData();

// MENU APPARITION
const openMenu = document.getElementById("menu__open");
const menu = document.getElementById("menu");
const html = document.documentElement;
const header = document.querySelector("header");
const burger1 = document.querySelector("#menu__open > div:nth-child(1)");
const burger2 = document.querySelector("#menu__open > div:nth-child(2)");
const h2 = document.querySelectorAll("#menu h2");

let open = false;

openMenu.addEventListener("click", () => {
  const currentDisplay = window.getComputedStyle(menu).display;
  if (currentDisplay === "none") {
    menu.style.display = "flex";
    html.style.overflow = "hidden";
    header.style.backgroundColor = "#f9f3e8";
    openMenu.style.paddingRight = "18px";
    burger1.style.transform = "rotate(45deg)";
    burger2.style.transform = "rotate(135deg)";
    burger1.style.position = "absolute";
    burger2.style.position = "absolute";
  } else {
    menu.style.display = "none";
    html.style.overflow = "auto";
    openMenu.style.paddingRight = "0px";
    header.style.backgroundColor = "#ffde45";
    burger1.style.transform = "rotate(0deg)";
    burger2.style.transform = "rotate(0deg)";
    burger1.style.position = "relative";
    burger2.style.position = "relative";
  }

  // REDIRECTION LIEN MENU
  const btnmenu = document.querySelectorAll("#menu__liens a");
  const allButtonsMenu = [btnmenu[0], btnmenu[1], btnmenu[2], btnmenu[3]];
  allButtonsMenu.forEach((button, index) => {
    button.addEventListener("click", (event) => {
      menu.style.display = "none";
      html.style.overflow = "auto";
      openMenu.style.paddingRight = "0px";
      header.style.backgroundColor = "#ffde45";
      burger1.style.transform = "rotate(0deg)";
      burger2.style.transform = "rotate(0deg)";
      burger1.style.position = "relative";
      burger2.style.position = "relative";
    });
  });
});

// HEADER APPARITION SCROLL
let lastScrollPosition = 0;
let isScrolling;

window.addEventListener("scroll", function () {
  clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition + 25) {
      header.style.transform = "translateY(-100%)";
    } else if (currentScrollPosition < lastScrollPosition - 25) {
      header.style.transform = "translateY(0)";
    }

    lastScrollPosition = currentScrollPosition;
  }, 10);
});
