// main.js
AddonPage = require( 'addon-page' );
Self = require( 'self' );
Tabs = require( 'tabs' );
Widgets = require( 'widget' );


var pindrome_addon_icon = Widgets.Widget( {
    id: 'pindrome-addon-icon',
    label: 'Pindrome',
    contentURL: Self.data.url( 'favicon.png' )
} );

pindrome_addon_icon.on( 'click', function () {
    console.log( "clicked" );
    var addon_page = Tabs.open( Self.data.url( 'index.html' ) );
} );
