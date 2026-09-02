function clearTxt(phrase) {
    let clearText = ''

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === ' ' && phrase[i + 1] === ' ') {
            continue;
        }
        if (phrase[i] === ' ' && clearText.length === 0) {
            continue;
        }
        if (phrase[i] === ' ' && i === phrase.length - 1) {
            continue;
        }

        clearText += phrase[i];

    }

    return clearText
}



//1

function genererSlug(titre) {
    let newtitre = ''
    for (let i = 0; i < titre.length; i++) {
        const ascii = titre[i].charCodeAt(0)
        let nextAscii;
        if (i + 1 != titre.length) {
            nextAscii = titre[i + 1].charCodeAt(0)
        }

        if (ascii === 32 && nextAscii === 32) {
            continue;
        }
        let charachter = '';

        if (ascii >= 65 && ascii < 91) {
            charachter = String.fromCharCode(ascii + 32)
            newtitre += charachter
        } else if (ascii === 32 && newtitre.length != 0 && i + 1 != titre.length) {
            newtitre += '-'
        } else {
            newtitre += titre[i]
        }

    }

    return newtitre
}

const titre = "    Mon Premier Projet MERN    "

console.log(genererSlug(titre))

//2 

function compterMots(phrase) {

    const clearText = clearTxt(phrase)

    let count = 1
    for (let i = 0; i < clearText.length; i++) {
        if (clearText[i] === ' ') {
            count += 1;
        }
    }

    return count;
}

const phrase = "               Le  JavaScript est la base du stack MERN              ";

console.log(compterMots(phrase));


function initiales(nomComplet) {
    let result = '';
    const clearText = clearTxt(nomComplet)

    for(let i = 0 ; i < nomComplet.length ; i++){
        if(i === 0){
            const ascii = clearText[i].charCodeAt(0)
            result += String.fromCharCode(ascii - 32)
            result += '.'
        }

        if(clearText[i] === ' '){
            const ascii = clearText[i+1].charCodeAt(0)
            result += String.fromCharCode(ascii - 32)
            result += '.'
        }
    }

    return result
}

const nomComplet = "amina el idrissi";
console.log(initiales(nomComplet))
