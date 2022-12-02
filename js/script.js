//input process output method of writing code
// IIFE //by wrapping everything in the function all the variablees dont exist in the global scope any more
///////////
//consts and lets////
//////

const $input = $('input[type="text"]');
const $pokemon = $('#pokemon');
const $moveSet = $('#moveSet');
const $type = $("#type");
const nationalDex = "https://pokeapi.co/api/v2/pokemon/";

// ${($input)

//not sure how to input the name from a text box but it holds 

/////////
// ////juqery elements/////
// $$$$$ eleemetns

$body = $("#body");
$pokeSubmit = $("#pokeSubmit");
$form = $("#form-section");

/////
// addEventListener/////
///////////////////

    $form.on("submit", getNationalDex);


// ////////
// functions
// ////////

//getNationalDex();
//you can replace console.log with render(data.results) here to pushh the info to the next function console.log(data)
function getNationalDex(event) {
  event.preventDefault(); //allows mee to stop the submit button from functioning  for example
  userInput = $input.val(); //get value from the input on the textbox
  if (userInput === "") return;
  $input.val("");
  $.ajax(nationalDex+userInput) //gets url and adds the userinput
    .then((data) => {
      console.log(data); //    render(data.results)
        $pokemon.text(data.name);
      // $moveSet.text(data.moves[0]);
      for (const move of data.moves ){
       $("<p>", {
         id: "move",
         class: "moves",
       })
         .text(move.move.name)
         .appendTo($moveSet);
      };
        // $type.text(data.type[0],[0]);
    })
    .catch(function (error) {
      console.log(error);
    });
  //   function render(pokemon) {
  //     //
}

/////psudocode
/*
1. Think of way to search for pokemon using national dex api 
2. run ajax XXX
3. write if then statements to begin to compare pokemon first attempt, gengar vs alakazam
*/
