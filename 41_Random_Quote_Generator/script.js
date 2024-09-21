
const quotes = [
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Believe you can and you're halfway there. – Theodore Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
