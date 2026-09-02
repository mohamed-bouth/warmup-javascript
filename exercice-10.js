const ventes = [
    { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
    { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
    { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
    { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
    { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
    { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];


function genererRapport(ventes) {
    //1

    const totalMontant = ventes
        .map(function (ventes) {
            return ventes.montant
        })
        .reduce((somme, nomber) => {
            return somme + nomber
        })

    //2

    const biggestSell = ventes.reduce((bigger, obj) => {
        if (bigger.montant < obj.montant) {
            return obj
        }

        return bigger
    })


    //3

    const caParVendeur = ventes.reduce((objec, vente) => {

        if (objec[vente.vendeur] === undefined) {
            objec[vente.vendeur] = 0
        }

        objec[vente.vendeur] += vente.montant

        return objec

    }, {})

    //4 

    const moyenne = Object.values(caParVendeur).reduce((somme, nomber) => { return somme + nomber }) / Object.values(caParVendeur).length

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
Au-dessus de la moyenne : Amina\n`

    return text
}

console.log(genererRapport(ventes))




