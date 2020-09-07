# Code Sprint Session 1: Crash Course JS
**Instructor:** Wesley Chou

## Resources
- [Session 1: Crash Course JS](https://tinyurl.com/codesprint-s1)

**Questions** Feel free to post any in the #codesprint channel on the ACM Discord Serveer
- [Discord](https://tinyurl.com/acm-csuf-discord)

## Practice Problems
### Arrays
1. Create a basic array that includes your favorite foods. 
<details>
<summary><b>Answer:</b></summary>
  
```javascript
var foods= [‘Ramen’, ‘Toast’, ‘Fried Rice’, ‘Fries’];
console.log(foods); // similar to cout << foods for c++ or System.out.print(foods) for java

//The console for a web page is similar to a command prompt 
```
</details>

2. Create an array of numbers, Use that array with the Reduce function to find the sum of all the numbers.  
<details>
<summary><b>Answer:</b></summary>

```javascript
const numbers = [ 5, 8, 10, 15, 3];
const add = (accumulator, currentValue) => accumulator + currentValue; 
console.log(numbers.reduce(add)); 
```
</details>

### Functions
1. Create a function with 2 parameters called mathOperations. <br>
a. Create a variable named mod that finds the modulus of the two parameters. <br>
b. Create a variable named exp that finds the exponent of the second parameter by a power of 2. <br>
c. Create a variable named sum that adds the two variables together. <br>
d. Return sum. Resource for syntax: https://www.w3schools.com/js/js_arithmetic.asp
<details>
<summary><b>Answer:</b></summary>

```javascript
function mathOperations (a,b){
   mod= a & b; 
   exp= b ** 2; 
   sum= mod + exp;
   return sum;
}

console.log(mathOperations( 15, 3)); 

// passing values from mathOperations by reference. a holds value of 15, b holds value of 3
```
</details>

### Classes

1. Set up a basic class with an object called name.    
a. Make a constructor called yourName. <br>
b. Create an object called you. <br>
c. Put your name inside the parameters of the you object. 
<details>
<summary><b>Answer:</b></summary>

```javascript
class introduction {
   constructor(yourName) {
      this.name = yourName;
   } 
}
you = new introduction(“Wesley Chou”);
console.log(‘Your name is ’ + you.name); 

```
</details>

### Promises
1. Create a promise called completion 
2. Create a new boolean variable called check and set it equal to true
3. Create an if statement to see if check is true <br>
a. Resolve- output ‘good job, take a nap’ <br>
b. Reject- output ‘try again’ 
<details>
<summary><b>Answer:</b></summary>

```javascript
let completion = new Promise(function(resolve,reject){ // how to set a promise up
   let check = true; //create boolean variable called check
      if(check){   
      resolve('good job, take a nap') //promise fulfilled 
   }
   else{
      reject('try again') //promise not fulfilled
   }
})
```
</details>

**Other Useful Resources** 
- [Mozilla Developers JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools ES6](https://www.w3schools.com/js/js_es6.asp)
- [Tutorials Point ES6](https://www.tutorialspoint.com/es6/es6_promises.htm)
- [Array Reduce Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [ES6 Promises](https://www.tutorialspoint.com/es6/es6_promises.htm) 
- [Event Handlers](https://www.youtube.com/watch?v=7UstS0hsHgI&ab_channel=Avelx) 


