let sql = require('sqlite3').verbose()

let db = new sql.Database("./data.db", (err) => {
    if (err) {
        // error opening the database
        console.error(err.message);
        throw err
    } else{
        console.log('Connection successful..');
        db.run(`CREATE TABLE vehicles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            v_reg text UNIQUE,
            v_model text,
            v_make text,
            CONSTRAINT v_reg_unique UNIQUE (v_reg)
            )`,
            (err) => {
                if (err) {
                    // Table exists
                } else {
                    // Table created
                    let db_insert = 'INSERT INTO vehicles (v_reg, v_model, v_make) VALUES (?,?,?)'
                    db.run(db_insert, ["ABC 123V","DAF","Truck"]);
                    db.run(db_insert, ["FV03DVA","Volvo","Truck"]);
                    db.run(db_insert, ["GH06 LHT","Sedon","Truck"]);
                    db.run(db_insert, ["FV04DVA","VOLVO","Bus"]);

                }
            });
    }
});


module.exports = db;
