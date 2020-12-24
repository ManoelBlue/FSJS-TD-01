/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote: '',
        source: '',
        citation: '',
        year: ''
    },
    {
        quote: '',
        source: '',
        citation: '',
        year: ''
    },
    {
        quote: '',
        source: '',
        citation: '',
        year: ''
    },
    {
        quote: '',
        source: '',
        citation: '',
        year: ''
    },
    {
        quote: '',
        source: '',
        citation: '',
        year: ''
    }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);

    return quotes[randomNumber];
};

/***
 * `printQuote` function
***/
function printQuote() {
    let quote = getRandomQuote();
    let html = `
        <p class="quote">QUOTE: ${quote.quote}</p>
        <p class="source">SOURCE: ${quote.source}
    `;

    if(quote.citation) {
        html += `<span class="citation">CITATION: ${quote.citation}</span>`;
    };
    if(quote.year) {
        html += `<span class="year">YEAR: ${quote.year}</span>`;
    };
    html += `</p>`;

    document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);