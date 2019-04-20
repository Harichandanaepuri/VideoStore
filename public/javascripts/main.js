$(function(){
	$.ajax({
	method:'GET',
	url:'api/videos',
	success:function(videos){
		$.each(videos,function(i,video){
			$("#videolist").append('<li>'+video.title+'</li>');
		});
	},
	error:function(){
		alert("error getting results");
	}
});

	$("#add").click(function(){
		var vtitle=$("#title").val();
		var vgenre=$("#genre").val();
		var vdesc=$("#description").val();
		var videos={
			title:vtitle,
			genr:vgenre,
			description:vdesc
		}

		$.ajax({
	method:'POST',
	url:'api/videos',
	data:videos,
	success:function(newvideo){
			$("#videolist").append('<li>'+newvideo.title+'</li>');
	},
	error:function(){
		alert("error getting results");
	}
});
	});

});