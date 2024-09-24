function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "8a1b54d66o1c443a9f80t9d2a4d2b05d";
  let context =
    "You are a romantic Chinese poem expert and love to write short poems. Your missions is to generate chinese poem with english translation and separate each line with a <br/>. Must follow user instructions to generate chinese poem";
  let prompt = `User instructions: Generate a Chinese poem about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
