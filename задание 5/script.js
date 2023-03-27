const pageNum = document.getElementById("page_num");
const limitInp = document.getElementById("limit");
const button = document.getElementById("button");
const result = document.getElementById("result");

function valueValidation(value, valuesRange) {
  return (
    typeof value === "number" &&
    !isNaN(value) &&
    value >= valuesRange[0] &&
    value <= valuesRange[1]
  );
}
function sendRequest(page, limit) {
  let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    let response = JSON.parse(xhr.response);
    let images = ``;
    localStorage.clear();
    for (let img of response) {
      images += `<img src="${img.download_url}" width="300px" style="margin: 20px;">`;
    }
    localStorage.setItem("images", images);
    result.innerHTML = images;
  };
  xhr.send();
}
button.addEventListener("click", () => {
  let page = +pageNum.value;
  let limit = +limitInp.value;
  let valuesRange = [1, 10];
  if (
    valueValidation(page, valuesRange) &&
    valueValidation(limit, valuesRange)
  ) {
    sendRequest(page, limit);
  } else if (valueValidation(page, valuesRange)) {
    result.innerText = "Лимит вне диапазона от 1 до 10";
  } else if (valueValidation(limit, valuesRange)) {
    result.innerText = "Номер страницы вне диапазона от 1 до 10";
  } else {
    result.innerText = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  let images = localStorage.getItem("images");
  if (images) {
    result.innerHTML = images;
  }
});
