// Assume you are starting with the following people array:

let people = ["Greg", "Mary", "Devon", "James"];



// 1. Using a loop, iterate through this array and console.log all of the people
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
};

// 2. Write the command to remove "Greg" from the array.
people.shift();
console.log(people);

// 3. Write the command to remove "James" from the array.
people.pop();
console.log(people);

// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

// 5. Write the command to add your name to the end of the array.
people.push("Horus");
console.log(people);

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit the loop.
for (let i = 0; i < people.indexOf("Mary") + 1; i++) {
  console.log(people[i]);
}

// 7. Write the command to make a copy of the array - the copy should not include "Mary" or "Matt".
const copyPeople = [...people.splice(2, 2)];
console.log(copyPeople);

// 8. Write the command that gives the index where "Mary" is located.
console.log(people.indexOf("Mary"));

// 9. Write the command that gives the index where "Foo" is located (should return -1)
console.log(people.indexOf("Foo"));

// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done: ["Greg", "Mary", "Elizabeth", "Artie", "James"]
people.splice(2, 2);
people[0] = "Greg";
const newPeople = ["Elizabeth", "Artie", "James"];
people.push(...newPeople);
console.log(people);
