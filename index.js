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

function sayHiToGrandma(cantHear) {
  if (cantHear == cantHear.toLowerCase) {
    console.log("I can't hear you!");
  }
}

shout("hello");
whisper("HELLO")
logShout("hello");
logWhisper("HELLO");
