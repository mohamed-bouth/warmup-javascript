const ventes = [
    { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
    { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
    { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
    { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
    { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
    { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 9000, mois: "mars" }
];


function genererRapport(ventes) {
    //1

    const totalMontant = ventes
        // .map(function (ventes) {
        //     return ventes.montant
        // })
        .reduce((somme, vente) => {
            return somme + vente.montant
        }, 0)

    //2

    const biggestSell = ventes.reduce((bigger, vente) => {
        if (bigger.montant < vente.montant) {
            return vente
        }

        return bigger
    })


    //3

    const caParVendeur = ventes.reduce((caParVendeur, vente) => {

        if (caParVendeur[vente.vendeur] === undefined) {
            caParVendeur[vente.vendeur] = 0
        }

        caParVendeur[vente.vendeur] += vente.montant

        return caParVendeur

    }, {})

    //4 
    const montantsParVendeur = Object.values(caParVendeur)

    const moyenne = montantsParVendeur.reduce((somme, montant) => {
        return somme + montant
    }, 0) / montantsParVendeur.length

    const vendeursAuDessusMoyenne = Object.entries(caParVendeur)
        .filter(([vendeur, montant]) => montant > moyenne)
        .map(([vendeur]) => vendeur)


    let text = `=== RAPPORT DES VENTES ===\n
Chiffre d'affaires total : ${totalMontant} DH\n
Meilleure vente : ${biggestSell.produit} (${biggestSell.vendeur}) - ${biggestSell.montant} DH\n
CA par vendeur :\n`
    const caParVendeurArray = Object.entries(caParVendeur)
    console.log(caParVendeurArray)
    for (let i = 0; i < caParVendeurArray.length; i++) {
        text += `${caParVendeurArray[i][0]} : ${caParVendeurArray[i][1]} DH \n`;
    }
    text += `Moyenne par vendeur : ${moyenne} DH\n
Au-dessus de la moyenne : ${vendeursAuDessusMoyenne.join(", ")}\n`

    return text
}

console.log(genererRapport(ventes))




