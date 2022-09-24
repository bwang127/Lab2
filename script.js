let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        filterData("all");
    });
var select = document.querySelector("#attraction-category");
select.addEventListener("change", (event) => {
    filterData(event.target.value);
});


function filterData(category) {
    let sorted = attractions.sort((a, b) => b.Visitors - a.Visitors);
    if (category != "all") {
        sorted = sorted.filter(attractions => attractions.Category == category);
        console.log(sorted);
    }
    let dataset = [];
    let i = 0;
    for (let i = 0; i < 5; i++) {
        dataset.push(sorted[i]);
    }
    renderBarChart(dataset);
}