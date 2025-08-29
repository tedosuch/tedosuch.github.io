
const flashcards = [
  { question: "cum", info: "{preposition}",lesson: "LNM, 1-1", answer: "with" },
  { question: "ergo", info: "{adverb}",lesson: "LNM, 1-1", answer: "therefore",},
  { question: "in", info: "{preposition}",lesson: "LNM, 1-1", answer: "in, into, on" },
  { question: "non", info: "{adverb}",lesson: "LNM, 1-1", answer: "not" },
  { question: "sed", info: "{conjunction}",lesson: "LNM, 1-1", answer: "but" },
  { question: "agnus, agnum", info: "{noun}",lesson: "LNM, 1-1", answer: "lamb" },
  { question: "mundus, mundum", info: "{noun}",lesson: "LNM, 1-1", answer: "world" },
  { question: "nauta, nautam", info: "{noun}",lesson: "LNM, 1-1", answer: "sailor" },
];

const container = document.getElementById("flashcard-container");

flashcards.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

    card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${cardData.question}<p class="metalatin">${cardData.info} - ${cardData.lesson}</p> </div>
      <div class="card-back">${cardData.answer}<p class="metaenglish">${cardData.info} - ${cardData.lesson}</p> </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});



 