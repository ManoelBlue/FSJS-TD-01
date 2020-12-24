/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Array of objects with all quotes:
***/
const quotes = [
    {
        quote: 'All we have to decide is what to do with the time that is given us.',
        source: 'J.R.R. Tolkein',
        citation: 'The Fellowship of the Ring',
        year: '1954'
    },
    {
        quote: 'It matters not what someone is born, but what they grow to be.',
        source: 'J.K. Rowling',
        citation: 'Harry Potter and the Goblet of Fire',
        year: '2000'
    },
    {
        quote: 'Not all those who wander are lost.',
        source: 'J.R.R. Tolkein',
        citation: 'The Lord of the Rings',
        year: ''
    },
    {
        quote: 'Life is what happens when you\'re busy making other plans.',
        source: 'John Lennon',
        citation: '',
        year: ''
    },
    {
        quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
        source: 'Oprah Winfrey',
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