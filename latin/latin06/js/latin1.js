
const flashcards = [
  { question: "creavit", info: "{verb}",lesson: "LNM, 1-6", answer: "created, made" },
  { question: "vicit", info: "{verb}",lesson: "LNM, 1-6", answer: "conquered (abl. case)",},
  { question: "e, ex", info: "{preposition}",lesson: "LNM, 1-6", answer: "from, out from" },
  { question: "ager, agro", info: "{noun}",lesson: "LNM, 1-6", answer: "field" },
  { question: "consilium, consilio", info: "{noun}",lesson: "LNM, 1-6", answer: "plan" },
  { question: "fortis", info: "{adjective}",lesson: "LNM, 1-6", answer: "brave, strong" },
  { question: "periculum, -o", info: "{noun}",lesson: "LNM, 1-6", answer: "danger" },
  { question: "senatus, -u", info: "{noun}",lesson: "LNM, 1-6", answer: "senate" },
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



 