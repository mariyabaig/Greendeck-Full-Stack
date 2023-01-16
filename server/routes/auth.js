const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const JWTSECRET = "Ketumiecutie";

//POST request to create a user POST /api/auth/createuser

//if there are errors, return bad request and the errors
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check if the user exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        res
          .status(400)
          .json({ errors: "Email already exists", message: errors.message });
      }
      //password hashing

      const salt = await bcrypt.genSalt(10);
      const SecPassword = await bcrypt.hash(req.body.password, salt);

      //Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: SecPassword,
      });

      //data for authToken
      const data = {
        user: {
          id: user.id,
        },
      };
      //Signing auth token (jwt.sing is a sync method)
      const authToken = jwt.sign(data, JWTSECRET);
      //console.log(authToken);

      res.json[{ authToken }];
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Authenticate a user api/auth/login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }
      //comapring password before loging in
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ errors: "Please try to login with correct credentials" });
      }
      //data for authToken
      const data = {
        user: {
          id: user.id,
        },
      };
      //Signing auth token (jwt.sing is a sync method)
      const authToken = jwt.sign(data, JWTSECRET);
      //console.log(authToken);

      res.json[{ authToken }];
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
