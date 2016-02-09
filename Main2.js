/**
 * Created by Administrator on 1/22/2016.
 */
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