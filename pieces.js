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

// utilisation de la fonction map pour récuperer la liste de noms de chaque articles 
// // Fonction lambda
// piece => piece.nom

// // Fonction normale
// function (piece) {
//     return piece.nom;
// }
const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}

//création de la liste 
const abordablesElements = document.createElement("ul");

// ajout de chaque nom à la liste 
for(let i=0; noms.length > i; i++) {
    const nomElement = document.createElement("li");
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}

// ajout de l'en-tête puis de la liste au bloc résultats filtres 
document.querySelector(".abordables").appendChild(abordablesElements);


//  correction de l'exercice
const nomsDispo = pieces.map(piece => piece.nom);
const prixDispo = pieces.map(piece => piece.prix);
for(let i=0; pieces.length > i; i++) {
    if(pieces[i].disponibilite !== true){
        nomsDispo.splice(i,1);
        prixDispo.splice(i,1);
    }
}
console.log(nomsDispo);
console.log(prixDispo);

//création de la liste 
const disponibleElement = document.createElement("ul");

// ajout de chaque nom à la liste 
for(let i=0; nomsDispo.length > i; i++) {
    const nomElement = document.createElement("li");
    nomElement.innerText = `${nomsDispo[i]} - ${prixDispo[i]} £`;
    disponibleElement.appendChild(nomElement);
}

// ajout de l'en-tête puis de la liste au bloc résultats filtres 
document.querySelector(".disponibles").appendChild(disponibleElement);


// Efface le contenu de la balise body et donc l’écran
// document.querySelector(".fiches").innerHTML = '';



