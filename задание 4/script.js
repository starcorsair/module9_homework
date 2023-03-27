const button = document.querySelector(".button");
const input_width = document.querySelector(".input_width");
const input_height = document.querySelector(".input_height");
const result = document.getElementById("result");
button.addEventListener("click", () => {
  let widthValue = input_width.value;
  let heightValue = input_height.value;
  if (
    widthValue >= 100 &&
    widthValue <= 300 &&
    heightValue >= 100 &&
    heightValue <= 300
  ) {
    fetch(`https://picsum.photos/${widthValue}/${heightValue}`)
      .then((response) => {
        result.innerHTML = `<img src=${response.url}>`;
      })
      .catch(() => {
        console.log("error");
      });
  } else {
    result.innerHTML = `One of the numbers is ouside the range from 100 to 300`;
  }
});
