const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const AdminSchema = new Schema({
  emailAddress: {
    type: String,
    required: true
  }
  ,
  userName: {
    type: String,
    required: true
  }
  ,
  password: {
    type: String,
    required: true
  }
});

mongoose.model('admin', AdminSchema);