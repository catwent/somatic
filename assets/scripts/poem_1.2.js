// INPUT POETRY PHRASES
var phrases = [
  "a low hum ",
  "a high pitched whirr ",
  "trying to to locate the source ",
  "taking solace ",
  "in the convalesce ",
  "of peeling polish ",
  "and fading pigment ",
  "i find myself ",
  "wanting to ask ",
  "how many fluttering wings ",
  "or whistling songs ",
  "have gone extinct ",
  "I have shaken hands with some of the missed connections ",
  "buried in discarded receipts ",
  "how far have ",
  "the molecules that made up my younger body ",
  "traveled without me ",
  "some are cemented into the sidewalk ",
  "form the impression of strangers’ initials ",
  "and hearts now broken ",
  "some have become the atmosphere ",
  "that supports the birds ",
  "and some sing outside my window ",
  "necks straining to look ",
  "the desperate heat of arms raised too long ",
  "wishing to be called upon to speak ",
  "to hope for ",
  "to long for ",
  "a city block ",
  "not alienated ",
  "not quartered into Cartesian yardplots ",
  "staggered fenceposts look to the sky to delineate ",
  "what is yours ",
  "what is my private property ",
  "a neighborhood ",
  "transient to me ",
  "whistling past our collective ear canal ",
  "through a crisp crunch of blue air ",
  "reaching ",
  "stretching ",
  "straining ",

  "with the quivering nausea of uncertain timeframes ",
  "people from ",
  "my mobile private property ",
  "invaded and trespassed ",
  "mapping the invisible terrain ",
  "looking through a ",
  "with only 12 megapixel vision ",
  "a window opens to ",
  "search ",
  "what you are searching for is not found ",
  "undo writing ",
  "cancel ",
  "save page as ",
  "ringing ears ",
  "mounting fluid pressure ",
  "a flood of awareness rushing to my head ",
  "ears hot with cognition ",
  "the hush of next year’s forgotten seeds ",
  "scuffed by heels grinding progress to a halt ",
  "teach me how to play the strings ",
  "by any formula ",
  "building a world through experience ",
  "and yellow border ",
  "working with other people’s garbage ",
  "staggering through convenience store hymns ",
  "on the moderate hills that should be parks ",
  "there is a spare car key his wife keeps hidden ",
  "looking at the process in reverse ",
  "the fiery form of rain puddles ",
  "leaves divided ",
  "a pop up store ",
  "as if from a magicians hat ",
  "yes, there are ants on the ground ",
  "but every step can’t be its own project ",
  "a honk ",
  "a high pitched whirr ",
  "a brake squeals ",
  "and so does a door hinge ",
  "a mostly metallic fabric ",
  "punctuated by a reminder of the time ",
  "from over there ",
  "it will be warmer when the leaves drop ",
  "a vibrating alert ",
  "of how i felt before the internet ",
  "grounded in naïveté ",
  "badgering thank yous ",
  "today has nothing to say ",
  "only ankles ",
  "asking for the breeze to stop ",
  "the tunnels of drinking straws ",
  "giving their air ",
  "“you’re the only one” said the stranger ",
  "only what? ",
  "the only one standing on the corner? ",
  "the only one listening to his song, probably ",
  "work ",
  "blue underside veins ",
  "“bye sweetheart” ",
  "only a coward starts a fire when the light turns green ",
  "a middle finger is not a dowsing rod ",
  "the city built benches ",
  "to stop ",
  "to rest ",
  "to watch ",
  "to wait to get catcalled ",
];

// BACKGROUND VIDEO

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const vendorUrl = window.URL || window.webkitURL;
const context = canvas.getContext("2d");
const constraints = {
  video: {
    facingMode: {
      exact: "environment",
    },
  },
};

function drawToCanvas(video, context, width, height) {
  context.drawImage(video, 0, 0, width, height);
}

