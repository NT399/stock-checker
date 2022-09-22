const date = document.getElementById("date");
const currentDay = moment().format("MM/D/Y");
var graph = document.getElementById("graph");
var news = document.getElementById("news");

const searchButton = document.getElementById("submit");
searchButton.addEventListener("click", search);

$(function () {
  $("#date").datepicker({
    dateFormat: "yy-mm-dd",
  });
});

function getApi(name, date) {
  var stocks =
    `https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=llDWlVpxTIuYF14j8vAukNJR3ZvzmmpH`

  fetch(stocks)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      graph.textContent = "";
      graph.style.display = "block";
      var stockName = document.createElement("h1");
      var stockPrice = document.createElement("h1");
      stockName.textContent = data.data[0].symbol;
      stockPrice.textContent = "$" + data.data[0].close;
      graph.append(stockName);
      graph.append(stockPrice);
      displayNews(name);
    });
}

function displayNews(name) {
  news.style.display = "block";
  var stocksNews = `https://api.marketaux.com/v1/news/all?symbols=${name}&filter_entities=true&language=en&api_token=5NwYFtQgsDYc5CVnbkRY5xAXi3xs5QFuhAfkqDgx`;
  fetch(stocksNews)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      name = name.toUpperCase();
      news.textContent = "";
      news.style.display = "block";
      var header = document.createElement("h1");
      header.textContent = name + " News";
      news.append(header);
    });
}

function search() {
  var searchName = document.getElementById("search").value;
  var name = searchName;
  var date = document.getElementById("date").value;
  getApi(name, date);
}
