import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from "../DATA.json";

console.log(data);

const listRestaurant = (data) => {
  const restElement = document.querySelector("#listRestaurant");
  restElement.innerHTML = "";
  data.forEach((resto) => {
    const { name, description, pictureId, city, rating } = resto;
    const listResto = document.createElement("div");

    listResto.innerHTML = `
    <div class="container">
      <article class="post-item">
          <img class="post-item__thumbnail"
              src="${pictureId}" alt="${name} restaurant">
          <div class="post-item__content">
              <h2 class"post-item__title">${name}</h2>
              <p class="post-item__city">City : ${city}</p>
              <P class="post-item__rating">Rating : ${rating}</p>
              <P class="post-item__city">${description}}</p>
          </div>
      </article>
    </div>    
          `;

    restElement.appendChild(listResto);
  });
};
listRestaurant(data.restaurants);
