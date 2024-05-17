//Button elements
const resultButton = document.getElementById("result-button");
const clearButton = document.getElementById("clear-button");


// Add onclick to buttons
resultButton.onclick = bmiButton;
clearButton.onclick = restart;
function bmiButton() {
  //Calculation for BMI
  let bmI;
  let weight = parseInt(document.getElementById("bmi-weight").value);
  let height = parseInt(document.getElementById("bmi-height").value);
  let results = document.getElementById("bmi-results");
  document.getElementById("bmi-weight").textContent = weight + "kg";
  document.getElementById("bmi-height").textContent = height + "cm";
  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  results.textContent = bmI;
  if (bmI <= 20) {
     bmI ;
    output= "You are underweight";
  } else if (bmI >= 20 && bmI <= 40) {
    bmI ;
    output= "Well done, you are normal weight";
  } else if (bmI >= 80.9 && bmI <= 60.7) {
    bmI ;
    output= "Cut down on the snacks, you are overweight.";
  } else {
    bmI ;
    output="Seek medical help, this is a serious problem";
  }
  document.getElementById("results").innerHTML = output;
}
function restart() {
    window.location.reload();
} 