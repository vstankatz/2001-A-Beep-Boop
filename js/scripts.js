// Business Logic
var input = 12;
var outputArray = [];

function beepBoop(input) {

  for (var i=0; i <= input; i++) {
    var inputString = i.toString()
    var inputArray = inputString.split("");

    if (inputArray.includes("3")) {
      outputArray.push("I'm Sorry Dave, I'm afraid I can't do that.")
    } else if (inputArray.includes("2")) {
      outputArray.push("Boop!")
    }else if (inputArray.includes("1")){
      outputArray.push("Beep!")
    } else {
      outputArray.push(inputString)
    }
  }
  console.log(outputArray);
} //END OF FUNCTION!!!

// for (var i in wordArray)
// while (input >= 0) {
  //   input -1
  // }

  beepBoop(input)
  // User Logic
  $(document).ready(function() {
    $("form#input").submit(function(event) {
      event.preventDefault();
    })

  });
