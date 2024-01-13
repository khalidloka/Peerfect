const express = require("express");
const router = express();

const etudiant = require("./etudiant");

router.use("/etudiant",etudiant)




module.exports = router;