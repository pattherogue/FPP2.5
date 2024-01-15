const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.
guests.unshift("BRUTUS");

//A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.
guests.push("AUGUSTUS", "LUCIA");

//Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.
const spartacusIndex = guests.indexOf("SPARTACUS");

//What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
// -1

//Oops! Caesar just received a message that "CASSIUS" won't be able to make it. Remove him from the list.
// find index of "CASSIUS"
const indexToRemove = guests.indexOf("CASSIUS");
// splice method (start, delete count)
guests.splice(indexToRemove, 1);

//Caesar wants to send a special invite to the first three guests on the list. Extract these names into a new array.
const firstThreeElements = guests.splice(0,3)

//Caesar decides he wants the guest list in alphabetical order. Sort the array. However, Caesar wants his most honored guests (those added first) to remain at the top of the list. Can you think of a way to sort the guests but keep the honored ones at the top?
const honoredGuests = guests.slice(0, 2); // Extracts honored guests.
const otherGuests = guests.slice(2); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays.
