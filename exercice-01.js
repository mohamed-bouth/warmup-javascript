const prenom = "Amina";
const ville = "Casablanca";
let age = 22;
let estEnFormation = true;

console.log(
    prenom + ", " + age + " ans, habite a Casablanca.\nStatut : majeur.\nFormation en cours : " + estEnFormation
);
console.log("\n");
console.log("prenom -> " + typeof(prenom));
console.log("age -> " + typeof(age));
console.log("estEnformation -> " + typeof(boolean));
age = 16;
console.log("\nnew age -> " + age)