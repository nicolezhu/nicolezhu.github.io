$(document).ready(function() {
	console.log('hello');
});

var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
	labels : ["Feb 2015","Mar 2015","Apr 2015","May 2015","June 2015","Jul 2015", "Aug 2015", "Sep 2015", "Oct 2015", "Nov 2015", "Dec 2015", "Jan 2016", "Feb 2016"],
	datasets : [
		{
			fillColor : "rgba(0,168,113,0.5)",
			strokeColor : "rgba(202,255,238,0.8)",
			highlightFill: "rgba(0,168,113,0.75)",
			highlightStroke: "rgba(202,255,238,1)",
			data : [23, (375+104+213), (267+326+161+306+320), 507, (690+496+258), (188+277+320+152), (445+256+272+369), (316+652+759+385+160+288+130), (304+128+128+194), (256+293+376+237), (528+227+496+268+467+368+232+336), (279+71+292+256+128), (466+360+432)]
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
