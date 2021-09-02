const fs = require("fs");

//reads the json data from the other file but returns it in buffered numbers.
const bufferedJson = fs.readFileSync("./1-json.json");
//takes the buffered numbers and turns the data back into a string.
const newDataJson = bufferedJson.toString();
//parses the string data into a JSON format.
const user = JSON.parse(newDataJson);

//changing tthe parsed json data to user
user.name = "Alex";
user.age = 33;

//makking a new string of the changed user data
const userJSON = JSON.stringify(user);

//writing edited data to the json file.
fs.writeFileSync("1-json.json", userJSON);
