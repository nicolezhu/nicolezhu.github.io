var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
    labels : ["Jan 2018", "Feb 2018","Mar 2018","Apr 2018","May 2018","June 2018","Jul 2018", "Aug 2018", "Sep 2018", "Oct 2018", "Nov 2018", "Dec 2018"],
    datasets : [
        {
            fillColor : "rgba(0,168,113,0.5)",
            strokeColor : "rgba(202,255,238,0.8)",
            highlightFill: "rgba(0,168,113,0.75)",
            highlightStroke: "rgba(202,255,238,1)",
            data : [(240+326+367+172+512+115),
            (189+260+208+248+248+263+272),
            (438+258+320+310),
            (138+308+154),
            (94+416+271+371+248+320+394),
            (248+376+270+329+17),
            (271+216+341+304+95),
            (159+500+323+336+368+355+160),
            (60+160+182+417+468+352+324+224),
            (512+43),
            (197+373+163+336+174),
            (236+416+374+528)]
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
