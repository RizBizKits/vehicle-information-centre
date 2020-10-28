let db = require("../db");

module.exports = class vehicleController {
    static listAll = (req, res) => {
        // Get vehicles from db
        let query = "SELECT * FROM vehicles";
        let params = [];
        db.all(query, params, (err, data) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }

            res.status(200).render('../views/vehicles', {
                vehicles: data
            });
        });
    }

    static listByReg = (req, res) => {
        // Get vehicles from db with reg id
        let query = "SELECT * FROM vehicles where v_reg = ?";
        let params = req.params.reg;
        db.get(query, params, (err, data) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.status(200).json({
                "vehicles":data
            })
        });
    }
};
