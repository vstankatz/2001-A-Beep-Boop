// Business Logic
var input = 211;
var outputArray = [];

function beepBoop(input) {
  inputString = input.toString()
  var inputArray = inputString.split("");
console.log(inputArray);

    if (inputArray.includes("3") || ("2") || ("1")) {
      if (inputArray.includes("3")) {
        outputArray.push("I'm Sorry Dave, I'm afraid I can't do that.")
      } else if (inputArray.includes("2")) {
        outputArray.push("Boop!")
        console.log(outputArray);
      }else {
        outputArray.push("Beep!")
        console.log(outputArray);
      }

    }else if (input >= 0) {
      outputArray.push(input)
    } else {
      console.log("error!!");
    } console.log(outputArray);

} //END OF FUNCTION!!!

// for (var i in wordArray)
// while (input >= 0) {
//   input -1
// }

beepBoop(input)
// User Logic
$(document).ready(function() {

})
;
