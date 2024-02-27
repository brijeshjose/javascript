const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

  console.log("Question 1: Print the names of all programming languages in the array.");
  programmingLanguages.forEach(c=>console.log(c.name));
  console.log("Question 2: Print the total number of programming languages in the array.");
  console.log(programmingLanguages.length);
  console.log("Question 3: Print the languages that are popular.");
  programmingLanguages.filter(a=>a.popular==true).forEach(p=>console.log(p.name));
  console.log("Question 4: Print the names of the languages created after the year 2000.");
  console.log(programmingLanguages.reduce(a=>a.yearCreated>2000?a:"not found"));
  console.log("Question 5: Print the languages that are both functional and object-oriented.");
  console.log(programmingLanguages.filter(c=>c.paradigms.includes("Functional")&&c.paradigms.includes("Object-oriented")));
  console.log("Question 6: Print the names of the creators of the languages.");
  programmingLanguages.forEach(c=>console.log(c.creator));
  console.log("Question 7: Print the names of languages that have Script in their name.");
  console.log(programmingLanguages.filter(c=>c.name.includes("Script")).map(c=>c.name));
  