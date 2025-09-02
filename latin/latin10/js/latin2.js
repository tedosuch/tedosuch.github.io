
const flashcards = [
  { question: "scribere, scripsit", info: "{verb}",lesson: "LNM, 1-2", answer: "write" },
  { question: "stare, stetit", info: "{verb}",lesson: "LNM, 1-2", answer: "stand",},
  { question: "velle, voluit", info: "{verb}",lesson: "LNM, 1-2", answer: "want, will" },
  { question: "venire, venit", info: "{verb}",lesson: "LNM, 1-2", answer: "come" },
  { question: "vincere, vicit", info: "{verb}",lesson: "LNM, 1-2", answer: "conquer" },
  { question: "mare, -i", info: "{noun}",lesson: "LNM, 1-2", answer: "sea" },
  { question: "nomen, nomine", info: "{noun}",lesson: "LNM, 1-2", answer: "name" },
  { question: "saeculum, -o", info: "{noun}",lesson: "LNM, 1-2", answer: "century, age" },
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



 