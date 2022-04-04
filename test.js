let finalResult = 0;
let myArr = ['2','+','2','+','2'];
let valueArray = [];
let mathF = {
  '+': function (x,y) {return x + y},
  '-': function(x,y)  {return  x-y},
  '/': function(x,y)  {return  x/y},
  '*': function(x,y)  {return  x*y},
}

for(let i = 0; i < myArr.length; i++) {
  if(myArr[i] == "+") {
    let res = []
    let firstPart = myArr.slice(myArr[i-1], i).join("");
    console.log('firstP ', myArr.slice(myArr[i],i));
    console.log('secondP ', myArr.slice(i, i+1));
    let secondPart = myArr.slice(myArr[i] + 1).join("");
    res.push(mathF['+'](parseFloat(firstPart, 10),parseFloat(secondPart, 10))) 
    console.log(res);
    
  }


}