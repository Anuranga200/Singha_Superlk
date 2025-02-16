const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bycrypt = require('bcryptjs');

const userSchema = new Schema({
  name: { type: String, required: true},
  email: {type: String,required: true},
  password: { type: String,required: true },
  role: { type: String,enum: ['admin', 'premium','normal'],default: 'normal' }
},
  { timestamps: true }
);

//hsahing the password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) return next();
  const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, 12);
  next();
});
//comparing the password
userSchema.methods.comparePassword = async function (password) {
  return await bycrypt.compare(password, this.password);
};

const user = mongoose.model('User', userSchema);
module.exports = user;
