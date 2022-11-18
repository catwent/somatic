// INPUT POETRY PHRASES

var phrases = [
    'a low hum ',
    'a high pitched whirr ',
    'trying to to locate the source ',
    'taking solace ',
    'in the convalesce ',
    'of peeling polish ',
    'and fading pigment ',
    'i find myself ',
    'wanting to ask ',
    'how many fluttering wings ',
    'or whistling songs ',
    'have gone extinct ',
    'I have shaken hands with some of the missed connections ',
    'buried in discarded receipts ',
    'how far have ',
    'the molecules that made up my younger body ',
    'traveled without me ',
    'some are cemented into the sidewalk ',
    'form the impression of strangers’ initials ',
    'and hearts now broken ',
    'some have become the atmosphere ',
    'that supports the birds ',
    'and some sing outside my window ',
    'necks straining to look ',
    'the desperate heat of arms raised too long ',
    'wishing to be called upon to speak ',
    'to hope for ',
    'to long for ',
    'a city block ',
    'not alienated ',
    'not quartered into Cartesian yardplots ',
    'staggered fenceposts look to the sky to delineate ',
    'what is yours ',
    'what is my private property ',
    'a neighborhood ',
    'transient to me ',
    'whistling past our collective ear canal ',
    'through a crisp crunch of blue air ',
    'reaching ',
    'stretching ',
    'straining ',
    
    'with the quivering nausea of uncertain timeframes ',
    'people from ',
    'my mobile private property ',
    'invaded and trespassed ',
    'mapping the invisible terrain ',
    'looking through a ',
    'with only 12 megapixel vision ',
    'a window opens to ',
    'search ',
    'what you are searching for is not found ',
    'undo writing ',
    'cancel ',
    'save page as ',
    'ringing ears ',
    'mounting fluid pressure ',
    'a flood of awareness rushing to my head ',
    'ears hot with cognition ',
    'the hush of next year’s forgotten seeds ',
    'scuffed by heels grinding progress to a halt ',
    'teach me how to play the strings ',
    'by any formula ',
    'building a world through experience ',
    'and yellow border ',
    'working with other people’s garbage ',
    'staggering through convenience store hymns ',
    'on the moderate hills that should be parks ',
    'there is a spare car key his wife keeps hidden ',
    'looking at the process in reverse ',
    'the fiery form of rain puddles ',
    'leaves divided ',
    'a pop up store ',
    'as if from a magicians hat ',
    'yes, there are ants on the ground ',
    'but every step can’t be its own project ',
    'a honk ',
    'a high pitched whirr ',
    'a brake squeals ',
    'and so does a door hinge ',
    'a mostly metallic fabric ',
    'punctuated by a reminder of the time ',
    'from over there ',
    'it will be warmer when the leaves drop ',
    'a vibrating alert ',
    'of how i felt before the internet ',
    'grounded in naïveté ',
    'badgering thank yous ',
    'today has nothing to say ',
    'only ankles ',
    'asking for the breeze to stop ',
    'the tunnels of drinking straws ',
    'giving their air ',
    '“you’re the only one” said the stranger ',
    'only what? ',
    'the only one standing on the corner? ',
    'the only one listening to his song, probably ',
    'work ',
    'blue underside veins ',
    '“bye sweetheart” ',
    'only a coward starts a fire when the light turns green ',
    'a middle finger is not a dowsing rod ',
    'the city built benches ',
    'to stop ',
    'to rest ',
    'to watch ',
    'to wait to get catcalled ',
    
];





// GET DIV TO PLACE POETRY

var poemContainer = document.getElementById("poem");







// RANDOMIZE ARRAY FUNCTION

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }




// FUNCTION TO SHUFFLE AND PLACE FIRST N IN HTML
function writePoem {

    // SHUFFLE POETRY PHRASES
    shuffle(phrases);
    console.log(phrases);

    // ONLY GET THE FIRST N PHRASES
    const firstPhrases = phrases.slice(0, 12);

    // PLACE POETRY PHRASES
    poemContainer.innerHTML = firstPhrases.join('');

};




// REFRESH ON MOVEMENT

// window.addEventListener('devicemotion', (writePoem) => {
//     console.log(phrases);
// });

// ondevicemotion = (event) => { };


