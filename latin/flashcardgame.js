
const flashcards = [
  { question: "dedit", info: "{noun}",lesson: "LNM, 1-1", answer: "gave" },
  { question: "dixit", info: "{noun}",lesson: "LNM, 1-1", answer: "said",},
  { question: "fuit", info: "{noun}",lesson: "LNM, 1-1", answer: "had" },
  { question: "h&aacute;buit", info: "{noun}",lesson: "LNM, 1-1", answer: "was" },
  { question: "invenit", info: "{noun}",lesson: "LNM, 1-1", answer: "found" },
  { question: "venit", info: "{noun}",lesson: "LNM, 1-1", answer: "came" },
  { question: "vidit", info: "{noun}",lesson: "LNM, 1-1", answer: "saw" },
  { question: "ad", info: "{noun}",lesson: "LNM, 1-1", answer: "to" },
];

const container = document.getElementById("flashcard-container");

flashcards.forEach((cardData) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">${cardData.question}<p class="test">${cardData.info} - ${cardData.lesson}</p> </div>
      <div class="card-back">${cardData.answer}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  container.appendChild(card);
});
