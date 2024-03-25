const input = prompt('whats your name ?');
const input2 = prompt('what region are you from?');
const input3 = `${input.toUpperCase()} ${input2.toUpperCase()}`;
const numbers = input3.length;
alert(`The string ${input3} has ${numbers}  characters `);