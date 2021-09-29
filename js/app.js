import CardComponent from "./Card.js";
import {loadJSON, getDataBy} from "./load.js";

const path = "../data.json"
const timeframeMenu = document.querySelector('.profile-card__menu');
const cardContainer = document.querySelector('.dashboard');

// read json data and render the view
function init(path){
  loadJSON(path).then(userActivities =>{
    let timeframe = "daily";
    let results = getDataBy(timeframe, userActivities);
    results.forEach(result => {
      let card = new CardComponent(result.title, timeframe,result.timeframes.current, result.timeframes.previous);
      let html = card.createHTML();
      cardContainer.insertAdjacentHTML('beforeend', html);
    });
  });
}

//rerender when the button's clicked
timeframeMenu.addEventListener('click', (e) =>{
  // remove all child nodes expect Profile article section
  Array.from(cardContainer.children).forEach((elem, key) =>{
    if(key !== 0){
      cardContainer.removeChild(elem);
    }
  });

  // change the color of the chosen timeframe;
  // Array.from(cardContainer.children).forEach(elem => {
  //   elem.style.color = "white";
  // });
  console.log(timeframeMenu.children);
  Array.from(timeframeMenu.children).forEach(child => {
    child.style.color = "hsl(235, 45%, 61%)";
  })
  e.target.style.color = "hsl(236, 100%, 87%)";
  

  loadJSON(path).then(userActivities =>{
    if(Array.from(e.target.children).length !== 0) return false;
    let timeframe = e.target.innerText.toLowerCase();
    let results = getDataBy(timeframe, userActivities);
  
    results.forEach(result => {
      let card = new CardComponent(result.title, timeframe, result.timeframes.current, result.timeframes.previous);
      let html = card.createHTML();
      cardContainer.insertAdjacentHTML('beforeend', html);
    });
  });
})

// ------------------------------------------------
init(path);
