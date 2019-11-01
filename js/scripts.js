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

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player("YouTubeBackgroundVideoPlayer", {
    videoId: '{e-QFj59PON4}',
    width: auto,
    height: auto,
    playerVars: {
      playlist: '{e-QFj59PON4}',
        autoplay: 1,
        showinfo: 0,
        modestbranding: 1,
        loop: 1,
        rel:0,
        enablejsapi:1,

    },
    events: {
      onReady: function(video) {
        video.target.mute();
        vido.target.setPlaybackQuality('hd180');
      },
      onStateChange: function(video) {
        if (video && video.data === 1) {
          var videoHolder =
          document.getElementByID("player")
          if (videoHolder && videoHolder.id) {
            videoHolder.classList.remove("LOADING PLACEHOLDER");
          }
        } else if (video && video.data === 0) {
          video.target.playVIdeo()
        }
      }
    }
  });
}
  onYouTubeIframeAPIReady()
  beepBoop(input)
  // User Logic
  $(document).ready(function() {
    $("form#input").submit(function(event) {
      event.preventDefault();
    })

  });
