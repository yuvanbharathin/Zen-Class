fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesData = data;

    // Assume countriesData is the array of country objects fetched from the API
const countriesDatas = [
    // ... array of country objects
  ];
  
  // 1. Get all the countries from Asia continent/region using Filter method
const asianCountries = countriesData
.filter(country => country.region === 'Asia')
.map(country => country.name.common); // Extracting only the country names

console.log("Asian Countries:", asianCountries);
console.log()

 // 2. Get all the countries with a population of less than 2 lakhs using Filter method
const countriesWithLessPopulation = countriesData
.filter(country => country.population < 200000)
.map(country => country.name.common); // Extracting only the country names

console.log("Countries with population less than 2 lakhs:", countriesWithLessPopulation);
console.log()

  // 3. Print the following details name, capital, flag, using forEach method
  countriesData.forEach(country => {
    console.log(`Name: ${country.name.common}, Capital: ${country.capital ? country.capital[0] : 'N/A'}, Flag: ${country.flags.svg}`);
  });
  console.log()
  
  // 4. Print the total population of countries using reduce method
  const totalPopulation = countriesData.reduce((total, country) => total + country.population, 0);
  console.log("Total Population:", totalPopulation);
  console.log()

  // 5. Print the country that uses US dollars as currency
const countriesUsingUSD = countriesData
.filter(country => {
  if (country.currencies) {
    return Object.values(country.currencies).some(currency => currency.name === 'United States dollar');
  }
  return false;
})
.map(country => country.name.common); // Extracting only the country names

console.log("Countries using US dollars:", countriesUsingUSD);
  
  })
  .catch(error => console.error('Error fetching countries data:', error));
