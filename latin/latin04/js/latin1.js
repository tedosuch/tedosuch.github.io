
const flashcards = [
  { question: "cecidit", info: "{verb}",lesson: "LNM, 1-4", answer: "fell" },
  { question: "expilit", info: "{verb}",lesson: "LNM, 1-4", answer: "expelled",},
  { question: "iecit", info: "{verb}",lesson: "LNM, 1-4", answer: "threw" },
  { question: "paravit", info: "{verb}",lesson: "LNM, 1-4", answer: "prepared" },
  { question: "stetit", info: "{verb}",lesson: "LNM, 1-4", answer: "stood" },
  { question: "ad", info: "{preposition}",lesson: "LNM, 1-4", answer: "near" },
  { question: "enim", info: "{conjunction}",lesson: "LNM, 1-4", answer: "for" },
  { question: "etiam", info: "{conjunction}",lesson: "LNM, 1-4", answer: "even, also" },
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



 