const gameBoard = document.querySelector(".game-board")
const startBtn = document.querySelector(".start-button")
const homePage = document.querySelector("#home")
const gamePage = document.querySelector("#game")
const nameInput = document.querySelector("#name-input")
const restartBtn = document.querySelector("#restart-button")
const endBtn = document.querySelector("#end-button")
const nameDisplay = document.querySelector("#name-display")
const pointsDisplay = document.querySelector("#points-display")

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
    { id: 12, image: "kiwi.png", matched: false, value: "kiwi" },

    { id: 13, image: "mango.png", matched: false, value: "mango" },
    { id: 14, image: "mango.png", matched: false, value: "mango" },

    { id: 15, image: "pineapple.png", matched: false, value: "pineapple" },
    { id: 16, image: "pineapple.png", matched: false, value: "pineapple" },

    { id: 17, image: "strawberry.png", matched: false, value: "strawberry" },
    { id: 18, image: "strawberry.png", matched: false, value: "strawberry" },

    { id: 19, image: "lemon.png", matched: false, value: "lemon" },
    { id: 20, image: "lemon.png", matched: false, value: "lemon" }
];


let data = []

const rawNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let numbers = [];

let pairMatched = 0;
let pairNumber = 0;
let points = 0;
let time = 0;

function restData() {
    firstCard = null;
    lockboard = false
    points = 0
    time = 0
    localStorage.removeItem("difficulty")
    data = data.map(card => {
        if (card.matched === true) {
            card.matched = false
        }
        return card
    })
}

function loadData() {
    const name = localStorage.getItem("name") || "Guest"
    nameDisplay.textContent = name
    nameInput.value = name

    const points = localStorage.getItem("points") || 0
    pointsDisplay.textContent = points
}

loadData();

function downloadData(option) {
    numbers = [];
    data = [];
    if (option.difficulty === "easy") {
        numbers = rawNumbers.slice(0, 12);
        data = rawData.slice(0, 12);
        return { data, numbers };
    }
    if (option.difficulty === "medium") {
        numbers = rawNumbers.slice(0, 16);
        data = rawData.slice(0, 16);
        return { data, numbers };
    }
    if (option.difficulty === "hard") {
        numbers = rawNumbers.slice(0, 20);
        data = rawData.slice(0, 20);
        return { data, numbers };
    }
    return false;
}

function randomize(numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
}

function displayCards(obj) {
    let data = obj.data
    let numbers = obj.numbers

    randomize(numbers)
    console.log(numbers)
    gameBoard.innerHTML = '';
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] === data[j].id) {
                console.log(true)
                gameBoard.innerHTML += `<div class="memory-card" data-value="${data[j].id}">
                                            <div class="card-hidden">
                                                <img src="./assets/image/${data[j].image}">
                                            </div>
                                        </div>`
            }
        }
    }
    let cardsContaner = document.querySelectorAll(".memory-card")
    setTimeout(() => {
        cardsContaner.forEach(card => {
            card.innerHTML = `<div class="card-hidden">
                           <h2>?</h2>
                        </div>`
        });
    }, 1000);
}

function showGamePage() {
    gamePage.style.display = "flex";
    homePage.style.display = 'none';
}

function showHomePage() {
    gamePage.style.display = "none";
    homePage.style.display = 'flex';
}

function saveinputData() {
    const difficultyInput = document.querySelector(".radio-input:checked")
    const name = nameInput.value
    const difficulty = difficultyInput.value
    localStorage.setItem("name", name)
    localStorage.setItem("difficulty", difficulty)

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

function isfinished(force = false) {
    if (force) {
        return true
    }
    matchedNumber = data.filter(card => card.matched === true).length
    totalCard = data.length
    if (matchedNumber === totalCard) {
        return true
    }
    return false
}


firstCard = null;
lockboard = false;
let gameInterval = null;

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
                        if (gameInterval !== null) {
                            clearInterval(gameInterval);
                            localStorage.setItem("points", points)
                        }
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
    if (!isfinished()) {
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
    displayCards(isdownloaded);

    showGamePage();
    showNumberOfPairs()
    showNumberOfCards();
    const cardsContaner = document.querySelectorAll(".memory-card")
    addEventforCards(cardsContaner)
    if (gameInterval !== null) {
        clearInterval(gameInterval);
    }
    gameInterval = setInterval(() => {
        showPoints();
        showTime();
    }, 1000);

})

restartBtn.addEventListener("click", () => {
    let option = { difficulty: localStorage.getItem("difficulty") || "easy" }
    let isdownloaded = downloadData(option);
    if (!isdownloaded) {
        return
    }
    displayCards(isdownloaded);
    restData();
    showNumberOfPairs();
    showNumberOfCards();
    const cardsContaner = document.querySelectorAll(".memory-card")
    addEventforCards(cardsContaner)
    if (gameInterval !== null) {
        clearInterval(gameInterval);
    }
    gameInterval = setInterval(() => {
        showPoints();
        showTime();
    }, 1000);
})

endBtn.addEventListener("click", () => {
    restData();
    isfinished(true);
    loadData()
    showHomePage();
})
