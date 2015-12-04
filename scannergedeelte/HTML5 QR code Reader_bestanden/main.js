$(document).ready(function(){
	$('#reader').html5_qrcode(function(data){
		var data = data-1;
		var dataArray = 
		[
			{
				noteText:"Johnny Depp is gescant",
				result:"Johnny Depp",
				subjectId:"subject1Button"
			},
			{
				noteText:"Nicolas Cage is gescant",
				result:"Nicolas Cage",
				subjectId:"subject2Button"
			},
			{
				noteText:"Brad Pitt is gescant",
				result:"Brad Pitt",
				subjectId:"subject3Button"
				
			},
			{
				noteText:"Ryan Gosling is gescant",
				result:"Ryan Gosling",
				subjectId:"subject4Button"
				
			}
		];
		
					document.getElementById("noteText").innerHTML = dataArray[data].noteText;
    				document.getElementById("notification").className = "notification screen";
    				document.getElementById("result").innerHTML = dataArray[data].result;
    				document.getElementById(dataArray[data].subjectId).className = "subjects";
    				document.getElementById("result").className = "result "+dataArray[data].subjectId;
    				document.getElementById("unscanned").className = "hidden";
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			$('#vid_error').html(videoError);
		}
	);
});
