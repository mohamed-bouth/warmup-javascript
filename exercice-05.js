const produit = {
 nom: "Clavier mecanique",
 prix: 450,
 stock: 12,
 categorie: "Informatique",
 enPromotion: false
};

const produit2 = {
 nom: "Cart grafique",
 prix: 5000,
 stock: 0,
 categorie: "Informatique",
 enPromotion: false
};

const produit3 = {
 nom: "cpu",
 prix: 1500,
 stock: 5,
 categorie: "Informatique",
 enPromotion: false
};

function estDisponible(produit){
    if(produit.stock > 0){
        return true
    }
    return false
}

console.log(produit.nom + " -- " + produit.prix + " DH -- " + produit.stock+  " en stock (" + produit.categorie + ")")
console.log("Nouveau prix : " + (produit.prix + (produit.prix*0.1)))
console.log("stock : " + produit.stock)
console.log("categorie : " + produit.categorie)
console.log("enPromotion : " + produit.enPromotion)
console.log("estDisponible(produit) -> " + estDisponible(produit))

console.log("\n")
console.log("bonus:")

console.log("estDisponible("+ produit.nom +") -> " + estDisponible(produit))
console.log("estDisponible("+ produit2.nom +") -> " + estDisponible(produit2))
console.log("estDisponible("+ produit3.nom +") -> " + estDisponible(produit3))
