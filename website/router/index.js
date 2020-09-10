const express = require('express');
const router = express.Router();
const db = require('quick.db');


router.get("/:id", function(req, res) {
 if(!req.params.id) {
     return res.send(`Invaild Code`);
     return res.status(404);
 } 

 let code = db.fetch(`${req.params.id}`);

 if(code == null) {
     return res.send(`No URL Found`)
     return res.status(404);
 }
 
 res.redirect(code);
})


module.exports = router;