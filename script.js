const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const nextButton = document.getElementById("next-btn");
const tutorial = document.getElementById("tutorial");
const app = document.getElementById("app");
const startButton = document.getElementById("start-btn");

let displayedQuotes = new Set(); // To track displayed quotes
let currentQuote = null;

// Static array of 1000 motivational quotes (sample)
const allQuotes = [
    { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
    { text: "You are stronger than you know.", author: "Unknown" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Keep going. Everything you need will come to you at the right time.", author: "Unknown" },
    { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    // Add more quotes...
];

// Function to show a random unique quote
function showRandomQuote() {
    if (displayedQuotes.size === allQuotes.length) {
        displayedQuotes.clear(); // Reset if all quotes are shown
    }

    do {
        currentQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    } while (displayedQuotes.has(currentQuote.text)); // Ensure uniqueness

    displayedQuotes.add(currentQuote.text);
    quoteText.textContent = `"${currentQuote.text}"`;
    quoteAuthor.textContent = `- ${currentQuote.author}`;
    quoteText.style.animation = "fadeInQuote 0.8s ease-in-out"; // Animation
}

// Start Button Event Listener
startButton.addEventListener("click", () => {
    tutorial.style.display = "none";
    app.classList.remove("hidden");
    showRandomQuote();
    nextButton.disabled = false;
});

// Next Button Event Listener
nextButton.addEventListener("click", showRandomQuote);
