const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const JWT = require("jsonwebtoken");

dotenv.config();

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET_KEY
    ).toString(),
    email: req.body.email,
  });
  try {
    const saveuser = await newUser.save();
    res.status(200).json(saveuser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json("Error! No user found");
    }

    const Originalpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (Originalpassword !== req.body.password) {
      return res.status(401).json("Wrong password!!!");
    }
    const accessToken = JWT.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;

    res.status(200).json({...others,accessToken});
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
