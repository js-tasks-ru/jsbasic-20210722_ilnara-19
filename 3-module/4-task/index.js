let user1 = {
  balance: "$1,825.65",
  picture: "https://placehold.it/32x32",
  age: 21,
  name: "Golden Branch",
  gender: "male",
  greeting: "Hello, Golden Branch! You have 7 unread messages.",
  favouriteFruit: "banana"
};

let user2 = {
  balance: "$3,825.65",
  picture: "https://placehold.it/32x32",
  age: 34,
  name: "Golden John",
  gender: "female",
  greeting: "Hello, Golden John! You have 7 unread messages.",
  favouriteFruit: "berry"
};

let users = [user1, user2];
let age = 34;
let str = [];
let strNew;

function  showSalary(users, age) {
 
for (let i = 0; i < users.length; i++) {
 
  if(users[i].age <=  age) {
    str.push(users[i].name);
    str.push(users[i].balance);
  }
}

if(str.lastIndexOf('\n') != -1) {
  let indexItem = str.lastIndexOf('\n');
  str.splice(indexItem, 1);
}

  strNew = str.join('\n'); 
  return strNew;
}


let result = showSalary(users, age);

console.log(result);
