// Business Logic
var outputArray = [];

function beepBoop(input) {
  console.log(input);

  for (var i=0; i <= input; i++) {
    var inputString = i.toString()
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
  $("#question").hide();
  $("#answer").show();
  console.log(outputArray);
} //END OF FUNCTION!!!





  // User Logic
  $(document).ready(function() {
    $("#answer").hide();
    var backBtn = document.getElementById("backBtn");
    backBtn.onclick = function() {
      $("#question").show();
      $("#answer").hide();
      document.getElementById("input").reset();
    }
    $("form#input").submit(function(event) {
      event.preventDefault();
      var input = $("input#inputNumber").val();
      beepBoop(input)
      $("#inputValue").text(input);
      $("#output").text(outputArray.join(""));


    })

  });
