const express = require('express');
const { products } = require("./data");
const peopleRouter = require('./routes/people');
const { auth, cookieParser} = require("./routes/auth");

const app = express();

//Middleware function week4
const logger = (req, res, next) => {
    console.log (`[${new Date().getFullYear()}] ${req.method} ${req.url}`);
    next();
};

//Middleware setup
app.use(logger);
app.use(express.static('./methods-public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cookie-parser middleware
app.use(cookieParser());

//Authentication routes
app.post("/logon", (req,res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Please enter your name" });
    }
    res.cookie( "name", name );
    res.status(201).json({ message: `Welcome, ${name}`});
})

app.delete("/logoff", (req,res) => {
    res.clearCookie( "name" );
    res.status(200).json({ message: "You're logged off"});
})

app.get("/test", auth, (req, res) => {
    res.status(200).json({ message: `Hi, ${req.user}`})
})

/* app.get('/', logger, (req, res) => {
    res.send ('Home')
});

app.get('/about', logger, (req, res) => {
    res.send ('About')
})
*/

//Routes tests
app.get('/api/v1/test', (req,res) => {
    res.json({ message: "It worked!" });
})

app.get('/api/v1/products', (req,res) => {
    res.json(products);
})

app.get('/api/v1/products/:productID', (req,res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        res.status(404).json({ message: "That product was not found."})
    } else {
        res.json(product);
    }
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit, minPrice } = req.query;
    let filteredProducts = [...products];

    //Limit result
    if (limit){
        filteredProducts = filteredProducts.slice (0,parseInt(limit))
    } else {
        filteredProducts = filteredProducts.slice(4);
    }

    //Filter search
    if (search) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
    )}

    //Filter by min price
    if (minPrice) {
        filteredProducts = filteredProducts.filter(
            (product) => product.price > parseInt(minPrice)
        )
    };

    res.json(filteredProducts);
})

app.use("/api/v1/people", peopleRouter);

app.all( '*', (req, res) => {
    res.status(404).json({error: '404 ERROR'});
});

//Server start
let port = 5500;
app.listen(port, () => {
 console.log(`It's running on http://localhost:${port}`)
})

console.log('Express Tutorial')
