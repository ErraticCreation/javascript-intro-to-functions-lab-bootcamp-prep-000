function shout(scream) {
  return scream.toUpperCase();
}

function whisper(quiet) {
  return quiet.toLowerCase();
}

function logShout(scream) {
  console.log(scream.toUpperCase());
}

function logWhisper(quiet) {
  console.log(quiet.toLowerCase());
}

function sayHiToGrandma(canSheHear) {
  if (canSheHear == canSheHear.toLowerCase) {
    console.log("I can't hear you!");
  } else if (canSheHear == canSheHear.toUpperCase()) {
    console.log("YES INDEED!");
  }
}

shout("hello");
whisper("HELLO")
logShout("hello");
logWhisper("HELLO");
sayHiToGrandma("hello");
sayHiToGrandma("HELLO");