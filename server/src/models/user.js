const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10,
      trim: true,
    },
    lastName: {
      type: String,
      minlength: 3,
      maxlength: 10,
      trim: true,
    },
    // emailId: {
    //   type: String,
    // //   required: true,
    //   unique: true,
    //   trim: true,
    //   lowercase: true,
    //   validate(value) {
    //     if (!validator.isEmail(value)) {
    //       throw new Error("Invalid email format");
    //     }
    //   },
    // },
    emailId: {
      type: String,
      required: true,
      // unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) throw new Error("Invalid Email" + value);
      },
    },
    gender: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 120,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 1024,
      vaidate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error(
            "Password must be at least 6 characters long and contain a mix of letters, numbers, and symbols."
          );
        }
      },
    },
  },
  {
    timestamps: true,
  }
);



userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id }, "secret@Key", {
    expiresIn: "7d",
  });
  return token;
};


//there is a issue in password validation


userSchema.method.validatePassword=async function (password){
  const user = this;
  const passwordHash = user.password;
  const isPasswordValid = await bcrypt.compareSync(password, passwordHash);
  
  return isPasswordValid;
}

module.exports = mongoose.model("User", userSchema);
