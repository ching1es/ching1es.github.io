const quotes = [
{
    quote:"Freedom is just Chaos, with better lighting.",
    author:"Alan Dean Foster",
},
{
    quote:"About the only thing that comes to us without effort is old age.",
    author:"Gloria Pitzer",
},
{
    quote:"The empires of the future are the empires of the mind.",
    author:"Sir Winston Churchill",
},
{
    quote:"Never bend your head. Hold it high. Look the world straight in the eye.",
    author:"Helen Keller",
},
{
    quote:"You have to have confidence in your ability, and then be tough enough to follow through.",
    author:"Rosalynn Carter",
},
{
    quote:"A day without laughter is a day wasted.",
    author:"Charlie Chaplin",
},
{
    quote:"Time is the most valuable thing a man can spend.",
    author:"Theophrastus",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


