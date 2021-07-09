function shout(string) {
    return string.toUpperCase("hello");
}
function whisper(apology) {
    return apology.toLowerCase("SORRY")
}
function logShout(test) {
    console.log(test.toUpperCase("hello"));
}
function logWhisper(apology) {
    console.log(apology.toLowerCase("SORRY"))
}
function sayHiToGrandma(greetings) {
   if (greetings === greetings.toUpperCase("hello")){
       return "YES INDEED!"
   }
   if (greetings === greetings.toLowerCase("HELLO")){
       return "I can't hear you!"
   }
   if (greetings === "I love you, Grandma.") {
       return "I love you, too."
   }
   
};
