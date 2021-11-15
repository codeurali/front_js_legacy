function render(data) {
    const div = document.getElementById('list');
    div.replaceChildren();

    for (const element of data) {
        const row = document.createElement('div');
        row.textContent = Object.values(element).join(' - ');
        div.appendChild(row);
    }
}

function handleSearch() {
    // inputText.value = inputText.defaultValue
    const inputText = document.getElementById('search').value;
    fetch('http://127.0.0.1:5000/search', {                 // Endpoint
        method: 'POST',                         // HTTP method
        headers: {
            'Accept': 'application/json',       // Server's response format
            'Content-Type': 'application/json', // Body's format
        },
        body: JSON.stringify({
            text : inputText,
        }),             // Payload
    })
    .then(res => {
        if(res.status !== 200) console.log(res.status);
        else return data = res.json();
    })
    .then(function(data) {
       render(data)
    })
    .catch(err => console.log( 'Erreur : ' + err))
}

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', handleSearch);



// fetch data
function handleList() {
    const apiURI = 'http://127.0.0.1:5000/';

    fetch(apiURI)
    .then(res => {
        if(res.status !== 200) console.log(res.status);
        else return data = res.json();
    })
    .then(function (data) {
        render(data);
    })
    .catch(err => console.log( 'Erreur : ' + err))
}

const listBtn = document.getElementById('list-btn');
listBtn.addEventListener('click', handleList);