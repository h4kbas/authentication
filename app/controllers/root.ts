import { Router } from "express";

const Root = Router();

Root.get('/', function (req, res) {
  res.render('index.twig');
});

Root.get('/home', function (req, res) {
  res.render('home.twig');
});


Root.get('/login', function (req, res) {
  res.render('login.twig');
});


Root.get('/signup', function (req, res) {
  res.render('signup.twig');
});


export default Root;