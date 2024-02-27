const countries = [
    { name: 'United States', population: 331002651, continent: 'North America', capital: 'Washington, D.C.' },
    { name: 'China', population: 1439323776, continent: 'Asia', capital: 'Beijing' },
    { name: 'Brazil', population: 212559417, continent: 'South America', capital: 'Brasília' },
    { name: 'United Kingdom', population: 67886011, continent: 'Europe', capital: 'London' },
    { name: 'South Africa', population: 59308690, continent: 'Africa', capital: 'Pretoria, Cape Town, Bloemfontein' },
  ];
  
  // 1. Print the names of all countries.
  console.log("1..................................................................");
  countries.forEach(n=>console.log(n.name));
  // 2. Find the country with the largest population.
  console.log("2..................................................................");
  console.log(countries.reduce((d1,d2)=>d1.population>d2.population?d1:d2).name);
  // 3. Find the total population of all countries.
  console.log("3.................................................................");
  console.log(countries.map(cu=>cu.population).reduce((d1,d2)=>d1+d2));
  // 4. Find all countries in a specific continent (e.g., Asia).
  console.log("4.................................................................");
  countries.filter(a=>a.continent=='Asia').forEach(p=>console.log(p.name));
  // 5. Print the names of capitals with more than one city.
  console.log("5.................................................................");
  countries.filter(cu=>cu.capital.split(' ').length>1).forEach(c=>console.log(c.name));
  // 6. Sort countries based on population (descending order).
  console.log("6.................................................................");
  countries.sort((a,b)=>b.population-a.population).forEach(p=>console.log(p.name));
  // 7. Find the country with the smallest population.
  console.log("7.................................................................");
  console.log(countries.reduce((d1,d2)=>d1.population<d2.population?d1:d2).name);
  // 8. Find the country with the longest name.
  console.log("8.................................................................");
  console.log(countries.reduce((d1,d2)=>d1.name.length>d2.name.length?d1:d2).name);
  // 9. Find the country with the shortest name.
  console.log("9..................................................................");
  console.log(countries.reduce((d1,d2)=>d1.name.length<d2.name.length?d1:d2).name);
  // 10. Find the average population of all countries.
  console.log("10.................................................................");
  var total=countries.map(cu=>cu.population).reduce((d1,d2)=>d1+d2);
  console.log("Average is",total/countries.length);