var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
    labels : ["Feb 2016","Mar 2016","Apr 2016","May 2016","June 2016","Jul 2016", "Aug 2016", "Sep 2016", "Oct 2016", "Nov 2016", "Dec 2016", "Jan 2017", "Feb 2017"],
    datasets : [
        {
            fillColor : "rgba(0,168,113,0.5)",
            strokeColor : "rgba(202,255,238,0.8)",
            highlightFill: "rgba(0,168,113,0.75)",
            highlightStroke: "rgba(202,255,238,1)",
            data : [(34+137), (199+273+292+228), (734+152+304+224), (164+312+340+288+240+117), (299+216+300+398+603), (213+237+272+165+99), (77+330+339+228+320+228+277), (208+639+204+393+336+192), (353+300+205+263+213+305+169), (272+528+259), (66+559+346+226+528+260), (246+278+354+66), (475)]
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
