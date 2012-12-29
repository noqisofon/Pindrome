self.on( 'click', function (node, data) {
    self.port.emit( 'get-data', node.src );
} );
