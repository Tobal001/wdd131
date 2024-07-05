//Activity 1 - Map
const steps = ["one", "two", "three"];

const listTemplate = (step) => {
  return `<li>${step}</li>`;
};

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

//Activity 2 - Map 
const grades = ['A', 'B', 'A'];

function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

//Activity 3 - Reduce
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;


const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//Activity 4 - Filter 
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

//same thing with an arrow function
const shortWords = words.filter((word) => word.length < 6);

//Activity 5 - indexOf
// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);