
const flashcards = [
  { question: "est", info: "{verb}",lesson: "LNM, 1-3", answer: "is" },
  { question: "regnavit", info: "{verb}",lesson: "LNM, 1-3", answer: "ruled",},
  { question: "quando", info: "{adverb}",lesson: "LNM, 1-3", answer: "when" },
  { question: "bonus", info: "{adjective}",lesson: "LNM, 1-3", answer: "good" },
  { question: "malus", info: "{adjective}",lesson: "LNM, 1-3", answer: "bad, evil" },
  { question: "primus", info: "{adjective}",lesson: "LNM, 1-3", answer: "first" },
  { question: "rex, regem", info: "{noun}",lesson: "LNM, 1-3", answer: "king" },
  { question: "ultimus", info: "{adjective}",lesson: "LNM, 1-3", answer: "last" },
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



 