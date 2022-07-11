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

let rnd = document.querySelector(".rnd");

rnd.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      return response.json();
    })
    .then((colorObject) => {
      document.querySelector("p").innerText =
        colorObject.rgb.r + "," + colorObject.rgb.g + "," + colorObject.rgb.b;
      let = redValues = String(colorObject.rgb.r);
      let = greenValues = String(colorObject.rgb.g);
      let = blueValues = String(colorObject.rgb.b);
      let rgb = "rgb(" + redValues + "," + greenValues + "," + blueValues + ")";
      document.body.style.backgroundColor = rgb;
    });
});
