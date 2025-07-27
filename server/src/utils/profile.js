const express=require("express")
const { userAuth } = require("../middleware/auth.js");

const profileRouter=express.Router();



profileRouter.get("/profile",userAuth, async (req, res) => {
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


module.exports = profileRouter;