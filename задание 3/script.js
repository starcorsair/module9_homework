const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");

const url = "https://picsum.photos/v2/list?limit=";

const checkInputValue = (url) => {
  const inputResult = input.value;

  if (0 < inputResult && inputResult <= 10) {
    const limit = url + inputResult;
    xhrRequest(limit);
  } else {
    result.innerHTML = `The number is ouside the range 1-10`;
  }
};
const xhrRequest = (limit) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", limit, true);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log("Status is", xhr.status);
    } else if (xhr.onerror) {
      console.log("Error. Status is", xhr.status);
    } else {
      const response = JSON.parse(xhr.response);
      displayResult(response);
    }
  };
  xhr.send();
};
const displayResult = (apiData) => {
  const resultData = apiData.map(
    (item) =>
      `<div class="card"><img src="${item.download_url}" class="card-image"/><p>${item.author}</p></div>`
  );
  result.innerHTML = resultData.join("");
};
button.addEventListener("click", () => {
  checkInputValue(url);
});
