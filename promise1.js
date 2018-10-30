let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
let giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";


function setup() {  // p5js 
  noCanvas();
  fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
      createP(json.word);
      console.log("Word Nik Response" + json);
      return fetch(giphyAPI + json.word);
})
    .then(response => {
      console.log("Giphy" + response.json());
      response.json()
    })
    .then(json => {
      createImg(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.log(err));
}