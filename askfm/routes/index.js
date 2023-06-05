var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// router.post("/sign-up" async(req,res,next)=>{
//   try{
//     const user = new User({})
//   }
// })

router.get("/sign-up", function (req, res, next) {
  res.render("sign-up-form");
});

module.exports = router;
