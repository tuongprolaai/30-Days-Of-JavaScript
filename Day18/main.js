var countriesAPI = "https://restcountries.com/v2/all";
fetch(countriesAPI)
    .then(function (response) { return response.json(); })
    .then(function (countries) {
    countries.forEach(function (country) {
        var languages = country.languages
            ? country.languages.map(function (lang) { return lang.name; }).join(", ")
            : "N/A";
        console.log("Name: ".concat(country.name));
        console.log("Capital: ".concat(country.capital || "N/A"));
        console.log("Languages: ".concat(languages));
        console.log("Population: ".concat(country.population));
        console.log("Area: ".concat(country.area || "N/A", " km\u00B2"));
    });
})
    .catch(function (error) { return console.error("Error fetching countries:", error); });
var catsAPI = "https://api.thecatapi.com/v1/breeds";
var catNames = [];
fetch(catsAPI)
    .then(function (response) { return response.json(); })
    .then(function (cats) {
    catNames = cats.map(function (cat) { return cat.name; });
    console.log(catNames);
})
    .catch(function (error) { return console.error("Error fetching cats:", error); });
fetch(catsAPI)
    .then(function (response) { return response.json(); })
    .then(function (cats) {
    var weights = cats.map(function (cat) { return cat.weight.metric; });
    var totalWeight = 0;
    weights.forEach(function (weightStr) {
        var _a = weightStr.split(" - ").map(Number), min = _a[0], max = _a[1];
        var avg = (min + max) / 2;
        totalWeight += avg;
    });
    var averageWeight = totalWeight / weights.length;
    console.log("Average weight of cats (metric): ".concat(averageWeight.toFixed(2), " kg"));
})
    .catch(function (error) { return console.error("Error fetching cats:", error); });
