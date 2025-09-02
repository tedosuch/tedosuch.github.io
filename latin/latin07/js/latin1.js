
const flashcards = [
  { question: "audivit", info: "{verb}",lesson: "LNM, 1-7", answer: "heard" },
  { question: "cepit", info: "{verb}",lesson: "LNM, 1-7", answer: "took, captured",},
  { question: "fere", info: "{adverb}",lesson: "LNM, 1-7", answer: "almost, in general" },
  { question: "semper", info: "{adverb}",lesson: "LNM, 1-7", answer: "always" },
  { question: "dies, die", info: "{noun}",lesson: "LNM, 1-7", answer: "day" },
  { question: "multus", info: "{adjective}",lesson: "LNM, 1-7", answer: "many" },
  { question: "res, re", info: "{noun}",lesson: "LNM, 1-7", answer: "thing" },
  { question: "totus", info: "{adjective}",lesson: "LNM, 1-7", answer: "whole" },
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



 