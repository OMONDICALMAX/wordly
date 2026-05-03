
function fetchData() {
  const word = document.getElementById("word").value.toLowerCase();
  const result = document.getElementById("result");

  result.innerHTML = "Loading...";

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Word not found");
      }
      return res.json();
    })
    .then(data => {
      const definition = data[0].meanings[0].definitions[0].definition;

      result.innerHTML = `
        <h3>${data[0].word}</h3>
        <p>${definition}</p>
      `;
    })
    .catch(err => {
      result.innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
}