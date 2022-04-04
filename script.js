const inputContainer = document.querySelector("#inputContainer");
const numButtons = [...document.querySelectorAll(".numberBtn")];
const symbolButtons = [...document.querySelectorAll(".symbolBtn")];
const inputElement = document.querySelector("#resultNumber");
let result = 0;
let finalResult = 0;
let valueArray = [];

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", (e) => {
    let value = e.target.textContent;
    valueArray.push(value);
    inputElement.textContent += value;
    console.log(valueArray);
  });
}

let operations = {
  '+': (x,y) => {return x + y},
  '-': (x,y) => {return x - y},
  '/': (x,y) => {return x / y},
  '*': (x,y) => {return x * y},
}



for (let i = 0; i < symbolButtons.length; i++) {
  symbolButtons[i].addEventListener("click", (e) => {
    let value = e.target.textContent;

    if (value === "CE") {
      valueArray.pop();
      inputElement.textContent = valueArray.join("");
    } else if (value === "C") {
      valueArray = [];
      inputElement.textContent = "";
    } else if (value == "="){
      for (let i = 0; i < valueArray.length; i++) {
        if (valueArray[i] == "+" || valueArray[i] == "-" || valueArray[i] == "/" || valueArray[i] == "*") {
          inputElement.textContent += value;
          // [5,+,5,+,5]
          let firstPart = valueArray.slice(0, i).join("");
          let secondPart = valueArray.slice(i + 1).join("");
          console.log("firstPart " + firstPart);
          console.log("secondPart " + secondPart);
          // result = operations[valueArray[i]](parseFloat(firstPart, 10),parseFloat(secondPart, 10))
          finalResult = operations[valueArray[i]](parseFloat(firstPart, 10),parseFloat(secondPart, 10))
          valueArray.splice(0,2,finalResult)
        } 
      }
      inputElement.textContent = finalResult.toString();
      valueArray.push(finalResult.toString());
    }
  });
  inputElement.textContent = "";
}


