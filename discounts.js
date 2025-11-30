const discounts = ["5%", "10%", "15%", "20%", "25%", "30%", "45%", "50%", "75%"];

const cardContainer = document.querySelector(".cards");

let gameOver = false;


function showGame() {
    const start = document.querySelector(".play-game");
    start.style.display = "none";

    createCards();
}

function createCards() {

    for (let i = 0; i < 9; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.animationDelay = `${i * 0.1}s`;
        const code = discountCode();
        card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">?</div>
          <div class="card-back">
            <div class="discount-text">${discounts[i]} OFF!</div>
            <div class="discount-code">${code}</div>
          </div>
        </div>
      `;
        card.addEventListener("click", () => flipCard(card));
        cardContainer.appendChild(card);
    }
}

function flipCard(card) {
    if (gameOver) return;

    card.classList.add("flipped");
    gameOver = true;
}

discounts.sort(() => Math.random() - 0.5);

function discountCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
}