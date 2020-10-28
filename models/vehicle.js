import mongoose from 'mongoose';

const VehicleSchema = mongoose.Schema({
    v_reg: String,
    v_model: String,
    v_make: String
});

module.exports = mongoose.model('Vehicle', VehicleSchema);

