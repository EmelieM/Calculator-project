

function onMapClick(event){
    console.log($(this))
    console.log(event)
    console.log(event.target)

    const appElement = $(this);
    const target = $(event.target);
    const userPressedShiftKey = event.shiftKey;

    if (target.hasClass('pin') && userPressedShiftKey){
        target.remove()
    } else if (!target.hasClass('pin')){
        const pinX = event.offsetX;
        const pinY = event.offsetY;
        const currentPin = $('<div></div>').addClass('pin');
        $(currentPin).css('left', pinX);
        $(currentPin).css('top', pinY);
        appElement.append(currentPin);
    }
    
}

$('.app').click(onMapClick)

