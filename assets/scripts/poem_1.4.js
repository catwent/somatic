let activeDelta = 0;

// INPUT POETRY PHRASES
var alphaPhraseArray = [
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
  "i have shaken hands with some of the missed connections ",
  "buried in discarded receipts ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "how far have ",
  "the molecules that made up my younger body ",
  "traveled without me ",
  "some are cemented into the sidewalk ",
  "form the impression of strangers initials ",
  "and hearts now broken ",
  "some have become the atmosphere ",
  "that supports the birds ",
  "and some sing outside my window ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "teach me how to play the strings ",
  "by any formula ",
  "there is a spare car key his wife keeps hidden ",
  "Looking at the process in reverse ",
  "the fiery form of rain puddles ",
  "leaves divided ",
  "a pop up store ",
  "as if from a magicians hat ",
  "yes, there are ants on the ground ",
  "but every step cannot be a lifesaving project ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
];

var betaPhraseArray = [
  "necks straining to look ",
  "the desperate heat of arms raised too long ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "wishing to be called upon to speak ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "reaching ",
  "stretching ",
  "straining ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "homeostatic comforts ",
  "and neutral fluid flows ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "a vibrating alert ",
  "of how i felt before the internet ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "grounded in naïveté ",
  "badgering thank yous ",
  "today has nothing to say ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "only vulnerable ankles ",
  "asking for the breeze to stop ",
  "the tunnels of drinking straws ",
  "giving their air ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "with the quivering nausea of uncertain timeframes ",
  "the hush of next years forgotten seeds ",
  "scuffed by heels grinding progress to a halt ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "to long for ",
  "to hope for ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "ringing ears ",
  "hot with cognition ",
  "mounting fluid pressure ",
  "a flood of awareness rushing to my head ",
];

var gammaPhraseArray = [
  "with only 12 megapixel vision ",
  "a window opens to ",
  "a faraway interior ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "undo writing ",
  "cancel ",
  "save page as ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "the orange glow of the evening ",
  "incognito looking ",
  "the harsh blue glow of 6 hours sleep ",
  "i wish i had saved before i closed ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "all you have to do is look at my history ",
  "in other words ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "accidentally opening yet another window ",
  "report broken ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "zoom to fit all their thoughts into my container ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "what you are searching for is not found ",
  "hook your password onto my keychain ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "are you sure ",
  "and on 20% power ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "tile all open windows ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "guides with unease ",
  "into an irregular grid ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
];

var geo1PhraseArray = [
  "people from ",
  "invaded and trespassed ",
  "mapping the invisible terrain ",
  "looking through ",
  "a city block ",
  "not alienated ",
  "not quartered into Cartesian yardplots ",
  "staggered fenceposts look to the sky to delineate ",
  "what is yours ",
  "my mobile private property ",
  "a neighborhood ",
  "transient to me ",
  "whistling past our collective ear canal ",
  "through a crisp crunch of blue air ",
  "building a world through experience ",
  "and yellow border ",
  "working with other peoples garbage ",
  "staggering through convenience store hymns ",
  "on the moderate hills that should be parks ",
  "it will be warmer when the leaves drop ",
  "you are the only one, said the stranger ",
  "only what? ",
  "the only one standing on the corner? ",
  "the only one listening to his song, probably ",
  'across from a sign that reads, "work" ',
  "the city built benches ",
  "to stop ",
  "to rest ",
  "to watch ",
  "to wait to get catcalled ",
  '"bye sweetheart" ',
  "only a coward starts a fire when the light turns green ",
  "a middle finger is not a dowsing rod ",
  "the wind leans into my shoulder for support ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
];

var geo2PhraseArray = [
  "a honk ",
  "awoke a new learning path ",
  "an imaginary posture for sitting ",
  "stirred a desire for stillness  ",
  "and so does a door hinge ",
  "sitting behind glass ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "to keep one from falling ",
  "ascend from the sidewalks ",
  "blue underside veins ",
  "i meet the bouquets again at sunset ",
  "two blocks west and one block north ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "mildew water sits untouched today ",
  "in siris armchair ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "and the hellos how are yous ",
  "those who drink tea have it upstairs ",
  "pieces of grit shaped into a procession of steps ",
  "and overlook the last green leaf ",
  "a twelve minute nap ",
  "that flow upstream ",
  "a dozen pizzagoers ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "depending on which home i am coming from ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "a brake squeals ",
  "leaning on the handrails of intuition ",
  "punctuated by a reminder of the time ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "from beaks i understand ",
  "from over there ",
  "or one block south and two blocks east ",
  "a mostly metallic fabric ",
];

