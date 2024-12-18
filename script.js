const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const nextButton = document.getElementById("next-btn");
const tutorial = document.getElementById("tutorial");
const app = document.getElementById("app");
const startButton = document.getElementById("start-btn");

let displayedQuotes = []; // Track displayed quotes
let remainingQuotes = []; // Track quotes yet to be shown

// Static array of 400 motivational quotes
const allQuotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Everything has beauty, but not everyone can see it.", author: "Confucius" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "If you’re going through *****, keep going.", author: "Winston Churchill" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.", author: "Wayne Dyer" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Never bend your head. Always hold it high. Look the world straight in the eye.", author: "Helen Keller" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { text: "Do not wait; the time will never be 'just right.'", author: "Napoleon Hill" },
    { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "If you can dream it, you can do it.", author: "Walt Disney" },
    { text: "Nothing is impossible, the word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Everything has beauty, but not everyone can see it.", author: "Confucius" },
    { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { text: "What you do today can improve all your tomorrows.", author: "Ralph Marston" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Don’t wait for opportunity. Create it.", author: "Anonymous" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Live in the sunshine, swim the sea, drink the wild air.", author: "Ralph Waldo Emerson" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.", author: "Wayne Dyer" },
    { text: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
    { text: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
];

// Initialize remaining quotes with all quotes at the beginning
function initializeQuotes() {
    remainingQuotes = [...allQuotes];
}

// Function to show a random quote without repetition
function showRandomQuote() {
    // If no more remaining quotes, reset the lists
    if (remainingQuotes.length === 0) {
        initializeQuotes();
        displayedQuotes = []; // Clear the displayed quotes list
    }

    // Pick a random quote from the remaining list
    const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
    const randomQuote = remainingQuotes[randomIndex];

    // Remove the quote from remainingQuotes and add it to displayedQuotes
    remainingQuotes.splice(randomIndex, 1);
    displayedQuotes.push(randomQuote);

    // Display the quote
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
    quoteText.style.animation = "fadeInQuote 0.8s ease-in-out"; // Animation
}

// Start Button Event Listener
startButton.addEventListener("click", () => {
    tutorial.style.display = "none";
    app.classList.remove("hidden");
    initializeQuotes(); // Prepare the quotes list
    showRandomQuote();
    nextButton.disabled = false;
});

// Next Button Event Listener
nextButton.addEventListener("click", showRandomQuote);
