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
})();
