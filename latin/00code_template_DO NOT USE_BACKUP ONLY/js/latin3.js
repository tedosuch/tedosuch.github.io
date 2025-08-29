
const flashcards = [
  { question: "navis, navem", info: "{noun}",lesson: "LNM, 1-1", answer: "ship" },
  { question: "parva", info: "{adjective}",lesson: "LNM, 1-1", answer: "small",},
  { question: "parvus", info: "{adjective}",lesson: "LNM, 1-1", answer: "small" },
  { question: "pec&uacute;nia, pec&uacute;niam", info: "{noun}",lesson: "LNM, 1-1", answer: "money" },
  { question: "planus", info: "{adjective}",lesson: "LNM, 1-1", answer: "flat" },
  { question: "pu&eacute;lla, pu&eacute;llam", info: "{noun}",lesson: "LNM, 1-1", answer: "girl" },
  { question: "reg&iacute;na, reg&iacute;nam", info: "{noun}",lesson: "LNM, 1-1", answer: "queen" },
  { question: "rot&uacute;ndus", info: "{adjective}",lesson: "LNM, 1-1", answer: "round" },
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



 