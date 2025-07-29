const express=require("express")
const User = require("../models/user");
const { validateSignupData } = require("../utils/validation.jsx");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRouter=express.Router();


authRouter.post("/signup", async (req, res) => {
  try {
    validateSignupData(req);
    const { firstName, lastName, emailId, gender, age, password ,url} = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      url,
      age,
      gender,
      password: passwordHash,
    });


    const token = await user.getJWT()
      console.log(token);

      res.cookie("token", token,{httpOnly:true});

    console.log(user);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({
      emailId,
    });
    if (!user) {
      return res.status(404).send("Please enter a valid email or password");
    }

    

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT()
      console.log(token);

      res.cookie("token", token,{httpOnly:true});

      res.status(200).send(user);
    } else {
      throw new Error("Invalid password");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});



authRouter.post("/logout", (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("logout successfully");
});

module.exports=authRouter;