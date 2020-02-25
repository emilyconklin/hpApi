let fetchUrl = 'https://hp-api.herokuapp.com/api/characters';
const cardText = document.querySelector('.container');
const url = fetchUrl

function capitalize(string) {
 return string.charAt(0).toUpperCase() + string.slice(1)
}

fetch(url)
  .then(data => data.json())
  .then(data => {
    

    let html = ``

    data.forEach(function (story) {

      html = html + `
    <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
      <img src="${story.image}" class="card-img">
      <h2>${story.name}</h2>
      </div>
      <div class="flip-card-back ${story.house}">
        <h2>${story.name}</h2>
       <p>Species: ${capitalize(story.species)}</p>
        <p>Gender: ${capitalize(story.gender)}</p>
        <p>House: ${story.house}</p>
        <p>Patronus: ${capitalize(story.patronus)}</p>
        <p>Wand: ${capitalize(story.wand.wood)}</P>
         <P>Core: ${capitalize(story.wand.core)}</p>
      </div>
    </div>
  </div>
 
        `   
    })
    

    cardText.innerHTML = html

  })

