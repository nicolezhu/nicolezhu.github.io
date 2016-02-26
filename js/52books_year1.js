$(document).ready(function() {
	console.log('hello');
});

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
	labels : ["Feb 2014","Mar 2014","Apr 2014","May 2014","June 2014","Jul 2014", "Aug 2014", "Sep 2014", "Oct 2014", "Nov 2014", "Dec 2014", "Jan 2015", "Feb 2015"],
	datasets : [
		{
			fillColor : "rgba(0,168,113,0.5)",
			strokeColor : "rgba(202,255,238,0.8)",
			highlightFill: "rgba(0,168,113,0.75)",
			highlightStroke: "rgba(202,255,238,1)",
			data : [320, 1469, 1184, 1754, 1313, 935, 1785, 1967, 1116, 1382, 1170, 935, 982]
		}
	]
}

window.onload = function(){
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myBar = new Chart(ctx).Bar(barChartData, {
		responsive : true,
		scaleShowGridLines : false,
		scaleShowHorizontalLines: false,
		scaleShowVerticalLines: false
	});
}