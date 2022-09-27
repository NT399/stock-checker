# Stock-checker
An application that details the price of a given stock as well as any associated news.

## Description

This application allows users to search the price and news of their desired stock for any given day. The user enters in the ticker (code) for a stock and the desired date - once the search button is clicked, this will display the stock price for the selected date. News pertaining to the stock will be displayed below the stock price. The search history of the stocks searched will be displayed on the left hand pane - when one of the items are clicked, it will display the stock information for the clicked stock. 

The following components were instrumental for completing this project:
- The HTML file was created which included the following: a title, a section for popular stocks to be displayed at the top, a div to house the search history, a div to include the search bar and date, a div to display the price and a div to display the news. 
- The CSS file included the relevant styling to try make it as attractive and user friendly as possible. 
- The Javascript file included the following:
    - Variables were declared to obtain the relevant components from the HTML file (by way of using IDs).
    - An event listener was used to execute the search function when clicked.
    - A date picker function was used to display the calendar to select the date.
    - A function was used to retrieve the API (from polygon), parse it using JSON and then create an element for the stock price and append it for display.
    - The same function above was used to obtain the data from the date picker as well as the current price for the stock banner.
    - Another function is called to display the news - similar to above, a request is made to the News API. An element is created and appended to display a short description of the news and a link to it.
    - A for-loop was utilised in the News function to display 5 news items - this also has the added feature of preventing any repeated code.
    - A function was used for the Search History by pushing the searched items to a string and also creating/appending a button. When a button is clicked, it would display the searched stock (from the string) into the search bar.
    - A function was used for the actual search by inputting the search name (obtained from the search bar value) and embedding/calling it in the API, News and search history function.
    
Please note: This website/application should not be relied upon for investment/personal purposes. This website was produced purely as a project for a course.

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Usage

To view the website please follow this link: (https://nt399.github.io/stock-checker/)

To use the application, please follow the steps below:
1. Enter the ticker of the US stock you wish to search.
2. Enter the date using the date picker.
3. Enter the click search.
4. Your search history should be displayed on the left pane - to recall one of those searches, click the button and enter the date and click search.


![Screenshot of the website](https://github.com/NT399/stock-checker/blob/main/assets/Imagies/Snippet%20of%20the%20webpage.PNG)

## Credits

The following links were helpful for the completion of this project:
- https://polygon.io/ (this is the API used for the stock prices)
- https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- https://apilayer.com/marketplace/financelayer-api (this is the API used for the stock news)
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://www.w3schools.com/tags/att_input_value.asp


## License

MIT License

Copyright (c) [2022]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

