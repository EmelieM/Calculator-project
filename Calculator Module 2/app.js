

let red 
let blue 
let green

//

function updateValues(){
    red = $('#red').val()
    green = $('#green').val()
    blue = $('#blue').val()
}

//

function updatePage(){
    $('.red-value').text(red)

    $('.green-value').text(green)
    
    $('.blue-value').text(blue)
    

    let colorString = `rgb(${red},${green},${blue})`

    $('.preview').css('background', colorString)

}

updatePage()

//

function updateAll(){
    updateValues()
    updatePage()
}

//
    
    $('.controls input').on('input', updateAll)

