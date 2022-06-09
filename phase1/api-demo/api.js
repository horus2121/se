let search = document.querySelector("#search");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault = true;
  let list = document.querySelector("ul");
  let pokemon = document.createElement("li");
  pokemon.innerHTML = "";

  let result = fetch(`https://pokeapi.co/api/v2/${search.value}`)
                    .then( res => res.json())
                    .then( json => pokemon.innerHTML = `${json}`)
                    .catch( err => console.log("ERROR!"));

  list.appendChild(pokemon);

  
})
