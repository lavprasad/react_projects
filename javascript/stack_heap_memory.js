// ***************** stack memory ********************
// userName = "lav"
// person1 = userName
// console.log(userName); // lav
// console.log(person1); // lav

// person1 = "not lav"
// console.log(person1); //not lav
// console.log(userName); // lav

// ************************ heap memory *******************

person1 = {
    userName : 'lav',
    userEmail : "lav@email.com"
}
person2 = person1

console.log(person1); // lav@email.com
console.log(person2); // lav@email.com

person2.userEmail = "lav@yahoo.com"
console.log(person1); // lav@yahoo.com
console.log(person2); // lav@yahoo.com