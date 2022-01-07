var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

var barChartData = {
    labels : ["Jan 2021", "Feb 2021","Mar 2021","Apr 2021","May 2021","June 2021","Jul 2021", "Aug 20121", "Sep 2021", "Oct 2021", "Nov 2021", "Dec 2021"],
    datasets : [
        {
            fillColor : "rgba(0,168,113,0.5)",
            strokeColor : "rgba(202,255,238,0.8)",
            highlightFill: "rgba(0,168,113,0.75)",
            highlightStroke: "rgba(202,255,238,1)",
            data : [(310+208+288+206),
            (82+288+352+304+111),
            (273+256+276+240+423+757+295),
            (73+97+311+256+369+495),
            (336+288+288+384),
            (422+216+82),
            (232+208+76),
            (164+357+96+320+370+117+197),
            (155+197+368+377+186),
            (122+617+248+235),
            (339+197+373+88+226),
            (248+135+224+390+208+528+361+397+243+418)]
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
