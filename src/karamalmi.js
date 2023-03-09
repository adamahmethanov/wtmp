const url2 = "https://www.compass-group.fi/menuapi/feed/json?costNumber=3208&language=en";
const corsProxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url2)}`;

fetch(corsProxyUrl)
    .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.');
    })
    .then(data => console.log(data.contents))
    .catch(error => console.log(error));


