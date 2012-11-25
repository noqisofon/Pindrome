// main.js
var self = require( "self" );
var data = self.data;
var panel = require( "panel" );
var widgets = require( "widget" );


var text_entry = panel.Panel( {
    width: 212,
    height: 200,
    contentURL: data.url( "text-entry.html" ),
    contentScriptFile: data.url( "get-text.js" )
} );


widgets.Widget( {
    label: "Text entry",
    id: 'text-entry',
    contentURL: "http://www.mozilla.org/favicon.ico",
    panel: text_entry
} );

text_entry.on( "show", function () {
    text_entry.port.emit( "show" );
} );

text_entry.port.on( "text-entered", function (text) {
    console.log( text );
    text_entry.hide();
} );

