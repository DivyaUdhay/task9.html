const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        const countries = xhr.response;
        const asiaCountires = countries.filter((n) => n.continents  =='Asia');
console.log("Asian Countries:",asiaCountires);
const population = countries.filter((n) => n.population < 2_00_000 );
console.log("populationless2laks:",population);
const totalpopulation = countries.map((n)=>n.population);
const totalpopulation1 = (array) => array.reduce((a, b) => a + b);
console.log("Totalpopulation:",totalpopulation1(totalpopulation));
countries.forEach (function(details){
    console.log(details.name);
console.log(details.capital);
console.log(details.flags);
} )
    }
};

getCountries ();
