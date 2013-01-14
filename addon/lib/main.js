var ContextMenu = require( 'context-menu' );
var self = require( 'self' );
var ss = require( 'single-storage' );


/*
 * シンプルストレージに imageList フィールドを追加します。
 */
ss.storage.imageList = [];


/*
 * 「ぴんどる」のコンテキストメニューを作成します。
 */
context_item = ContextMenu.Item( {
    label: "ぴんどる",
    context: ContextMenu.SelectorContext( 'img' ),
    contentScriptFile: self.data.url( 'pindrome-context-item.js' ),
    onMessage: function () {
        console.log( "in message" );
    }
} );


/*
 * get-data イベントのハンドラです。
 */
context_item.port.on( 'get-data', function (node_src) {
    console.log( "in get-data: node_src: " + node_src );
    ss.storage.imageList.push( node_src );
} );
