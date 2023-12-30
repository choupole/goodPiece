// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();



for(let i = 0; pieces.length > i ; i++){

    // Création des éléments de la page 
    let imageElement = document.createElement("img");
    let nomElement = document.createElement("h2");
    let articleElement = document.createElement("article");
    let prixElement = document.createElement("p");
    let categorieElement = document.createElement("p");
    let descriptionElement = document.createElement("p");
    let disponibiliteElement = document.createElement("p");
    // affectation 
    imageElement.src = pieces[i].image;
    nomElement.innerText = pieces[i].nom;
    // utilisation de l'opérateur ternaire
    prixElement.innerText = `Prix: ${pieces[i].prix} € (${pieces[i].prix < 35 ? "€" : "€€€"})`;
    // utilisation du nullish
    categorieElement.innerText = pieces[i].categorie  ?? "(aucune catégorie)";
    descriptionElement.innerText = pieces[i].description ?? "(Pas de description pour le moment)";
    disponibiliteElement.innerText = `(${pieces[i].disponibilte === true ? "En stock" : "Rupture de stock"})`;
    
    // ajout des éléments dans le DOM
    
    const sectionFiches = document.querySelector(".fiches");
    sectionFiches.appendChild(articleElement);
    articleElement.appendChild(imageElement)
    articleElement.appendChild(nomElement);
    articleElement.appendChild(prixElement);
    articleElement.appendChild(categorieElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(disponibiliteElement);
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces); //création de la copie de la liste 
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
 });

 const boutonDecroissant = document.querySelector(".btn-decroissant");
 boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces); //création de la copie de la liste 
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     console.log(piecesOrdonnees);
 });

 const boutonFiltrer = document.querySelector(".btn-filtrer");

 boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
 });

 const boutonDescription = document.querySelector(".btn-desciption");

 boutonDescription.addEventListener("click", function () {
    const piecesDescription = pieces.filter(function (piece) {
        if(piece.description !== undefined) {
            return piece.description;
        }

    });
    console.log(piecesDescription);
 });





