// self.on( 'context', function (node) {
//     console.log( "self in context: " + node );
//     console.log( "node.src = " + node.src );
// } );


self.on( 'click', function (node, data) {
    console.log( "self in click: " + node + ", " + data );

    self.postMessage( node.src );
} );
