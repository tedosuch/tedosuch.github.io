
const flashcards = [
  { question: "annus, -um", info: "{noun}",lesson: "LNM, 1-2", answer: "year" },
  { question: "forum, -um", info: "{noun}",lesson: "LNM, 1-2", answer: "market, forum",},
  { question: "magnus", info: "{adjective}",lesson: "LNM, 1-2", answer: "great, large" },
  { question: "terra, -am", info: "{noun}",lesson: "LNM, 1-2", answer: "land" },
  { question: "urbs, urbem", info: "{noun}",lesson: "LNM, 1-2", answer: "city" },
  { question: "vir, virum", info: "{noun}",lesson: "LNM, 1-2", answer: "man" },
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



 