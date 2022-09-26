// wdlHDly3k10aOX14DvXjuQS08ILsJq0U

const date = document.getElementById("date");
const currentDay = moment().format("MM/D/Y");
var graph = document.getElementById("graph");
var news = document.getElementById("news");

const names = localStorage.search ? JSON.parse(localStorage.search) : [];

const searchButton = document.getElementById("submit");
searchButton.addEventListener("click", search);

$(function () {
  $("#date").datepicker({
    dateFormat: "yy-mm-dd",
  });
});

function getApi(name, date) {
  name = name.toUpperCase();
  var stocks = `https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=llDWlVpxTIuYF14j8vAukNJR3ZvzmmpH`;

  fetch(stocks)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.ticker);
      graph.textContent = "";
      graph.style.display = "block";
      var stockName = document.createElement("h1");
      var stockClose = document.createElement("h2");
      var stockHigh = document.createElement("h2");
      var stockLow = document.createElement("h2");
      stockName.textContent = data.ticker;
      stockClose.textContent = "Closing price:"+" $" + data.results[0].c;
      stockHigh.textContent = "Highest price:"+" $" + data.results[0].h;
      stockLow.textContent = "Lowest price:"+" $" + data.results[0].l;
      graph.append(stockName);
      graph.append(stockClose);
      graph.append(stockHigh);
      graph.append(stockLow);
    });
}

var currentDate = new Date();
var dd = String(currentDate.getDate()).padStart(2, "0");
dd = dd - 4;
var mm = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = currentDate.getFullYear();

currentDate = yyyy + "-" + mm + "-" + dd;
// function getApistatic(name, date, idName) {
//   name = name.toUpperCase();
//   var stocks = `https://api.polygon.io/v2/aggs/ticker/${name}/range/1/day/${date}/${date}?adjusted=true&sort=asc&limit=120&apiKey=llDWlVpxTIuYF14j8vAukNJR3ZvzmmpH`;

//   fetch(stocks)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       var result = data.ticker + " " + "--" + "$" + data.results[0].c;
//       document.getElementById(idName).innerHTML = result;
//     });
// }

// getApistatic("TSLA", currentDate, "tslax");
// getApistatic("AMZN", currentDate, "amznx");
// getApistatic("AAPL", currentDate, "aaplx");
// getApistatic("MSFT", currentDate, "msftx");
//getApistatic("meta", currentDate, "metax");
//getApistatic("googl", currentDate, "googlx");

function displayNews(name) {
  news.style.display = "block";
  var myHeaders = new Headers();
  myHeaders.append("apikey", "kLQl4KA3mpPWQkvdCie1mEOIIDKCIcIz");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/financelayer/news?tickers=${name}&keywords=${name}`,
    requestOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      news.textContent = "";
      news.style.display = "block";
      var head = document.createElement("h1");
      head.textContent = 'News';
      news.append(head);
      for (var i = 0; i < 5; i++) {
        var newsHeading = document.createElement("li");
        var desc = document.createElement("p");
        var link = document.createElement('a');
        newsHeading.textContent = data.data[i].title;
        desc.textContent = data.data[i].description;
        link.href = data.data[i].url;
        link.innerHTML = 'Click here for more info';
        news.append(newsHeading);
        news.append(desc);
        news.append(link);

      }
    })
    .catch((error) => console.log("error", error));
}
function saveHistory(name){
  if (!names.find((n) => n === name)) {
    names.push(name);
    localStorage.setItem("search" , JSON.stringify(names));
  }
  displayHistory(names);
}
function displayHistory(names) {
  var history = document.getElementById("sidebar");
  history.textContent = "";
  names.forEach((stock) => {
    var name = document.createElement("button");
    name.textContent = stock;
    name.onclick = function () {
      document.getElementById("search").value = stock;
      console.log(stock)
      getApi(stock);
    };

    history.append(name);
  });
}

function search() {
  var searchName = document.getElementById("search").value;
  var date = document.getElementById("date").value;
  getApi(searchName, date);
  displayNews(searchName);
  saveHistory(searchName)
}
