// Create a person object that contains three keys: name, age, and county.
const person = {
  name: "",
  age: "",
  country: "",
};
// Use yourself as an example to set the values for name, age, and country
person.name = "Sakib";
person.age = 25;
person.country = "Bangladesh";

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"
function logData() {
  console.log(
    `${person.name} is ${person.age} years old and lives in ${person.country}`
  );
}

// Call the logData() function to verify that it works
logData();
