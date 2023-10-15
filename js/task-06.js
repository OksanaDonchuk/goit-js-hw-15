const inputData = document.getElementById("validation-input");
inputData.addEventListener("blur", addBlurBorder);

function addBlurBorder(event) {
  const inputDataLength = Number(inputData.dataset.length);
  const inputValueLength = Number(inputData.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputData.classList.add("valid");
    inputData.classList.remove("invalid");
  } else {
    inputData.classList.remove("valid");
    inputData.classList.add("invalid");
  }
}
