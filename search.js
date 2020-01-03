function getWords() {
    let keys = Object.keys(data);
    let results = "";

    for (let i = 1; i <= 30; i++) {
        let randomNumber = Math.random();
        let wordIndex = Math.floor(randomNumber * keys.length);
        let word = keys[wordIndex];
        let definition = data[word];
        results += `<b>${word}</b>:<br> ${definition} <br><br>`;
    }
    document.getElementById('display').innerHTML = results;
}

function unhide() {
    document.getElementById('display').classList.remove("hidden");
}