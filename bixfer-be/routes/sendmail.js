var express = require("express");
var router = express.Router();

let msg = {message: ""};

router.post("/", (req, res) => {
    let msg = req.body.message;
    res.send({status: 'success', message: msg});
});

module.exports = router;