var geo3PhraseArray = [
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "we give power to such non-significant things ",
  "an alive myth, according to avery ",
  "cleansing the sonic interior ",
  "watering indoor cigarette butt flowers ",
  "synthetic silk holds a pixelated image of ",
  "at the center ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "a gifted gradient ",
  "toward julios soft desk ",
  "circulating due dates ",
  "a thin film of apple skin ",
  "dilating pupils adjust to ",
  "cut through horizontal beams ",
  "giving a push ",
  "i look when no one is looking ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "each time it is stepped on ",
  "the corner of daylight and shadow ",
  "i usually say something ",
  "an unkown friend gave me ",
  "laboring in the margins, upstairs ",
  "a public private place ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "diagonal smoke smells ",
  "around a would-be basketball court ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "forms a primordial barrier around ",
  "a modicum of plastic coating ",
  "through ainsleys social curtain ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "crumpled paper sheds ",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ",
  "a guillotine arm swings ",
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
    }, 3000);
  });
}

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

          console.log({ alphaDegrees, betaDegrees, gammaDegrees });

          // NAME INDICES FOR POETRY
          var alphaIndex = Math.floor(alphaDegrees / 10);
          var betaIndex = Math.floor(betaDegrees / 10);
          var gammaIndex = Math.floor(gammaDegrees / 10);
          var geo1Index = Math.floor(alphaDegrees / 10);
          var geo2Index = Math.floor(betaDegrees / 10);
          var geo3Index = Math.floor(gammaDegrees / 10);

          // SPACE VARIABLE
          let spaces =
            "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";

          // GET PHRASES PER INDICES
          var alphaPhrase = rollDie(activeDelta)
            ? spaces
            : alphaPhraseArray[alphaIndex];
          var betaPhrase = rollDie(activeDelta)
            ? spaces
            : betaPhraseArray[betaIndex];
          var gammaPhrase = rollDie(activeDelta)
            ? spaces
            : gammaPhraseArray[gammaIndex];
          var geo1Phrase = rollDie(activeDelta)
            ? spaces
            : geo1PhraseArray[geo1Index];
          var geo2Phrase = rollDie(activeDelta)
            ? spaces
            : geo2PhraseArray[geo2Index];
          var geo3Phrase = rollDie(activeDelta)
            ? spaces
            : geo3PhraseArray[geo3Index];

          // PLACE POETRY PHRASES
          var poemContainer = document.getElementById("poem");
          poemContainer.innerHTML =
            alphaPhrase +
            betaPhrase +
            gammaPhrase +
            geo1Phrase +
            geo2Phrase +
            geo3Phrase;
        });
      }
    })
    .catch(console.error);
});

// DIE
const rollDie = function (delta) {
  var roll = Math.floor(Math.random() * 100) + 1;
  if (roll <= delta) return true;
  return false;
};

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
    console.log(arePointsNear(currentLocation, centerPoint, 10));
    const distance = distanceFromLocation(currentLocation, centerPoint);
    if (distance >= 20 && distance <= 40) {
      activeDelta = 10;
    } else if (distance >= 40 && distance <= 60) {
      activeDelta = 20;
    } else if (distance >= 170 && distance <= 190) {
      activeDelta = 80;
    }
  };

  const handleErrorOnLocation = (error) => {
    console.log(error);
  };
  navigator.geolocation.watchPosition(handleLocation, handleErrorOnLocation, {
    enableHighAccuracy: true,
  });
} else {
  console.log("device does not support geolocation");
}

function distanceFromLocation(checkPoint, centerPoint) {
  var ky = 40000 / 360;
  var kx = Math.cos((Math.PI * centerPoint.latitude) / 180.0) * ky;
  var dx = Math.abs(centerPoint.latitude - checkPoint.latitude) * kx;
  var dy = Math.abs(centerPoint.latitude - checkPoint.latitude) * ky;
  return Math.sqrt(dx * dx + dy * dy) * 1000;
}

function arePointsNear(checkPoint, centerPoint, m) {
  return distanceFromLocation(checkPoint, centerPoint) >= m;
}
