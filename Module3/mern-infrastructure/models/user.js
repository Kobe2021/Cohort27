const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6;  // 6 is a reasonable value

const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
      },
      password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true,
      },
    },
    {
      timestamps: true,
      toJSON: {
        transform: function (doc, ret) {
          delete ret.password;
          return ret;
        },
      },
    }
  );
  

userSchema.pre('save', async function(next) {
    // 'this' is the user doc
    if (!this.isModified('password')) return next();
    // update the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });

module.exports = mongoose.model('User', userSchema);