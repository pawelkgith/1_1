(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");
  let text = "";
  console.log(button);

  button.addEventListener("click", () => {
    for (let i = 0; i <= 9; i++) {
      text += `${i}, `;
    }
    content.innerHTML = text.toString();
  });

  const input = document.getElementById("ex2_text");
  const outputContainer = document.getElementById("ex2_content");
  let output = "";
  console.log(input);
  input.addEventListener("change", (event) => {
    let text = event.target.value;
    if (text.length !== 9) output = "Długość numeru musi być równa 9";
    else if (text.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/))
      output = "Numer nie może zawierać znaków specjalnych";
    else if (isNaN(text)) output = "Numer nie może zawierać liter.";
    else output = "Numer telefonu jest poprawny";

    outputContainer.innerHTML = output;
  });
})();
