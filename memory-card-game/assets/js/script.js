const gameBoard = document.querySelector(".game-board")
const startBtn = document.querySelector(".start-button")
const homePage = document.querySelector("#home")
const gamePage = document.querySelector("#game")
const nameInput = document.querySelector("#name-input")
const restartBtn = document.querySelector("#restart-button")

const rawData = [
    { id: 1, image: "apple.png", matched: false, value: "apple" },
    { id: 2, image: "apple.png", matched: false, value: "apple" },

    { id: 3, image: "banana.png", matched: false, value: "banana" },
    { id: 4, image: "banana.png", matched: false, value: "banana" },

    { id: 5, image: "orange.png", matched: false, value: "orange" },
    { id: 6, image: "orange.png", matched: false, value: "orange" },

    { id: 7, image: "grape.png", matched: false, value: "grape" },
    { id: 8, image: "grape.png", matched: false, value: "grape" },

    { id: 9, image: "watermelon.png", matched: false, value: "watermelon" },
    { id: 10, image: "watermelon.png", matched: false, value: "watermelon" },

    { id: 11, image: "kiwi.png", matched: false, value: "kiwi" },
    { id: 12, image: "kiwi.png", matched: false, value: "kiwi" }
];


let data = []

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let pairMatched = 0;
let pairNumber = 0;
let points = 0;
let time = 0;

function restData() {
    data = data.map(card => {
        if (card.matched === true) {
            card.matched = false
        }
        return card
    })
}

function downloadData(option) {
    if (option.difficulty === "easy") {
        data = rawData;
        return true
    }
    return false
}

function randomize(numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
}

function displayCards() {
    randomize(numbers)
    gameBoard.innerHTML = '';
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === data[j].id) {
                gameBoard.innerHTML += `<div class="memory-card" data-value="${data[j].id}">
                                            <div class="card-hidden">
                                                <h2>?</h2>
                                            </div>
                                        </div>`
            }
        }
    }
}

function showGamePage() {
    gamePage.style.display = "flex";
    homePage.style.display = 'none';
}

function saveinputData() {
    const difficultyInput = document.querySelector(".radio-input:checked")
    const name = nameInput.value
    const difficulty = difficultyInput.value

    return {
        name, difficulty
    }
}

function showCard(card) {
    const cardId = card.dataset.value - 1
    card.innerHTML = `<div class="card-showen">
                         <img src="./assets/image/${data[cardId].image}">
                     </div>`
}

function hideCard(cardId) {
    const card = document.querySelector(`.memory-card[data-value="${cardId}"]`);
    card.innerHTML = `<div class="card-hidden">
                          <h2>?</h2>
                      </div>`

}

function showNumberOfPairs() {
    const typingAria = document.querySelector("#pair-matched")
    const PairNumber = data.length / 2
    const numberOfPairs = data.filter((card) => card.matched === true).length / 2
    typingAria.innerHTML = `${numberOfPairs} / ${PairNumber}`
}

function showNumberOfCards() {
    const cardsNumberAria = document.querySelector("#cards-number")
    cardsNumberAria.innerHTML = data.length
}

function isfinished() {
    matchedNumber = data.filter(card => card.matched === true).length
    totalCard = data.length
    if (matchedNumber === totalCard) {
        return true
    }
    return false
}

firstCard = null;
lockboard = false;

function addEventforCards(cardsContaner) {
    cardsContaner.forEach(card => {
        card.addEventListener("click", () => {
            console.log("click")
            const clickedCard = data.find(dataCard => dataCard.id == card.dataset.value)
            if (lockboard === true) {
                return
            }
            if (clickedCard.matched === true) {
                return;
            }
            if (firstCard === null) {
                firstCard = data.find(dataCard => dataCard.id == card.dataset.value)
                showCard(card)
            } else {
                secondCard = data.find(dataCard => dataCard.id == card.dataset.value)
                if (firstCard.value === secondCard.value) {
                    showCard(card)
                    data[firstCard.id - 1].matched = true
                    data[secondCard.id - 1].matched = true
                    firstCard = null;
                    showNumberOfPairs()
                    points += 100
                    if (isfinished()) {
                        alert("yaaaay")
                    }
                } else {
                    showCard(card)
                    lockboard = true
                    points -= 10
                    setTimeout(() => {
                        hideCard(card.dataset.value)
                        hideCard(firstCard.id)
                        firstCard = null;
                        lockboard = false
                    }, 1000);

                }
            }


        })
    });
}

function showPoints() {
    if(!isfinished()){
        points -= 5
    }
    const pointsAria = document.querySelector("#points-output")
    pointsAria.textContent = points
}
 
function showTime() {
    if (!isfinished()) {
        time += 1
    }

    minutes = Math.floor(time / 60)
    secondes = time % 60

    const timeAria = document.querySelector("#time-output")
    timeAria.textContent = `${minutes}:${secondes.toString().padStart(2, "0")}`
}

startBtn.addEventListener("click", () => {
    let option = saveinputData();
    let isdownloaded = downloadData(option);
    if (!isdownloaded) {
        return
    }
    displayCards();
    showGamePage();
    showNumberOfPairs()
    showNumberOfCards();
    const cardsContaner = document.querySelectorAll(".memory-card")
    addEventforCards(cardsContaner)
    setInterval(() => {
        showPoints();
    }, 1000);
    setInterval(() => {
        showTime();
    }, 1000);
})

restartBtn.addEventListener("click", () => {
    firstCard = null;
    lockboard = false
    points = 0
    console.log(data)
    restData();
    displayCards();
    showNumberOfPairs();
    showNumberOfCards();
    const cardsContaner = document.querySelectorAll(".memory-card")
    addEventforCards(cardsContaner)
})








