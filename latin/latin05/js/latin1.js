
const flashcards = [
  { question: "fecit", info: "{verb}",lesson: "LNM, 1-5", answer: "made, did" },
  { question: "sunt", info: "{verb}",lesson: "LNM, 1-5", answer: "are",},
  { question: "voluit", info: "{verb}",lesson: "LNM, 1-5", answer: "wished, willed" },
  { question: "nunc", info: "{adverb}",lesson: "LNM, 1-5", answer: "now" },
  { question: "civis, -i", info: "{noun}",lesson: "LNM, 1-5", answer: "citizen" },
  { question: "novus", info: "{adjective}",lesson: "LNM, 1-5", answer: "new" },
  { question: "potestas, potestate", info: "{noun}",lesson: "LNM, 1-5", answer: "power" },
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



 