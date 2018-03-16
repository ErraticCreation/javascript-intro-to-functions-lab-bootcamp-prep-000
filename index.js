function shout(scream) {
  return scream.toUpperCase();
}

function whisper(quiet) {
  return quiet.toLowerCase();
}

function logWhisper(quiet) {
  console.log(quiet.toLowerCase());
}



shout("hello");
whisper("HELLO")
logWhisper("HELLO");
