var ContextMenu = require( 'context-menu' );
var self = require( 'self' );

context_item = ContextMenu.Item( {
    label: "ぴんどる",
    context: ContextMenu.SelectorContext( 'img' ),
    contentScriptFile: self.data.url( 'pindrome-context-item.js' ),
    onMessage: function () {
        console.log( "in message" );
    }
} );
