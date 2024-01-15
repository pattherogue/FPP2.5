const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//Caesar remembers he forgot to add his best friend "BRUTUS" to the list. Add him to the beginning of the list.
guests.unshift("BRUTUS");

//A herald announced the arrival of "AUGUSTUS" and "LUCIA". Add them to the end of the guest list.
guests.push("AUGUSTUS", "LUCIA");

//Caesar is curious. He wants to know if "SPARTACUS" has been invited. Check if he's on the list and find out at which position.
const spartacusIndex = guests.indexOf("SPARTACUS");



