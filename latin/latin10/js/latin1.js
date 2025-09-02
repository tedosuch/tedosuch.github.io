
const flashcards = [
  { question: "iacere, iecit", info: "{verb}",lesson: "LNM, 1-10", answer: "throw" },
  { question: "invenire, invenit", info: "{verb}",lesson: "LNM, 1-10", answer: "find",},
  { question: "mittere, misit", info: "{verb}",lesson: "LNM, 1-10", answer: "send" },
  { question: "parare, paravit", info: "{verb}",lesson: "LNM, 1-10", answer: "prepare" },
  { question: "regnare, regnavit", info: "{verb}",lesson: "LNM, 1-10", answer: "rule" },
  { question: "remanere, remansit", info: "{verb}",lesson: "LNM, 1-10", answer: "remain" },
  { question: "videre, vidit", info: "{verb}",lesson: "LNM, 1-10", answer: "see" },
  { question: "scire, scivit", info: "{verb}",lesson: "LNM, 1-10", answer: "know" },
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



 