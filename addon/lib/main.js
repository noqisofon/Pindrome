var ContextMenu = require( 'context-menu' );
var self = require( 'self' );
var ss = require( 'single-storage' );


ss.storage.imageLists = [];

context_item = ContextMenu.Item( {
    label: "ぴんどる",
    context: ContextMenu.SelectorContext( 'img' ),
    contentScriptFile: self.data.url( 'pindrome-context-item.js' ),
    onMessage: function () {
        console.log( "in message" );
    }
} );


context_item.port.on( 'get-data', function (node_src) {
    console.log( "node_src: " + node_src );
    ss.storage.imageLists.push( node_src );
} );
