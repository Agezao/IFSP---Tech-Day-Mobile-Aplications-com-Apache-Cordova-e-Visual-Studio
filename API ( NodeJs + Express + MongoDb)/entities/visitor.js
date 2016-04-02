var mongoose  = require("mongoose");
var Schema    = mongoose.Schema;

var VisitorSchema = new Schema({
    _id: { type: 'String', unique: true, index: true },
    name: { type: 'String', index: true },
    create: Number
});

module.exports = mongoose.model("Visitor", VisitorSchema);