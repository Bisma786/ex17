"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let GuestList = [
    "Abdul Razzaq",
    "Lubna",
    "Unzila",
    "Arsala",
    "Feroze Khan",
    "Zain Imam",
    "Andrew tate",
    "Candra",
];
console.log("New set of message invitation");
for (let guest of GuestList) {
    console.log(`Dear ${guest} you are warm heartedly invited our place for dinner.`);
}
//message about inviting only 2 people
console.log(`Sorry I can only manage to welcome two people`);
while (GuestList.length > 2) {
    let removeguest = GuestList.pop();
    console.log(`Sorry! ${removeguest}, I can only manage to welcome two people`);
}
for (let guest of GuestList) {
    console.log(`Hey ${guest}, you are still invited to dinner!`);
}
GuestList.pop();
GuestList.pop();
console.log(`guestlist after dinner:`, GuestList);
