/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of objects with all quotes:
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


/**
 * @function
 * @name getRandomQuote
 * @description Select a random quote object from the quotes array.
 * @returns {object}
 */
function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);

    return quotes[randomNumber];
};

/**
 * @function
 * @name printQuote
 * @description Prints a random quote within the div with id of quote-box
 */
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

/**
 * Handler of button click:
 */
document.getElementById('load-quote').addEventListener("click", printQuote, false);