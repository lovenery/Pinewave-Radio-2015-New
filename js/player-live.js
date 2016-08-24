$(document).ready(function(){
  var stream = {
    title: "Pinewave Radio",
    mp3: "http://broadcast.pinewave.tw:8000/live"
  },
  ready = false;

  $("#jquery_jplayer_live").jPlayer({
    ready: function (event) {
      ready = true;
      $(this).jPlayer("setMedia", stream);
    },
    pause: function() {
      $(this).jPlayer("clearMedia");
    },
    error: function(event) {
      if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
        // Setup the media stream again and play it.
        $(this).jPlayer("setMedia", stream).jPlayer("play");
      }
    },
    swfPath: "js",
    supplied: "mp3",
    preload: "none",
    wmode: "window",
    cssSelectorAncestor:"#jp_container_2",
    useStateClassSkin: true,
    autoBlur: false,
    keyEnabled: true
  });

  $('#live-play-button').click(function(){
    $("#live_player").show('400');
    $("#jquery_jplayer_live").jPlayer("setMedia", stream).jPlayer("play");

    //disappear
    $("#volume_player").css("display","none");
    $("#jquery_jplayer_volume").jPlayer("clearMedia");
  });

});