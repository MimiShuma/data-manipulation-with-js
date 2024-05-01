let aSampleString = "";
let aSampleTable = "";

const countries = [{
    name: "Bangladesh",
    code: "BD"
}, {
    name: "India",
    code: "IN"
},
{
    name: "Japan",
    code: "JN"
},
{
    name: "Pakisthan",
    code: "PK"
}]

// for (const country of countries) {
//     aSampleString = "<li>Hiiiiii !!!</li>";
// }

for (const country of countries) {
    aSampleString += `<li>${country.name}</li>`;
}

document.getElementById("myContainer").innerHTML = aSampleString;

for (const country of countries) {
    aSampleTable += `<tr><td>${country.name}</td><td>${country.code}</td></tr>`;
}
document.getElementById("myTable").innerHTML = aSampleTable;