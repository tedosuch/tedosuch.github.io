
const flashcards = [
  { question: "postquam", info: "{conjunction}",lesson: "LNM, 1-4", answer: "after" },
  { question: "ignis, em", info: "{noun}",lesson: "LNM, 1-4", answer: "fire",},
  { question: "ubi", info: "{conjunction}",lesson: "LNM, 1-4", answer: "where" },
  { question: "aqua, -am", info: "{noun}",lesson: "LNM, 1-4", answer: "water" },
  { question: "bellum, -um", info: "{noun}",lesson: "LNM, 1-4", answer: "war" },
  { question: "exercitus, um", info: "{noun}",lesson: "LNM, 1-4", answer: "army" },
  { question: "pons, pontem", info: "{noun}",lesson: "LNM, 1-4", answer: "bridge" },
  { question: "pugna, -am", info: "{noun}",lesson: "LNM, 1-4", answer: "battle" },
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



 