console.log("Lab 1!")



const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x
    } else {
      return y
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))
  
function isAdult(age21) {
    return age = 18
}

console.log('Exercise 2 Result:', isAdult(21))

function isCharAVowel(char) {
  char = char.toLowerCase()
  const vowels = 'aeiou'
  return vowels.indexOf(char) !== -1
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

function generateEmail(name, domain) {
  return name +"@"+ domain
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"))

function greetUser(name,timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

function maxOfThree(num1,num2,num3) {
  return Math.max(num1,num2,num3)
}

console.log('Exercise 6 Result:',maxOfThree(5, 10, 8))

function calculateTip(billAmount, tipPercentage) {
  return (billAmount  *tipPercentage) / 100
}

console.log('Exercise 7 Result:', calculateTip(50, 20))