if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  navigator.getMedia =
    navigator.mediaDevices.getUserMedia ||
    navigator.mediaDevices.webkitGetUserMedia ||
    navigator.mediaDevices.moxGetUserMedia ||
    navigator.mediaDevices.mozGetUserMedia ||
    navigator.mediaDevices.msGetUserMedia;

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      console.log("user camera is accessible");
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Error displaying video");
    });

  video.addEventListener("play", function () {
    setInterval(() => {
      drawToCanvas(this, context, canvas.width, document.body.clientHeight);
    }, 2000);
  });
}

// RANDOMIZE ARRAY
//Fisher Yeats shuffle
// SHUFFLE POETRY PHRASES
// shuffle(phrases);
// ONLY GET THE FIRST N PHRASES
// const firstPhrases = phrases.slice(0, 12);
//APPEND THIS TO JOIN ARRAY PHRASES WITHOUT COMMAS
//.join('')

// REQUEST DEVICE MOTION PERMISSIONS AND LOG

console.log("devicemotion");

// ON CLICK
document.addEventListener("click", (event) => {
  video.play();

  console.log("click");

  //REMOVE CLICK DIV
  document.getElementById("clickToBegin").style.display = "none";

  // REQUEST PERMISSIONS
  DeviceMotionEvent.requestPermission()
    .then((permissionState) => {
      // PERMISSION GRANTED
      if (permissionState === "granted") {
        // HANDLE MOTION EVENT LISTENER EVENT
        // window.addEventListener('devicemotion', (event) => {
        //     console.log(event.acceleration.x);
        // });

        // HANDLE DEVICE ORIENTATION LISTENER EVENT
        window.addEventListener("deviceorientation", (event) => {
          // NAME DEGREES (POSITIVE, WHOLE NUMBERS)
          var alphaDegrees = Math.floor(event.alpha + 180);
          var betaDegrees = Math.floor(event.beta + 180);
          var gammaDegrees = Math.floor(event.gamma + 180);

          // NAME INDICES FOR POETRY
          var alphaIndex = Math.floor(alphaDegrees / 10);
          var betaIndex = Math.floor(betaDegrees / 10) + 40;
          var gammaIndex = Math.floor(gammaDegrees / 10) + 80;

          // GET PHRASES PER INDICES
          var alphaPhrase = phrases[alphaIndex];
          var betaPhrase = phrases[betaIndex];
          var gammaPhrase = phrases[gammaIndex];
          console.log(betaPhrase);

          // PLACE POETRY PHRASES
          var poemContainer = document.getElementById("poem");
          poemContainer.innerHTML = alphaPhrase + betaPhrase + gammaPhrase;
        });
      }
    })
    .catch(console.error);
});

// GET GEOLOCATION
const centerPoint = {
  latitude: 41.30881020058423,
  longitude: -72.93275229404371,
};

if ("geolocation" in navigator) {
  console.log("geolocation is available");
  const handleLocation = (position) => {
    const currentLat = position.coords.latitude;
    const currentLng = position.coords.longitude;
    const currentLocation = {
      latitude: currentLat,
      longitude: currentLng,
    };

    if (arePointsNear(currentLocation, centerPoint, 0.1)) {
      console.log("Location is within 10 meters of center");
    }
  };
  navigator.geolocation.watchPosition(handleLocation);
} else {
  console.log("device does not support geolocation");
}

function arePointsNear(checkPoint, centerPoint, km) {
  var ky = 40000 / 360;
  var kx = Math.cos((Math.PI * centerPoint.latitude) / 180.0) * ky;
  var dx = Math.abs(centerPoint.latitude - checkPoint.latitude) * kx;
  var dy = Math.abs(centerPoint.latitude - checkPoint.latitude) * ky;
  console.log(Math.sqrt(dx * dx + dy * dy), checkPoint, centerPoint);
  return Math.sqrt(dx * dx + dy * dy) <= km;
}
