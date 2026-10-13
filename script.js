(function () {
  let button = document.getElementById("ex1_button");
  let text = "";
  console.log(button);

  button.addEventListener("click", () => {
    for (let i = 0; i <= 9; i++) {
      text += `${i}, `;
    }
  });
})();
