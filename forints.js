const salaries={
    jack:24000,
    paul:34000,
    Monica:5500
}
for(let i in salaries)
{
    console.log(`${i}:$${salaries[i]}`);
}