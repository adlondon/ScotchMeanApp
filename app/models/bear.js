// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
  name: String
})
// module.exports allows us to pass this to other files when it's called
module.exports = mongoose.model('Bear', BearSchema);
