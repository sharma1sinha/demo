var express = require('express');
var router = express.Router()

router.get('/', (req,res)=>{
   
    // res.render('index', {title:"Express", isAuthenticated: req.oidc.isAuthenticated(),
    //                  user: req.oidc.user,   });
if(req.oidc.isAuthenticated())
   res.render('logged_in');
else
   res.render('login');
});

module.exports = router;