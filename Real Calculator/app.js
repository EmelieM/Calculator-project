
let heldValue = null;
let heldOperation = null;
let nextValue = null;



$('.digits button').click(function (){
    if (nextValue === null){
        nextValue = "0"
    }

    nextValue += $(this).text()

    $('.next-value').text(nextValue)

    updateDisplay()
})

//

function showValue(location, value){
    if (value === null){
        $(location).text('')
    } else {
        $(location).text(Number(value))
    }
}

//

function updateDisplay(){
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)
}

//

function setHeldOperation(operation){
    if (heldOperation !== null){
        heldValue = heldOperation(heldValue, nextValue)
    } else if (nextValue !==null && heldOperation == null){
        heldValue = nextValue
    }

    console.log(heldOperation)

    nextValue = null;
    heldOperation = operation;
}

//

function add(x, y){
    return Number(x) + Number(y)
}


$('.add').click(function (){
    setHeldOperation(add)

    $('.next-operation').text('+')
  
    updateDisplay()
})

//

function subtract(x, y){
    return Number(x) - Number(y)
}

$('.subtract').click(function (){
    setHeldOperation(subtract)

    $('.next-operation').text('-')
  
    updateDisplay()
})

//

function multiply(x, y){
    return Number(x) * Number(y)
}

$('.multiply').click(function (){
    setHeldOperation(multiply)

    $('.next-operation').text('x')
  
    updateDisplay()
})

//

function divide(x, y){
    return Number(x) / Number(y)
}

$('.divide').click(function (){
    setHeldOperation(divide)

    $('.next-operation').text('/')
  
    updateDisplay()
})

//

$('.equals').click(function (){
    setHeldOperation(null)

    $('.next-operation').text('')

    updateDisplay()
})

//

$('.clear-all').click(function (){
    showValue('.held-value', heldValue)
    showValue('.next-value', nextValue)
heldValue = null
heldOperation = null
nextValue = null

    $('.next-operation').text('')

    updateDisplay()
})

//

$('.clear-entry').click(function (){
    showValue('.next-value', nextValue)
    
    nextValue = null
    
    updateDisplay()
})

///////////

// function immediateResult(value, operation){
//     operation(value)

//     updateDisplay()

// }

// function inverse(x){
//     return 1 / x
// }

// $('.bonusOps .inverse').click(function(){
//     immediateResult(heldValue, inverse)
//     updateDisplay()
// })




// function squareRoot(x){
//     return Math.sqrt(x)
// }

// $('.bonusOps .squareRoot').click(function(){
//     immediateResult(heldValue, squareRoot)
//     updateDisplay()
// });



// function negativeNum(x){
//     if (x>0){
//         return -(x)} else if (x<0){
//             return +(x)
//         }
// }

// $('.bonusOps .negative').click(function(){
//     immediateResult(heldValue, negativeNum)
//     updateDisplay()
// })


// function toPi(){
//     return Math.PI
// }

// $('.bonusOps .Pi').click(function(){
//     heldValue = toPi()
//     updateDisplay()
// })