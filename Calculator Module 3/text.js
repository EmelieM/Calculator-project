function reverse(text) {
    return text.split('').reverse().join('');
  }
  
  function scream(text) {
    return text.toUpperCase() + "!!!";
  }
  
  function drawOut(text) {
    return text.split('').join("...");
  }

  //

  function updateText(){
      let userInput = $('#user-input').val()
      let currentText = textFunction(userInput)
      $('#transformed').text(currentText)

  }
  
  let textFunction = reverse;

$(':radio').click(function (){
    let currentID = $(this).attr('id')

    if (currentID === "reverse"){
        textFunction = reverse;
    } else if (currentID === "draw-out"){
        textFunction = drawOut;
    } else if (currentID === "scream"){
        textFunction = scream; 
    }

updateText()

console.log(currentID)
console.log(textFunction)

})

$('#user-input').on('input', updateText)