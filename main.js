const apiKey = 'a3dec937-05b4-4854-881c-ad912f04e280';


async function getData(word, key) {
    console.log(word)
    const baseURL = 'https://dictionaryapi.com/api/v3/references/collegiate/json';
    
    let finalURL = `${baseURL}/${word}?key=${key}`;
    let result = await fetch(finalURL);
    let jsonRes = await result.json();
   
    try {
        let wordData = jsonRes[0].shortdef[0];
        return wordData;
    } catch (error) {
        return 'Word not found';
    }
}


function searchAction(){
    let searchQuery = document.getElementById('query').value;
    if (searchQuery === '') {
        alert('Please enter a word to search');
    } else {
        getData(searchQuery, apiKey).then((data) => {
            let result = document.getElementById('result');
            result.innerHTML = `
            <h3>Definition</h3>
            <p>${data}</p>
            `;
        });
    }
}
let searchBtn = document.getElementById('search');

searchBtn.addEventListener('click', () => { searchAction() });
document.getElementById('query').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchAction();
    }
});
