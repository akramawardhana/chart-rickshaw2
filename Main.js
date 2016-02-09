
var graph = new Rickshaw.Graph( {
    element: document.getElementById("chart"),
    width: 900,
    height: 500,
    renderer: 'area',
    stroke: true,
    preserve: true,
    series: [
        {
            color: 'orange',
            name: 'Kerbau',
            data: []
        },
        {
            color: 'darkorange',
            name: 'Sapi',
            data: []
        }
    ]
});

graph.render();

var hoverDetail = new Rickshaw.Graph.HoverDetail( {
    graph: graph,
    xFormatter: function(x) {
        return new Date(x * 1000).toString();
    }
} );

var ticksTreatment = 'glow';

var xAxis = new Rickshaw.Graph.Axis.Time( {
    graph: graph,
    ticksTreatment: ticksTreatment,

} );

xAxis.render();


var yAxis = new Rickshaw.Graph.Axis.Y({
    graph: graph,
    tickFormat: Rickshaw.Fixtures.Number.formatKMBT

});

yAxis.render();


new Rickshaw.Fixtures.PubNub({
    channel: 'rickshaw-channel-1',
    graph: graph
});


var pubnub = PUBNUB.init({
    publish_key: 'demo',
    subscribe_key: 'demo'
});

setInterval(function(){
    pubnub.publish({
        channel: 'rickshaw-channel-1',
        message: {
            y: [
                Math.random() * 99,
                Math.random() * 99
            ],
            x: new Date().getTime()
        }
    })
}, 1000);

