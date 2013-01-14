self.on( 'click', function (node, data) {
    console.log( "self in click: " + data );
    self.port.emit( 'get-data', node.src );
} );
