// 👍Using variable
let input = "   JAVASCRIPT  ";
// let result = "<div>" + input.trim() + "</div>";
// console.log('result',result);

//👍 we can also use as function because fn behave any other type of variable

const trim = str => str.trim();

const wrapdiv = str => `<div>${str}</div>`;

const toLowerCase = str => str.toLowerCase();

//Unessaray we are using so many parathensis
// so it causes complexity, that'why we can use lodash to remove extra parenthesis.
const result1 = wrapdiv(toLowerCase(trim(input)));


console.log(result1);
