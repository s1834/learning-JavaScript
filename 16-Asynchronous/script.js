'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data) {
  const html = `
  <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>english</p>
            <p class="country__row"><span>💰</span>dollar</p>
        </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};
/*
// const getCountryAndNeighbour = function (country) {
//   // AJAX call Country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render Country 1
//     renderCountry(data);

//     // Get neighbour country 2
//     const neighbour = data.borders?.[0];

//     if(!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//   request2.send();

//   request2.addEventListener('load', function () {
//     const data2 = JSON.parse(this.responseText);
//     console.log(data2);
//   });
// };

// getCountryAndNeighbour('portugal');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((data) => renderCountry(data))
    .catch((err) => {
      console.error(`${err}💥💥`);
      renderError(`Something went wrong💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
*/

// Async/Await
// const whereAmI = async function () {
//   // Geolocation
//   const pos = await getposition();
//   const {latitude: lat, longitude: lng} = pos.coords;

//   // Reverse geocoding
//   const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   // Country data
//   const res = await fetch(
//     `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
//   );
//   const data = await res.json();
//   console.log(data);
//   renderCountry(data[0]);
// };
// whereAmI();

/*
// Coding Challenge #1

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return response.json();
    })
    .then((data) => {
zc      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => console.log(renderCountry, 'neighbour'))
    .catch((err) => {
      console.error(`${err.message}💥💥`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// Coding Challenge #2

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found!!'));
    });
  });
};

let currentImg;
/*
createImage('img/img-1.jpg')
  .then((img) => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then((img) => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch((err) => console.error(err));
*/

// Coding Challenge #3
// Part 1
const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

// Part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach((img) => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
