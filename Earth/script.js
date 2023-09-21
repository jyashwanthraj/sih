const actualData = require("./savedata.json");

const additionalData = require("./finalData.json");


const fs = require("fs");



function forEach(countryObject) {

    const countryName = countryObject.country;


    
    const object = actualData.features.find(objectCountry => objectCountry.properties.ADMIN === countryName);
    
    
    if(object) { 
        object.properties.airQualityAverage  = countryObject.airQualityAverage;
        object.properties.waterPollutionAverage  = countryObject.waterPollutionAverage;
    }
}



additionalData.forEach(forEach);

fs.writeFileSync("./save.json", JSON.stringify(actualData),  'utf-8');