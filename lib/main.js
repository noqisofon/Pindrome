// main.js
const widgets = require( "widget" );
const tabs = require( "tabs" );

var widget = widgets.Widget( {
    id: "twitter-link",
    label: "Twitter Website",
    contentURL: "https://si0.twimg.com/favicons/favicon.ico",
    onClick: function () {
        tabs.open( "https://twitter.com/" );
    }
} );
