const mongoose = require("mongoose");

const schema = mongoose.Schema({
 
  img: { type: Object },
username:{ type: String},
password:{ type: String},
datet:{type:String},
datem:{type:String},
texteara:{type:String}
});

module.exports = mongoose.model("instauser", schema);
