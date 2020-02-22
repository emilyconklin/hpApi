let fetchUrl = 'http://hp-api.herokuapp.com/api/characters';
const cardText = document.querySelector('.container');
const url = fetchUrl

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
      <div class="flip-card-back">
        <h2>${story.name}</h2>
       <p>Species: ${story.species}</p>
        <p>Gender: ${story.gender}</p>
        <p>House: ${story.house}</p>
        <p>Patronus: ${story.patronus}</p>
        <p>Wand: ${story.wand.wood}</P>
         <P>Core: ${story.wand.core}</p>
      </div>
    </div>
  </div>
 
        `   
    })
    

    cardText.innerHTML = html

  })

// console.log(data)

// style="background-color:${color}"

