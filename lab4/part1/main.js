
/*
Name: Alyssa Hunsdale-Rydzanicz
File: main.js
Date: 07-28-2026
Silly Storyline generator
*/

// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings
const characters=["Willy the Goblin","Big Daddy","Father Christmas"];
// Willy the Goblin
// Big Daddy
// Father Christmas
const locations=["the soup kitchen","Disneyland","the White House"];
// the soup kitchen
// Disneyland
// the White House
const events=["spontaneously combusted","melted into a puddle on the sidewalk",
    "turned into a slug and slithered away"];
// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// Partial return random string function

function returnRandomStoryString() {
    const randomCharacter=randomValueFromArray(characters);
    const randomLocations=randomValueFromArray(locations);
    const randomEvents=randomValueFromArray(events);
  // It was 94 Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.
    let storyText='It was 94 Fahrenheit outside, so ${randomCharacter}        went for a walk. When they got to ${randomLocation},  they stared in horror for a few moments, then ${randomEvent}.Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.';


    return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
    let newStory=returnRandomStoryString();

    if (customName.value !== "") {
    const name = customName.value;
    newStory=newStory.replace("Bob",name);
    }

    if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14)   ;
    const temperature = Math.round ( (94-32)*(5/9))} Clesius;
    }

    // TODO: replace "" with the correct expression
    story.textContent = "";
    story.style.visibility = "visible";
        