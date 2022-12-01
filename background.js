fetch('https://api.twitter.com/2/tweets/search/all', {
    method: 'GET',
    headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+btoa('AnkitRaj679:Qwerty@9973'),
        'Access-Control-Allow-Origin': '*'
    },
    // body: JSON.stringify({})
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))

// console.log('Bearer '+btoa('AnkitRaj679:Qwerty@9973'))