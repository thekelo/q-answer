const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  uid: { type: String, required: true }, // Firebase UID
  email: { type: String, required: true },
  displayName: { type: String },
  photoURL: { type: String },
  reputation: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
