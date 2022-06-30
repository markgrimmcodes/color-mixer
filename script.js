function changeColor() {
  let redValues = document.getElementById("red").value;
  let greenValues = document.getElementById("green").value;
  let blueValues = document.getElementById("blue").value;
  let rgb = "rgb(" + redValues + "," + greenValues + "," + blueValues + ")";
  document.body.style.backgroundColor = rgb;
  document.querySelector("p").innerText =
    "rgb(" + redValues + "," + greenValues + "," + blueValues + ")";
}

document.querySelector("#red").addEventListener("input", changeColor);
document.querySelector("#green").addEventListener("input", changeColor);
document.querySelector("#blue").addEventListener("input", changeColor);
