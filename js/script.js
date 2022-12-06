//input process output method of writing code
// IIFE //by wrapping everything in the function all the variablees dont exist in the global scope any more
///////////
//consts and lets////
//////

const $input = $('input[type="text"]');
const $pokemon = $('#pokemon');
const $moveSet = $('#moveSet');
const $type = $('#type');
const $secondPlayerType = $('#player-type2')
const $enemyPokemon = $('#enemy-pokemon');
const $enemyMoveSet = $('#enemy-moveset');
const $enemyType = $('#enemy-type');
const $enemyInput = $('input[type="text-box"]'); // had to name the enemy input something different for it to execute
const $secondEnemyType = $('#enemy-type2');
const nationalDex = `https://pokeapi.co/api/v2/pokemon/`; // i think to only the top 20 pokemon for some reason
// /limit2000&offset=0
// ${($input)}

///////////////////////
// objects 
  //////////
 const fireType = {
   superEffective: ["ice", "grass", "bug", "steel"],
   notVeryEffective: ["fire", "dragon", "rock", "water"]
 };

      // if (getNationalDex == fireType.superEffective) {
      //   // if the second typing is super effective alert super effective
      //   alert = "You're super effective!";
      // }


//not sure how to input the name from a  text box but it holds 

/////////
// ////juqery elements/////
// $$$$$ eleemetns

$body = $("#body");
$pokeSubmit = $("#pokeSubmit");
$form = $("#form-section-player"); 
$enemyForm = $("#form-section-enemy");

/////
// addEventListener/////
///////////////////

$form.on("submit", getNationalDex); // listeening for thhe button to action. also works with the enter button 
$enemyForm.on("submit", getEnemyNationalDex);

// ////////
// functions
// ////////

//getNationalDex for the player 
//you can replace console.log with render(data.results) here to pushh the info to the next function console.log(data)
function getNationalDex(event) {
  event.preventDefault(); //allows mee to stop the submit button from functioning  for example
  userInput = $input.val(); //get value from the input on the textbox
  if (userInput === "") return;
  $input.val("");//starts with a blank input i believe 
  $.ajax(nationalDex + userInput) //gets url and adds the userinput
    .then((data) => {
      console.log(data); //    render(data.results)
      $pokemon.text(data.name);
      // $moveSet.text(data.moves[0]);
      for (const move of data.moves) {
        //iterates over moveset array in api
        $("<p>", {
          // this creates a new <p> for every move in the array
          id: "move",
          class: "moves",
        })
          .text(move.move.name)
          .appendTo($moveSet);
      }    
      $type.text(data.types[0].type.name);
      $secondPlayerType.text(data.types[1].type.name);
    })
    .catch(function (error) {
      console.log(error);

      
    });
  
  //   function render(pokemon) {
  //     //
}




//////////////////////////////////////
///ENEMY GET NATIONAL DEX FUNCTION/////


function getEnemyNationalDex(event) {
  event.preventDefault(); //allows mee to stop the submit button from functioning  for example
  userInput = $enemyInput.val(); //get value from the input on the textbox
  if (userInput === "") return;
  $enemyInput.val(""); //starts with a blank input i believe
  $.ajax(nationalDex + userInput) //gets url and adds the userinput
    .then((data) => {
      console.log(data); //    render(data.results)
      $enemyPokemon.text(data.name);
      // $moveSet.text(data.moves[0]);
      for (const move of data.moves) {
        //iterates over moveset array in api
        $("<p>", {
          //creates a new <p> for every move in the array
          id: "move",
          class: "moves",
        })
          .text(move.move.name)
          .appendTo($enemyMoveSet);
      }
      $enemyType.text(data.types[0].type.name);
      $secondEnemyType.text(data.types[1].type.name);

      console.log(data.types);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  //       if (fireType.superEffective.includes("ice")) { //checks supereffectiness of ice on every <p></p>
  //         // if the second typing is super efficeective alert super effective
  //         console.log("Its super effective!");
  //       }

  // 
}


// ///////
// if statements 
//   //////

  

/////psudocode
/*
1. Think of way to search for pokemon using national dex api 
2. run ajax XXX
3. write if then statements to begin to compare pokemon first attempt, gengar vs alakazam
*/
