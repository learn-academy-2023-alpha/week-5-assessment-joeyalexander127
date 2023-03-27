// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.
describe("codedMessage", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
    it("Returns given string in coded formart", ()=> {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
        //----REFACTORED TEST CASES----
        expect(refactoredCodedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(refactoredCodedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(refactoredCodedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
//------ FAILED TEST CASE DUE TO UNDIFINED FUNCTION------
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ Returns given string in coded formart (3 ms)

// ● codedMessage › Returns given string in coded formart

//   ReferenceError: codedMessage is not defined


// b) Create the function that makes the test pass.

//---------------------Pseudo Code for First (non dry function)--------------------
// My first approach to creating this function was the farthest thing from a dry function as one could get...
// so i decided to refactor it and make it much cleaner and in a way that i was not repeating myself.
// i also learned a ton about using objects within this method

//input: string
//output coded version of the string
// creating a function called <codedMessage> that takes in an argument of a string. name the parameter string
// return the string with .toLowerCase() & split methods applied to it. 
// now that we have put our string into an array we can call .map on it to iterate through each value
// create a conditional statement that checks for every 'a', 'e', 'i' ,'o' in side our array
// if the specifc value we are looking at is an 'a' then change that value to a 4
// if its an 'e' change it to an 3/ if its an 'i' change to '1', if its an 'o' change to an '0'
// and if its none of these than keep the value as is.
// use the .join() BIM to our higher order function to join it back into a string.
// then return the the concatiation of the first letter capitalized to the remainder of the string

const codedMessage = (string) => {
   const codedString = string.toLowerCase().split("").map((value)=>{
        if(value == 'a'){
            return value = '4'
        }else if(value == 'e' ){
            return value = '3'
        }else if(value == 'i'){
            return value = '1'
        }else if(value == 'o'){
            return value = 0
        }else
        return value
    }).join("");
    return codedString.charAt(0).toUpperCase() + codedString.slice(1);
    
}
// ----- PASSING TEST CASES-------
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ Returns given string in coded formart (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//------------------Pseudo Code for refactored function-----------------
// I refactored the previous codedMessage to this function that looks much cleaner, its dry and far less lines of code :). This approach was to use an object with corresponding replacement values. so if that value is found in our string it will replacement with its corresponding value.

//Input: string
//Output: String but in coded format
// create a function called <codedMessage2> that has <string> as a parameter 
// create an object called <codedChars> and this object will be pair values {'a' : '4','e' : '3','i' : '1',
// 'o' : '0'}
// we will then apply the built in method <.split("") on our string to convert it to an array so we can iterate through each value
// then we will map through this array of given strings and for each value you check if that specific value is in our codedChars object and if it is replace our value with the corrensponding value within the object will be returned. if the value is not found then it will just return the original value.
//.join("") or higher order function to turn our array back into a string.

const refactoredCodedMessage = (string) => {
    const codedChars = {'a' : '4','e' : '3','i' : '1','o' : '0','A' : '4','E' : '3','I' : '1','O' : '0'}
    return string.split("").map((value)=>{
        return codedChars[value] || value }).join("")
}
// ----- PASSING TEST CASES-------
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ Returns given string in coded formart (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("arrayOfGivenLetter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
    it("Return only values in array that contain given letter", () => {
        expect(arrayOfGivenLetter(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(arrayOfGivenLetter(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
//-------Test Case failing due to function not be defined------
// FAIL  ./code-challenges.test.js
// arrayOfGivenLetter
//   ✕ Return only values in array that contain given letter (3 ms)
// ● arrayOfGivenLetter › Return only values in array that contain given letter
//   ReferenceError: arrayOfGivenLetter is not defined


// b) Create the function that makes the test pass.
//------------Pseudo Code-------------
//Input: array & letter (string)
//Output: Filtered Array
//Create a function called arrayOfGivenletter that takes in an array and a single letter(string)
// You will need to map through your given array to be able to access each word indiviually.
// then you will split each word that you map through and filter that word.
// with in your higher order function .filter you will only return the words that the contains the given letter.
// when comparing the value to the latter we will be using toLowerCase().includes to make sure we dont leave out an matching letters that were upper case.
// we will then join the returned words back together into the original array.
// that we filtered the mapped array we will have empty strings return because map will always return the same size array.
// so we will finally .filter through the array and only return the values that are not emprty strings.
const arrayOfGivenLetter = (array, letter) => {
    return array.map((word)=> word.split(' ')
    .filter((value)=> value.toLowerCase().includes(letter)).join(' '))
    .filter((value)=> value !='')
}

//------Test Case Passing with function---------
// PASS  ./code-challenges.test.js
// arrayOfGivenLetter
//   ✓ Return only values in array that contain given letter (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", ()=> {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
it("Return true if the given array holds a full House false if it doesnt", ()=>{
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})
//-----Test cases failing due to function not being defined-----
// FAIL  ./code-challenges.test.js
// fullHouse
//   ✕ Return true if the given array holds a full House false if it doesnt (1 ms)
// ● fullHouse › Return true if the given array holds a full House false if it doesnt
//   ReferenceError: fullHouse is not defined
// b) Create the function that makes the test pass.
//------Psudo Code------
//Input: array
//Output boolean (true/false)
//Create a function called fullhouse that takes in an array as an argument
// In order to make this functionality work we need to first sort our given array in ascending order
// we do that by array.sort((a,b) => (a-b)). the wasy this sort function works is it takes two elements 
// within the array and compares them by subtracting them from each other. it then places the larger 
// after the smaller number whether or not the out come is - or +.
// we then need to create a condition statement using <if/else>; first thing is we check to make sure the 
//length of the array is only 5. if the array has a length of anything but 5, return false.
// then we need to check if the first 2 indexs are equal along with the last 3 indexs are equal. OR 
// check if the first 3 indexes are equal and the last 2 ar equal. If either of this conditions are met
// return true else return false.

const fullHouse = (array) => {
        array.sort((a,b)=> a-b)
        if(array.length != 5){
            return false
        }else if(array[0] === array[1] && array[2] === array[3] && array[3] === array[4] ||
            array[0] === array[1] && array[1]=== array[2] && array[3] === array[4]){
                return true
        }else {
            return false 
        }
}

//----- TEST CASE PASSING WITH FUNCTION-----
// PASS  ./code-challenges.test.js
// fullHouse
//   ✓ Return true if the given array holds a full House false if it doesnt (2 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


//------ ALL TEST CASES PASSING-------
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ Returns given string in coded formart (3 ms)
// arrayOfGivenLetter
//   ✓ Return only values in array that contain given letter (1 ms)
// fullHouse
//   ✓ Return true if the given array holds a full House false if it doesnt (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total