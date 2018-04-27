# CSCI E-31 Graduate Assignment Practice Set: Promises

## Directions
During week #8 the class was introduced to the concept of promises as an alternative to callbacks.
This practice set allows the student to practice turning code that uses callbacks into code that uses 
promises without having to worry about sending the data between pages, using pug templates, or anything 
extra like that. 

The exercise is to do the following: using both callbacks and promises (separately) create a new cat in the 
database, print the cat information to the console, alter a field of the cat, print the cat to the console again,
delete the cat, and finally show all cats to prove that the cat was deleted. The schema for the cat is already defined 
for the student. 

The file for students to fill in is app.js. The file with a possible answer is app-answers.js.

NOTE: 
When testing code, please comment out the callback code when working on the promise code, and comment out the 
promise code when working on the callback code. This is due to the fact that the code is asynchronous, and we 
only want to test one technique at a time. 

## Set up 
To set up this practice set, students must follow the following steps:
1. Clone this repository to their machine.
2. Run: npm install
3. Create a .env file with their database credentials.
4. Change the mongoDB connection string in app.js to use their own database. 
5. Write callback and promise code in app.js
6. Run with: npm run start-dev
