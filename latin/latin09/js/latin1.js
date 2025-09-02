
const flashcards = [
  { question: "posse, potuit", info: "{verb}",lesson: "LNM, 1-9", answer: "be able" },
  { question: "rogare, rogavit", info: "{verb}",lesson: "LNM, 1-9", answer: "ask",},
  { question: "servare, servavit", info: "{verb}",lesson: "LNM, 1-9", answer: "save" },
  { question: "timere, timuit", info: "{verb}",lesson: "LNM, 1-9", answer: "fear" },
  { question: "non solum", info: "{adverb}",lesson: "LNM, 1-9", answer: "not only" },
  { question: "alius", info: "{adjective}",lesson: "LNM, 1-9", answer: "other, another" },
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



 