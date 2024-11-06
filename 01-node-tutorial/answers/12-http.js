const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end ('Welcome to the page')
    }
    if(req.url === '/about'){
        res.end('Here is the story')
    }
    res.end(`
        <h1>Ooops!</h1>
        <p>The page is not found. Come back later </p>`)
})

 server.listen(3000)