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
        year: '2000',
        character: 'Professor Albus Dumbledore'
    },
    {
        quote: 'Not all those who wander are lost.',
        source: 'J.R.R. Tolkein',
        citation: 'The Lord of the Rings',
        year: '1954',
        character: 'Aragorn'
    },
    {
        quote: 'Life is what happens when you\'re busy making other plans.',
        source: 'John Lennon'
    },
    {
        quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.',
        source: 'Oprah Winfrey'
    },
    {
        quote: 'There is nothing more precious than laughter',
        source: 'Frida Kahlo',
        citation: 'The Diary of Frida Kahlo: An Intimate Self-Portrait'
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
        <p class="quote">${quote.quote}</p>
        <p class="source">${quote.source}
    `;

    if(quote.citation) {
        html += `<span class="citation">${quote.citation}</span>`;
    };
    if(quote.year) {
        html += `<span class="year">${quote.year}</span>`;
    };
    if(quote.character) {
        html += `<span class="character">, <small>said by <b>${quote.character}</b></small></span>`;
    };
    html += `</p>`;

    document.getElementById('quote-box').innerHTML = html;
}

/**
 * Handler of button click:
 */
document.getElementById('load-quote').addEventListener("click", printQuote, false);