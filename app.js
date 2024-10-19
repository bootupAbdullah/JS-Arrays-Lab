
//creating shorthand for 'console.log)
const log = console.log

/*
! Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

// I am creating a varaible that holds an array, creating an empty list
const foods = [];  

console.log('Exercise 1 result:', foods);


/*
! Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/


//I am adding first the item 'pizza' and then 'cheeseburger' to the list I
//created by using the push methods.
foods.push('pizza', 'cheeseburger')


console.log('Exercise 2 result:', foods);



/*
! Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

//by using the unshift method I am adding to the beginning of the foods array
foods.unshift('taco')

console.log('Exercise 3 result:', foods);

/*
! Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

//I am creating a new variable called favFood and assigining it the value of the [1] index
//from the foods array
const favFood = foods[1]

console.log('Exercise 4 result:', favFood);


/*
! Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

//by using the splice method and indicating '2' as the starting point and '0' as the end point
//tofu is inserted at index [2] and nothing is extracted.
foods.splice(2, 0, 'tofu')


console.log('Exercise 5 result:', foods);


/*
! Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/


//by indicating 1 as the start and stop point I can enter both 'sushi and 'cupcake' at the [1]
//index and remove the item that was previously there as well 'pizza'.
foods.splice(1,1, 'sushi','cupcake' )

console.log('Exercise 6 result:', foods);


/*
! Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

//I am creating a variable called 'yummy' and assigning it the value of items at the [1] and [2]
//index of the foods list. [3] is not non-inclusive.
const yummy = foods.slice(1, 3)

console.log('Exercise 7 result:', yummy);


/*
! Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

//I am creating an variabl called soyIdx and assigning it the value of the index of 'tofu'
//from the 'foods array
soyIdx = foods.indexOf('tofu')

console.log('Exercise 8 result:', soyIdx);


/*
! Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

//I am creating a variable called allFoods which contains all of the items from the 'foods' array
//seperated by '->'
allFoods = foods.join('->') 

console.log('Exercise 9 result:', allFoods);

/*
! Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/


//I've created a variable called hasSoup' which holds the result of the method 'includes' being called
//on the array 'foods' to see if the item 'soup' is conatined within the array.
hasSoup = foods.includes('soup')

console.log('Exercise 10 result:', hasSoup);


/*
! Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/


//* earlier example of the 'push' method:
// foods.push('pizza', 'cheeseburger')


// console.log('Exercise 2 result:', foods);




const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

//for...in loop gives us acess to the properties 

//for..of creates a new variable for every element in our array 
// gives acess to the values instead of the properties

let odds = []
for (const num of nums) {
    if (num % 2 === 1) {
      odds.push(num)
    }
}

console.log('Exercise 11 result:', odds)

// console.log(89 % 2)





