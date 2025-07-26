const express = require("express");
const connectDB = require("./config/database");
// const User = require("./models/user");
const User = require("./models/user.js");
const { validateSignupData } = require("./utils/validation.jsx");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middleware/auth.js");
const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
  try {
    validateSignupData(req);
    const { firstName, lastName, emailId, gender, age, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      age,
      gender,
      password: passwordHash,
    });

    console.log(user);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({
      emailId,
    });
    if (!user) {
      return res.status(404).send("emailId not found in the database");
    }

    //there is issue in schemavalidation in validatepassword
    

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (isPasswordValid) {
      const token = await user.getJWT()
      // sign({ _id: user._id }, "secret@Key",{expiresIn:"1d"});
      console.log(token);

      res.cookie("token", token,{httpOnly:true});

      res.status(200).send("Login successful");
    } else {
      throw new Error("Invalid password");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/profile",userAuth, async (req, res) => {
  try {

    


    const user = req.user;
    if (!user) {
      return res.status(404).send("User not found");
    } else {
      console.log(user);
    }

    // console.log(cookies);

    res.send("Profile data" + user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


app.post("/logout", (req, res) => {
  res.cookie("token", null, { expires: new Date(Date.now()) });
  res.send("logout successfully");
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
