
// reusable!
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  // requires a list, and a callback that will produce an html string for each item in the list
  // returns a string of html
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  // requires an food string
  // returns that string embedded in HTML markup
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  // requires an place string
  // returns that string embedded in HTML markup
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
  );
  placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
  );

/*// with .forEach ACTIVITY 1
const foodsElement = document.querySelector('#favorite-foods'); 

function createandAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}

myInfo.favoriteFoods.forEach(createandAppendFoodItem);

// with .map
  function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
  }

  document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
  .map((food) => `<li>${food}</li>`)
  .join(""); 

  foodsElementMap.innerHTML = ''; 

  // this function could also be written this way using a template literal:
  function mapFoodItemSmall(food) {
    return `<li>${food}</li>`;
  }

  // we need to flatten the array of strings into one big string. .join does this.
  foodsElement.innerHTML = foodListElements.join('');

function
*/ 


/*
//Chat GPT solution works where this one doesnt 
const foodsElementForEach = document.querySelector('#favorite-foods');

function createAndAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElementForEach.appendChild(favoriteFood);
}

myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// Clear the element after forEach demonstration
foodsElementForEach.innerHTML = '';

// Using map to create favorite foods
const foodsElementMap = document.querySelector('#favorite-foods');


function mapFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    return favoriteFood;
}

// Create the elements using map and append them
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
foodListElements.forEach(foodElement => foodsElementMap.appendChild(foodElement));

// Using forEach to append places lived
const placesElement = document.querySelector('#places-lived');

myInfo.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    placesElement.appendChild(dt);
    placesElement.appendChild(dd);
});
*/













































































































































































































































































































































































































































































































































































































































































































































































































































































