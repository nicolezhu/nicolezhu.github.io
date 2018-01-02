var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
    labels : ["Feb 2017","Mar 2017","Apr 2017","May 2017","June 2017","Jul 2017", "Aug 2017", "Sep 2017", "Oct 2017", "Nov 2017", "Dec 2017"],
    datasets : [
        {
            fillColor : "rgba(0,168,113,0.5)",
            strokeColor : "rgba(202,255,238,0.8)",
            highlightFill: "rgba(0,168,113,0.75)",
            highlightStroke: "rgba(202,255,238,1)",
            data : [(214+341+355+336+130),
            (385+80+144+453+306+224),
            (83+281+272+192+41),
            (138+184+343+372+376),
            (296+106+320+110+256),
            (256+231+256+150+320+221+212),
            (304+317+418+102+320),
            (256+192+291+266+196+320),
            (480+423+274+190+224),
            (262+352+286+444+256+288),
            (96+450)]
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
