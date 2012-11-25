var text_area = document.getElementById( "edit-box" );

text_area.addEventListener( 'keyup', function onKeyUp(event) {
    if ( event.keyCode == 13 ) {
        var text = text_area.value.replace( /(\r\n|\n|\r)/gm, "" );
        self.port.emit( "text-entered", text );
        text_area.value = "";
    }
}, false );

self.port.on( "show", function onShow() {
    text_area.focus();
} );
