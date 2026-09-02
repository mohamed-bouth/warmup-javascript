const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];

//1

const noms = panier.map(function(pan){
    return pan.nom
})

console.log("Noms : ", noms);

//2 

const totauxLignes = panier.map(function(pan){
    const prixQuantite = pan.prix * pan.quantite;
    return { nom: pan.nom , prixQuantite: prixQuantite}
})

console.log("totaux Lignes : " , totauxLignes)

//3 

const bigThanHundred = panier.filter(produit => produit.prix > 100).map(function(pro){
    return pro.nom
});

console.log("prix > 100 : " + bigThanHundred);

//4

const nombers = totauxLignes.map(function(produit){
    return produit.prixQuantite
})

const total = nombers.reduce((somme , nomber) => {
    return somme + nomber
});

console.log("Total panier : " + total)

//5 

const quantiteNombers = panier.map(function(produit){
    return produit.quantite
});

const quantiteTotal = quantiteNombers.reduce((somme, nomber) => {
    return somme + nomber
})

console.log("Nombre d'articles : " + quantiteTotal);