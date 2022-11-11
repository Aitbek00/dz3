// function numbers (num1,num2){
//     console.log(Math.min(num1,num2))
// }
// let number = {
//     num1 : prompt("введите число"),
//     num2 : prompt("введите число")
// }
// numbers(number.num1,number.num2)

// function textLength (){
//     const num = prompt("text");
//     console.log(num.length)
// }
// textLength()

let number = {
    num1 : prompt("введите число"),
    num2 : prompt("введите число")
}
let math = prompt("?")
switch (number, math){
    case "+":
        result = number.num1 + number.num2
        console.log(result);
        break;
    case "-":
        result = number.num1 - number.num2
        console.log(result);
        break;
    case "*":
        result = number.num1 * number.num2
        console.log(result);
        break;
    case "/":
        result = number.num1 / number.num2
        console.log(result);
        break;
}