const PORT = 7000;

let express = require("express");
let bodyParser = require("body-parser");
let sql = require("sqlite3");

const app = express();
let db = require("./db.js")

// call api routes
let apiRoutes = require("./routes/index");

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("../views/index");
});

// attach routes
app.use('/', apiRoutes.routes);

app.listen(PORT, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${PORT}`);
});
