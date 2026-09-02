function discountCounter(montant, statut){
    let discount = 0
    if(montant >= 200 && montant < 500){
        discount = 5
    }else if (montant >= 500 && montant < 1000){
        discount = 10
    }else if (montant >= 1000){
        discount = 15
    }

    if(statut === "premium"){
        discount += 5
    }

    return discount
}

function deliveryValidator(montant){
    if(montant >= 300){
        return true
    }
    return false
}

function calculerCommande(montant, statut){
    let finalPrice = 0;
    let livraison = 0;
    const discount = discountCounter(montant, statut)

    let remise = montant * (discount / 100)
    finalPrice = montant - remise

    const valide = deliveryValidator(finalPrice)

    if(!valide){
        livraison = 30
    }

    return {
        pourcentageRemise: discount,
        remise: remise,
        totalApresRemise: finalPrice,
        livraison: livraison,
        totalAPayer: finalPrice + livraison
    }

}


const commandes = [
 { montant: 150, statut: "standard" },
 { montant: 620, statut: "standard" },
 { montant: 1200, statut: "premium" }
];

console.log(calculerCommande(commandes[0].montant , commandes[0].statut))
console.log(calculerCommande(commandes[1].montant , commandes[1].statut))
console.log(calculerCommande(commandes[2].montant , commandes[2].statut))
