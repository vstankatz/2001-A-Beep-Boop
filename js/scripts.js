// Business Logic
function beepBoop(input) {
   this.outputArray = [];
  if (input >= 0) {
    for (var i=0; i <= input; i++) {
      var inputString = i.toString();
      var inputArray = inputString.split("");

      if (inputArray.includes("3")) {
        outputArray.push("I'm Sorry Dave, I'm afraid I can't do that" + ", ")
      } else if (inputArray.includes("2")) {
        outputArray.push("Boop!" + ", ")
      }else if (inputArray.includes("1")){
        outputArray.push("Beep!" + ", ")
      } else {
        outputArray.push(inputString + ", ")
      }
    }
    next();
  } else {
    alert("Please enter a positive number.");
  }
} //END OF FUNCTION!!!

function next() {
  $("#question").hide();
  $("#answer").show();
  $("#videoContent").hide();
  $("#playVideo").show();
};

  // User Logic
$(document).ready(function() {
  $("#answer").hide();
  var backBtn = document.getElementById("backBtn");
  var video = document.getElementById("answerVideo")
  backBtn.onclick = function() {
    $("#question").show();
    $("#answer").hide();
    document.getElementById("input").reset();
    outputArray.length = 0;
    video.currentTime = 0;
    video.pause();

  }

var play = document.getElementById("answer");
answer.onclick = function () {
  $("#videoContent").fadeIn();
  $("#playVideo").hide();
}


  $("form#input").submit(function(event) {
    event.preventDefault();
    var input = $("input#inputNumber").val();
    beepBoop(input)
    $("#inputValue").text(input);
    $("#output").text(outputArray);
  })
});
