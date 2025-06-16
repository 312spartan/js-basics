const person = {
    name: "Axel",
    age: 28,
    city: "Panama City"
};

console.log(person);


console.log(person.age); // adding the person.var will show you the selected data

person.country = "USA";

console.log(person);

person.age = 30; // updating information for the object

console.log(person);

delete person.city; // deletes specific data

console.log(person);


// looping through objects with ( for...in )

for (const key in person) {
    console.log("key =",key);
    console.log("value =", person[key]);
}