const ageInput = document.querySelector("#age");
const checkbtn = document.querySelector("#check");
const clearbtn = document.querySelector("#clear");
const result = document.querySelector("#result");
/*function printToResult(text) {
    if (text) {
        resultDiv.innerHTML = '<h3>'+text+'</h3>'
    }

    // if (!text) {
    //     return;
    // }
    // resultDiv.innerHTML = '<h3>'+text+'</h3>'

}

// calling a function when the button gets clicked
calculateBtn.addEventListener('click', function() {
    let result = '';

    const userAge = ageInputBox.value;
    if (!userAge) {
        printToResult('Please enter an age')
        return;
    }
   

    if (userAge < 18) {
        console.log('age is ', userAge)
        console.log('You are not eligible to vote')
        // resultDiv.innerHTML = '<h3>You are not eligible to vote</h3>'
        result = 'You are not eligible to vote'
    } else {
        console.log('You are eligible to vote')
        // resultDiv.innerHTML = '<h3>You are eligible to vote</h3>'
        result = 'You are eligible to vote'
    }
    
    // concatenation
    printToResult(result)
})*/
function Print(text, classn, borderClass) {
  if (text) {
    result.innerHTML = `<h3 class= ${classn} > ${text} </h3>`;
    result.classList.add(borderClass);
  }
}

let resulttext = "";
let classname = "";
let borderClass ="";
checkbtn.addEventListener("click", function () {
  const age = ageInput.value;
  if (!age) {
    resulttext = "Enter age";
    classname = "alert";
    borderClass = "borderBlack";
    Print(resulttext, classname,borderClass);
    return;
  }
  if (age < 18) {
    resulttext = "Not Eligible";
    classname = "noteg";
    borderClass = "borderRed";
  } else {
    resulttext = "Eligible";
    classname = "eg";
    borderClass = "borderGreen";
  }
  Print(resulttext, classname,borderClass);
});

clearbtn.addEventListener("click", function () {
  ageInput.value = "";
  result.innerHTML = "";
  result.className = "";
});
