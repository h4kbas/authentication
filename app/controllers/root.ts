import { Router } from "express";
import authenticated from "../middlewares/authenticated";
import notauthenticated from "../middlewares/notauthenticated";

import hash from "../utils/hash";
import User from "../schemas/user";
const Root = Router();

Root.get('/', function (req, res) {
  console.log(req.session);
  res.render('index.twig', { profile: req.session.profile });
});

Root.get('/home', authenticated, function (req, res) {
  res.render('home.twig');
});


Root.get('/login', notauthenticated, function (req, res) {
  res.render('login.twig');
});


Root.get('/signup', notauthenticated, function (req, res) {
  res.render('signup.twig');
});

Root.post('/signup', notauthenticated, async (req, res) => {


  if (!req.body.name || !req.body.email || !req.body.password) {
    res.end("You should provide a name, email and password");
    return;
  }

  if (req.body.password.length < 5) {
    res.end("Your password should have at least 5 characters");
    return;
  }


  if (await User.findOne({ email: req.body.email }).exec()) {
    res.end("There is already an account registered to this email address");
    return;
  }


  const newUser = new User({
    email: req.body.email,
    name: req.body.name,
    password: hash.hashPassword(req.body.password)
  });
  try {
    await newUser.save();
    res.end(`You have registered successfully. Now follow the link to login <a href="/login">Login</a>`)

  }
  catch (ex) {
    res.end("There has been something wrong with your registration. Please try again");
  }

});

Root.post('/login', notauthenticated, async (req, res) => {
  const user = await User.findOne({ email: req.body.email }).exec();

  if (user && hash.checkpassword(req.body.password, user.password)) {
    req.session.profile = user;
    req.session.save(() => res.redirect("/home"));

  }
  else {
    res.end("Email or the password you provide are not correct");
  }
});

Root.get('/logout', authenticated, async (req, res) => {
  req.session.destroy(() => res.redirect("/"));
});


export default Root;