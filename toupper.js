str='luminar';
console.log(Array.from(str));
console.log(Array.from(str).map(char=>char.toUpperCase()));
Array.from(str).map(char=>char.toUpperCase()).forEach(char=>console.log(char));