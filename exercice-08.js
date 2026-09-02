const inscription = {
 nom: "",
 email: "aminaexample.com",
 motDePasse: "123",
 age: 17
};

function nameValidator(name){
    if(name.length < 2){
        return "Le nom doit contenir au moins 2 caracteres."
    }
    return true
}

function emailValidator(email){
    if(!email.includes('@gmail.com')){
        return "L'email n'est pas valide."
    }

    return true
}

function passwordValidator(password){
    if(password.length < 8){
        return "Le mot de passe doit contenir au moins 8 caracteres."
    }
    let flag = true
    for(let i = 0 ; i , password.length ; i++){
        let charachter = password[i].charCodeAt(0)
        if(charachter > 32 && charachter <= 47 || charachter > 90 && charachter <=  96 || charachter > 122){
            flag = false
            break
        }
    }
    if(!flag){
        return "pas utilise de caractère spécifique"
    }

    return true
}

function ageValidator(age){
    if(age < 18){
        return "Vous devez avoir au moins 18 ans."
    }
    return true
}

function validerInscription(donnees) {
    const errorsObj = {
        valide: true,
        errors: []
    }

    const nameResult = nameValidator(donnees.nom)
    const emailResult = emailValidator(donnees.email)
    const passwordResult =  passwordValidator(donnees.motDePasse)
    const ageResult = ageValidator(donnees.age)

    let flag = true

    if(nameResult != true){
        errorsObj.errors.push(nameResult) 
        flag = false
    }
    if(emailResult != true){
        errorsObj.errors.push(emailResult)
        flag = false
    }
    if(passwordResult != true){
        errorsObj.errors.push(passwordResult)
        flag = false
    }
    if(ageResult != true){
        errorsObj.errors.push(ageResult)
        flag = false
    }

    if(!flag){
        errorsObj.valide = false
    }

    return errorsObj
}

console.log(validerInscription(inscription))