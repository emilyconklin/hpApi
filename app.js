const searchBar = document.getElementById('searchBar')
const charactersList = document.querySelector('.container');
let hpCharacters = [];

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

searchBar.addEventListener('keyup', (e) => {
      const searchString = e.target.value.toLowerCase();
      const filteredCharacters = hpCharacters.filter((character) => {
          return (character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString)
        );
      })
      displayCharacters(filteredCharacters);
    });


    const loadCharacters = async () => {
      try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
      } catch (err) {
        console.error(err);
      }
    };

    const displayCharacters = (characters) => {
      const htmlString = characters
        .map((character) => {
          return `
            <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src="${character.image}" class="card-img">
              <h2>${character.name}</h2>
              </div>
              <div class="flip-card-back ${character.house}">
                <h2>${character.name}</h2>
               <p>Species: ${capitalize(character.species)}</p>
                <p>Gender: ${capitalize(character.gender)}</p>
                <p>House: ${character.house}</p>
                <p>Patronus: ${capitalize(character.patronus)}</p>
                <p>Wand: ${capitalize(character.wand.wood)}</P>
                 <P>Core: ${capitalize(character.wand.core)}</p>
              </div>
            </div>
          </div>
         
                `
        })
        .join('');
      charactersList.innerHTML = htmlString;
    };

    loadCharacters();