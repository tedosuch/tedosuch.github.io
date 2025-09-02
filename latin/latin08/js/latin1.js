
const flashcards = [
  { question: "misit", info: "{verb}",lesson: "LNM, 1-8", answer: "sent" },
  { question: "scivit", info: "{verb}",lesson: "LNM, 1-8", answer: "knew",},
  { question: "scripsit", info: "{verb}",lesson: "LNM, 1-8", answer: "wrote" },
  { question: "quia", info: "{adjecconjunctiontive}",lesson: "LNM, 1-8", answer: "because" },
  { question: "fabula, -a", info: "{noun}",lesson: "LNM, 1-8", answer: "legend" },
  { question: "lex, lege", info: "{noun}",lesson: "LNM, 1-8", answer: "law" },
  { question: "solus", info: "{adjective}",lesson: "LNM, 1-8", answer: "alone" },
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



 