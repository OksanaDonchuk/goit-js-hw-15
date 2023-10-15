const inputRangeData = document.getElementById("font-size-control");
const textData = document.getElementById("text");

const fontSizeControl = ({ currentTarget }) =>
  (textData.style.fontSize = `${currentTarget.value}px`);

inputRangeData.addEventListener("input", fontSizeControl);
