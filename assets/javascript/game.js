
//Variables --

// The array of words the computer can choose from.
var words = ["peanut butter cookies", "swiss cake roll", "apple pie", "chocolate chip cookies", "red velvet cupcakes", "bundt cake", "crepes", "strawberry shortcake", "three berry tart", "lemon meringue"];

// The game will start with 0 wins
var score = 0;


// The computer will choose a random word
var randomWord = words[Math.floor(Math.random() * words.length)];

    // Display word on screen
    document.getElementbyId ("#current-word").innerHTML = randomWord;

// Empty array to show word length for values in words array with "_"
var answers = [];
for (var i = 0; i < randomWord.length; i++) {
 answers[i] = "_";
}

// Variable to keep track of remaining letters that can be guessed
var remainingLetters = randomWord.length;

// Use a for loop to allow user to keep guessing letters as long as there are still letters to guess
for (remainingLetters > 0) {
    // Game functions that occur while there are letters to guess

    // User will guess a letter on key press and that letter will be named 'letter'
    var letter = document.onkeyup = function() {
        
        // Ensure all letters guessed are lowercase
        var letter = event.key.toLowerCase();

        // Compare the user's guess with letters in the randomWord

        // If the letter is a match, show letter within randomWord
        if (letter === randomWord) {

        }
        // Else the letter is not a match, show letter as an already guessed letter

    
   }

// When the user has finished guessing 
// If all letters in the randomWord have been guessed, update wins
document.getElementById("#wins").innerHTML ("Wins " + score++;)
// Else not all the letters in randomWord have been guessed, reveal full word

// When all letters are revealed, display corresponding image where icon displays

// Then choose a new word

// When user has played all words, display alert that Baker with the Peanut Butter Cookies won the Bake-Off!