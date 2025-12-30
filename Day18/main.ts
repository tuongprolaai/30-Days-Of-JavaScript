const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((response) => response.json())
  .then((countries) => {
    countries.forEach((country: any) => {
      const languages = country.languages
        ? country.languages.map((lang: any) => lang.name).join(", ")
        : "N/A";

      console.log(`Name: ${country.name}`);
      console.log(`Capital: ${country.capital || "N/A"}`);
      console.log(`Languages: ${languages}`);
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area || "N/A"} km²`);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));

const catsAPI = "https://api.thecatapi.com/v1/breeds";

let catNames = [];

fetch(catsAPI)
  .then((response) => response.json())
  .then((cats) => {
    catNames = cats.map((cat: any) => cat.name);
    console.log(catNames);
  })
  .catch((error) => console.error("Error fetching cats:", error));

fetch(catsAPI)
  .then((response) => response.json())
  .then((cats) => {
    const weights = cats.map((cat: any) => cat.weight.metric);
    let totalWeight = 0;
    weights.forEach((weightStr: any) => {
      const [min, max] = weightStr.split(" - ").map(Number);
      const avg = (min + max) / 2;
      totalWeight += avg;
    });

    const averageWeight = totalWeight / weights.length;
    console.log(
      `Average weight of cats (metric): ${averageWeight.toFixed(2)} kg`
    );
  })
  .catch((error) => console.error("Error fetching cats:", error));
