// wdlHDly3k10aOX14DvXjuQS08ILsJq0U

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
      var stockPrice = document.createElement("h1");
      stockName.textContent = data.ticker;
      stockPrice.textContent = "$" + data.results[0].c;
      graph.append(stockName);
      graph.append(stockPrice);
    });
}

function displayNews(name) {
  news.style.display = "block";
  var myHeaders = new Headers();
  myHeaders.append("apikey", "wdlHDly3k10aOX14DvXjuQS08ILsJq0U");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
  fetch(`https://api.apilayer.com/financelayer/news?tickers=aapl&keywords=aapl`, requestOptions)
    .then(function (response) {
     return response.json()
    })
    .then(function (data) {
<<<<<<< HEAD
      name = name.toUpperCase();
      news.textContent = "";
      news.style.display = "block";
      var header = document.createElement("h1");
      header.textContent = data.data[0].entities[0].name + " News";
      news.append(header);
      getNewsFromApi(stocksNews);
    });
}

function getNewsFromApi(stocksNews) {
  fetch(stocksNews)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.data[0].description);
      for (var i = 0; i < 3; i++) {
        var desc = document.createElement("h4");
        var link = document.createElement("a");
        desc.textContent = data.data[i].description;
        link.href = data.data[i].url;
        link.innerHTML = "Click here for more info";
        news.append(desc);
        news.append(link);
      }
    });
}
=======
      console.log(data)
      news.textContent = "";
      news.style.display = "block";
      var newsHeading = document.createElement("li");

      newsHeading.textContent = data.data[0].title;
      news.append(newsHeading);


    }) 
    .catch(error => console.log('error', error));
    };
>>>>>>> 62b4a99dd2e7716ee22a5ef24055c6d3a6766f97

function search() {
  var searchName = document.getElementById("search").value;
  var date = document.getElementById("date").value;
  getApi(searchName, date);
  displayNews(searchName);
}
