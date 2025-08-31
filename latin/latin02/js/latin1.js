
const flashcards = [
  { question: "amavit/<br/>amaverunt", info: "{verb}",lesson: "LNM, 1-2", answer: "loved" },
  { question: "exclamavit/<br/>exclamaverunt", info: "{verb}",lesson: "LNM, 1-2", answer: "shouted",},
  { question: "remansit/<br/>remanserunt", info: "{verb}",lesson: "LNM, 1-2", answer: "remained" },
  { question: "domi", info: "{noun}",lesson: "LNM, 1-2", answer: "at home" },
  { question: "hic", info: "{pronoun}",lesson: "LNM, 1-2", answer: "this" },
  { question: "quod", info: "{pronoun}",lesson: "LNM, 1-2", answer: "that" },
  { question: "ante", info: "{adverb}",lesson: "LNM, 1-2", answer: "before" },
  { question: "iam", info: "{adverb}",lesson: "LNM, 1-2", answer: "already" },
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



 