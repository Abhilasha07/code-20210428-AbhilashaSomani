const fs = require("fs");
var response = fs.readFileSync('data.txt');
const details = {data: (JSON.parse(response))};
var count =0;
for( i=0; i<details.data.length; i++) {
    var gender = (details.data[i].Gender);
    var weight = (details.data[i].WeightKg);
    var height = (details.data[i].HeightCm) * 0.01;
    var bmi = calculateBMI(weight, height);
    var range = calculateRange(bmi);
    var risk = calculateRisk(range);
    var dict = {Gender: gender, Weight: weight, Height: height, BMI: bmi, Range: range, Risk: risk };
    if(dict.Range === "Overweight")
        count++;
}
function calculateBMI(w, h)
{ return (w/ (Math.pow(h, 2)));}

function calculateRange(bmi)
{if (bmi < 18.4 && bmi > 0) {
    range = "Underweight";
} else if (bmi < 24.9) {
    range = "Normal Weight";
} else if (bmi < 29.9) {
    range = "Overweight";
} else if (bmi < 34.9) {
    range = "Moderately Obese";
} else if (bmi < 39.9) {
    range = "Severely Obese";
} else if (bmi > 40) {
    range = "Very Severely Obese";
} else {
    console.log("Error")
}
return range; }

function calculateRisk(condition)
{
    if (range==="Underweight")
    {condition = "Malnutrition Risk";}
    else if (range==="Normal Weight")
    {condition = "Low Risk";}
    else if (range==="Overweight")
    {condition = "Enhanced Risk";}
    else if (range==="Moderately Obese")
    {condition = "Medium Risk";}
    else if (range==="Severely Obese")
    {condition = "High Risk";}
    else if (range==="Very Severely Obese")
    {condition = "Very High Risk";}
    else
        {console.log("Error")}
    return condition;
}
console.log(count);






