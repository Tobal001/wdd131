document.addEventListener('DOMContentLoaded', () => {
  // *** Footer Section ***
  const year = document.querySelector("#year");
  const today = new Date();

  const lastModifiedElement = document.getElementById('lastModifiedDate');
  const lastModifiedDate = new Date(document.lastModified);
  const formattedDate = lastModifiedDate.toLocaleString();
  // Gets current Year with copyright symbol and author's name
  year.innerHTML = `&copy <span>${today.getFullYear()}</span> &#128051 Cristobal Henriquez &#128051 Canada`;
  // Computes last modified time & date
  lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

  // *** Hamburger Menu Toggle Section ***
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');

  hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
  });

  // *** Temples Data Section ***
  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
          templeName: "Concepcion Chile",
          location: "Conception, Chile",
          dedicated: "2018, October, 28",
          area: 23095,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/concepcion-chile/2018/400x250/01-Concepcion-Chile-Temple-2113673.jpg"
      },
      {
          templeName: "Calgary Alberta",
          location: "Calgary, Alberta",
          dedicated: "2012, October, 28",
          area: 33000,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
      },
      {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    },

      // Add more temple objects here...
  ];

  createTempleCard(temples);

  // *** Navigation Links and Page Title Section ***
  const homeLink = document.querySelector('#home');
  const oldTemplesLink = document.querySelector('#old');
  const newTemplesLink = document.querySelector('#new');
  const largeTemplesLink = document.querySelector('#large');
  const smallTemplesLink = document.querySelector('#small');
  const pageTitle = document.querySelector('#page-title');

  homeLink.addEventListener("click", () => {
      document.querySelector(".container").innerHTML = '';
      createTempleCard(temples);
      pageTitle.textContent = "Home";
  });

  oldTemplesLink.addEventListener("click", () => {
      const oldTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
      document.querySelector(".container").innerHTML = '';
      createTempleCard(oldTemples);
      pageTitle.textContent = "Old Temples";
  });

  newTemplesLink.addEventListener("click", () => {
      const newTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) > 2000);
      document.querySelector(".container").innerHTML = '';
      createTempleCard(newTemples);
      pageTitle.textContent = "New Temples";
  });

  largeTemplesLink.addEventListener("click", () => {
      const largeTemples = temples.filter(temple => temple.area >= 90000);
      document.querySelector(".container").innerHTML = '';
      createTempleCard(largeTemples);
      pageTitle.textContent = "Large Temples";
  });

  smallTemplesLink.addEventListener("click", () => {
      const smallTemples = temples.filter(temple => temple.area < 10000);
      document.querySelector(".container").innerHTML = '';
      createTempleCard(smallTemples);
      pageTitle.textContent = "Small Temples";
  });

  // *** Helper Function to Get Dedicated Year ***
  function getDedicatedYear(dedicatedDate) {
      const year = dedicatedDate.split(', ')[0].trim();
      return parseInt(year);
  }

  // *** Function to Create Temple Cards ***
  function createTempleCard(filteredTemples) {
      filteredTemples.forEach(temple => {
          let card = document.createElement("section");
          let name = document.createElement("h3");
          let location = document.createElement("p");
          let dedication = document.createElement("p");
          let area = document.createElement("p");
          let img = document.createElement("img");

          name.textContent = temple.templeName;
          location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
          dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
          area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
          img.setAttribute("src", temple.imageUrl);
          img.setAttribute("alt", `${temple.templeName} Temple`);
          img.setAttribute("loading", "lazy");
          img.setAttribute("width", "400");
          img.setAttribute("height", "300");

          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedication);
          card.appendChild(area);
          card.appendChild(img);

          document.querySelector(".container").appendChild(card);
      });
  }
});
