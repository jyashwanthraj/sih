const data = require("./Project.json");


const countries = require("./countries.json");



// console.log(countries);
const newData = [];



// [
//     {
//         ...,
//         Country: "usa",
//         airQ
//     },
//     {
//         ..,
//         Country: "usa"
//     }
// ]

function eachElement(country) {

    const countryObject = data.filter(element => element.Country === country);

    let airQualityAverage = 0;
    let waterPollutionAverage = 0;

    countryObject.forEach(obj => {
        airQualityAverage += parseFloat(obj.AirQuality);
        waterPollutionAverage += parseFloat(obj.WaterPollution);
    });

    airQualityAverage /= countryObject.length;
    waterPollutionAverage /= countryObject.length;

    const newCountryObject = {
        country,
        airQualityAverage,
        waterPollutionAverage,
    }

    newData.push(newCountryObject);

}

countries.forEach(eachElement);

console.log(newData);