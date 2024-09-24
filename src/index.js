function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "床前明月光",
    autoStart: true,
    delay: 80,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
