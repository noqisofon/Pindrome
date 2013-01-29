//   
// コンテキスト・メニュー用モジュール。
// 
var ContextMenu = require( 'context-menu' );
// 
// ローカルディレクトリ操作用モジュール。
// 
var self = require( 'self' );
// 
// シンプルストレージモジュール。
// 
var ss = require( 'simple-storage' );


/*
 * シンプルストレージに imageList フィールドを追加します。
 */
ss.storage.imageList = [];


/**
 * OverQuota イベントのハンドラです。
 * シンプルストレージがいっぱいになった場合、呼び出されます。
 */
ss.on( 'OverQuota', function () {
    console.log( "in OverQuoata" );
} );


/*
 * 「ぴんどる」のコンテキストメニューアイテムを作成します。
 */
pinddrome_context_item = ContextMenu.Item( {
    label: "ぴんどる",
    // img 要素上でコンテキストメニュー
    context: ContextMenu.SelectorContext( 'img' ),
    // ../data/pindrome-context-item.js
    contentScriptFile: self.data.url( 'pindrome-context-item.js' ),
    // 
    // self.postMessage() が呼ばれた時に呼び出されます。
    // コンテキスト・メニュー・アイテムに port がないので、あっち側では
    // postMessage() を呼び出して port.emit() の代わり
    // 
    onMessage: function (node_src) {
        console.log( "in message: " + node_src );
        ss.storage.imageList.push( node_src );
        console.log( "quota usage: " + ss.quotaUsage );
    }
} );
