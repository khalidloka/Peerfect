const express = require("express");
const etudiant = express.Router();
const {login} = require('../controllers/etudiantController')

etudiant.post("/login" ,login);


module.exports = etudiant;