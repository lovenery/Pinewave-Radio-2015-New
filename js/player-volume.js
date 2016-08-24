$(function(){
	var player = $("#jquery_jplayer_volume").jPlayer({
		swfPath: "js",
		supplied: "mp3",
		title: "請先選歌",
		cssSelectorAncestor:"#jp_container_1",
        useStateClassSkin: true
	});


	$('.play-button').click(function(){

		var div = $(this);
		var programId = div.data('program-id');
		var volumeId = div.data('volume-id');
		var title = div.data('title')+'';


		//console.log(programId + ' ' + volumeId);

		player.jPlayer( "setMedia", {
			mp3: '/program/'+programId+'/track/'+volumeId,
			title: title
		} );
		player.jPlayer("play");

		$("#volume_player").show('400');

		//disappear
		$("#live_player").css("display","none");
		$("#jquery_jplayer_live").jPlayer("clearMedia");
	});

});