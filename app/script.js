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

checkbtn.addEventListener("click", function () {
  const age = ageInput.value;
  if (!age) {
    result.innerHTML = "<h3 class='alert'>Enter age</h3>";
    return;
    //console.log("Enter age");
  }
  if (age < 18) {
    console.log("Not Eligibile");
    result.innerHTML = "<h3 class='noteg'>Not Eligible</h3>";
  } else {
    console.log("Eligibile");
    result.innerHTML = "<h3 class='eg'>Eligible</h3>";
  }
});

clearbtn.addEventListener("click", function () {
  ageInput.value = "";
  result.innerHTML = "";
});
