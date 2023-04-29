/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

//declare the function
//go into function in climateData get key
//new array containing city and county using .map method

const listAllCitiesWithCountries = (data) => {
    //return city.filter((el) => el.toLowerCase().includes(country.toLowerCase()));

    //const newArr = [];
    // array.forEach((obj) => {
    //     newArr.push(obj['city'] + ', ' + obj['country'])
    // })
    // return newArr;

    return data.map(obj => {
        return obj.city + ', ' + obj.country;
    });
}

/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/

//declare function
//list all cities
//declare a variable as an array
//use pull all cities and then use .filter to filter 'united states'

const listAllUsCities = (array) => {
    let cities = listAllCitiesWithCountries(array);
    return cities.filter((ele) => ele.includes('United States'))

}



/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/

// interiate through obj using cities names as a id and push the ids into the cities name that match
//
const findDuplicates = (arr) => {
    const trackerObj = {}
    arr.forEach(obj => {
        const city = obj.city;
        const id = obj.id;
        if (trackerObj[city] === undefined) {
            trackerObj[city] = [id];
        } else {
            trackerObj[city].push(id);
        }
    });
    return trackerObj
};


/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/

const returnDuplicate = () => { }

/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/

const correctDuplicate = () => { }


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate];
