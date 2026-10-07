/* ================================================= */
/* CARD DATA */
/* ================================================= */

const cards = [

    {
        title: "CARD 1",
        text: "This is the first card."
    },

    {
        title: "CARD 2",
        text: "This is the second card."
    },

    {
        title: "CARD 3",
        text: "This is the third card."
    }

];


/* ================================================= */
/* CURRENT CARD */
/* ================================================= */

let currentCard = 0;


/* ================================================= */
/* HTML ELEMENTS */
/* ================================================= */

const cardSelector =
    document.querySelector(".card-selector");

const currentCardElement =
    document.getElementById("current-card");

const title =
    document.getElementById("card-title");

const text =
    document.getElementById("card-text");

const cardHand =
    document.getElementById("card-hand");

const cardLabels =
    document.getElementById("card-labels");


/* ================================================= */
/* SHOW CURRENT CARD */
/* ================================================= */

function showCurrentCard() {

    title.textContent =
        cards[currentCard].title;

    text.textContent =
        cards[currentCard].text;

    showOtherCards();

}


/* ================================================= */
/* SHOW OTHER CARDS */
/* ================================================= */

function showOtherCards() {

    cardHand.innerHTML = "";

    cardLabels.innerHTML = "";


    /*
        Circular order:

        Current 1 -> 2 -> 3
        Current 2 -> 3 -> 1
        Current 3 -> 1 -> 2
    */

    const nextCard =
        (currentCard + 1) % cards.length;

    const lastCard =
        (currentCard + 2) % cards.length;


    /* --------------------------------------------- */
    /* CARD TWO */
    /* --------------------------------------------- */

    const firstCard =
        createHandCard(nextCard);

    firstCard.classList.add(
        "card-one"
    );

    cardHand.appendChild(firstCard);


    /* --------------------------------------------- */
    /* CARD THREE */
    /* --------------------------------------------- */

    const secondCard =
        createHandCard(lastCard);

    secondCard.classList.add(
        "card-two"
    );

    cardHand.appendChild(secondCard);


    /* --------------------------------------------- */
    /* CARD TWO TITLE */
    /* --------------------------------------------- */

    const firstLabel =
        createCardLabel(
            cards[nextCard].title
        );

    firstLabel.classList.add(
        "card-one-label"
    );

    cardLabels.appendChild(firstLabel);


    /* --------------------------------------------- */
    /* CARD THREE TITLE */
    /* --------------------------------------------- */

    const secondLabel =
        createCardLabel(
            cards[lastCard].title
        );

    secondLabel.classList.add(
        "card-two-label"
    );

    cardLabels.appendChild(secondLabel);

}


/* ================================================= */
/* CREATE SECONDARY CARD */
/* ================================================= */

function createHandCard(cardIndex) {

    const card =
        document.createElement("div");


    card.classList.add(
        "hand-card"
    );


    /*
        The secondary card only contains
        the clickable card body.

        Its title is displayed separately.
    */

    card.addEventListener(
        "click",
        function () {

            currentCard = cardIndex;

            cardSelector.classList.remove(
                "is-open"
            );

            showCurrentCard();

        }
    );


    return card;
}


/* ================================================= */
/* CREATE CARD TITLE */
/* ================================================= */

function createCardLabel(cardTitle) {

    const label =
        document.createElement("h3");


    label.classList.add(
        "card-label"
    );


    label.textContent =
        cardTitle;


    return label;
}


/* ================================================= */
/* OPEN CARD HAND */
/* ================================================= */

currentCardElement.addEventListener(
    "mouseenter",
    function () {

        cardSelector.classList.add(
            "is-open"
        );

    }
);


/* ================================================= */
/* CLOSE CARD HAND */
/* ================================================= */

cardSelector.addEventListener(
    "mouseleave",
    function () {

        cardSelector.classList.remove(
            "is-open"
        );

    }
);


/* ================================================= */
/* START APPLICATION */
/* ================================================= */

showCurrentCard();