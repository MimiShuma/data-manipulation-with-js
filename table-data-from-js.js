// let head = "";
// let body = "";
let tableRow = "";

const countries = [
    {
        region: "Asia",
        name: "Bangladesh",
        code: "BD"
    },
    {
        region: "Asia",
        name: "India",
        code: "IN",
    },
    {
        region: "Asia",
        name: "Srilanka",
        code: "SL",
    },
    {
        region: "Asia",
        name: "Pakistan",
        code: "PK",
    },
];

for (const country2 of countries) {
    tableRow += `<tr><td>${country2.region}</td><td>${country2.name}</td><td>${country2.code}</td></tr>`;

}


// for (const country of countries) {
//     head += `<td> ${country.name}</td>`;
//     body += `<td> ${country.cncode}</td>`;
// }
// Function defination

function loadData() {
    // document.getElementById("myTable").innerHTML=<tr>${head}</tr> <tr>${body}</tr>;
    const tbodyOfTable2 = document.querySelector("#sampleTable2 tbody");
    tbodyOfTable2.innerHTML = tableRow;
}

// Function Call
// loadData();