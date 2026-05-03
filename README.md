WORDLY- A Dictionary Web App
Wordly is a simple english dictionary web application that allows users to search for the definition of various English words.

FEATURES
-Search for any English word
-Get real time definition from an API
-Handling error for invalid words

BUILT WITH
-HTML
-CSS
-JavaScript
-Dictionary API

PROJECT STRUCTURE
index.html      //Main HTML file
style.css       //Styling file
app.js          //JavaScript logic (API fetch + DOM update)
.gitignore      //Ignored files for Git

HOW TO RUN THE PROJECT
1. Clone the repository
git clone https://github.com/OMONDICALMAX/wordly.git
2. Navigate into the project folder
cd wordly
3. Open in browser
explorer.exe index.html

HOW IT WORKS
-User enters a word in the input field
-User then clicks the fetch definition button
-App sends request to 
https://api.dictionaryapi.dev/api/v2/entries/en/{word}
-Definition is displayed on the screen if the input is valid.
-If the input is invalid, an error is displayed.

AUTHOR
Calmax Omondi