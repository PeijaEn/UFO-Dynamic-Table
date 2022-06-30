// import from data.js
const tableData = data;

// reference the HTML table
var tbody = d3.select("tbody");

function buildTable(data) {

    // clears previous html
    tbody.html("");

    // loop thru all data and add value to row in html table
    data.forEach((dataRow) => {

        //append row to table body
        let row = tbody.append("tr");

        // add value to table cell in html table
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });

}

function handleClick() {

    // get datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // filters to see if entered date is there in data
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // builds html table
    buildTable(filteredData);
}

// listens for a button click
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);