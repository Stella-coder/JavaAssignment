//recieve input btw 1 to 100 and tells if number is even or odd
let User_input = prompt('Enter a number between 1 to 100')
let a= Number(User_input)
let result = (a%2 == 0)? 'Your input is an even number': 'Your input is an odd number'
let b =(a>0&&a<100)? alert(result): alert('Your input is invalid')

//Accepts input and turns it to uppercase
let name = prompt('What is your name?')
alert(name.toUpperCase())

//Multiply function
const mutiply =(x,y) => {
    return x * y
}
console.log(mutiply(12,5))

//division function
const div =(c,d) => {
    return c/d
}
console.log(div(12,5))

//Square root function
const square_rt =(e) => {
    return e**(1/2)
}
console.log(square_rt(25))

