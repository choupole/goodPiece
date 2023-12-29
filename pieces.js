// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Création des éléments de la page 
let imageElement = document.createElement("img");
let nomElement = document.createElement("h2");
let prixElement = document.createElement("p");
let categorieElement = document.createElement("p");
let descriptionElement = document.createElement("p");
let disponibiliteElement = document.createElement("p");


const article = pieces[0];

// affectation 
imageElement.src = article.image;
nomElement.innerText = article.nom;
// utilisation de l'opérateur ternaire
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// utilisation du nullish
categorieElement.innerText = article.categorie  ?? "(aucune catégorie)";
descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";
disponibiliteElement.innerText = `(${article.disponibilte === true ? "En stock" : "Rupture de stock"})`;

// ajout des éléments dans le DOM

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement);
console.log(sectionFiches);

