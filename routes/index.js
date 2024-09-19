var express = require('express');
var router = express.Router();

var database = require('./database');

/* GET home page. */


router.get('/', (req, res) => {
  res.render('index', {title : "LOGIN" , req: req})
})

router.post('/login', function(request, response, next){
  let user_email_address = request.body.user_email_address;
  let user_password = request.body.user_password;

  if(user_email_address && user_password){
    let query = `
      SELECT * FROM user_login 
      WHERE user_email = "${user_email_address}"
    `;

    database.query(query, function(error, data){
      if (error) {
        return next(error); // Tangani error query jika terjadi
      }

      if (data && data.length > 0){
        for(var count = 0; count < data.length; count++){
          if(data[count].user_password == user_password){
            request.session.user_id = data[count].user_id;
            return response.redirect("/home");
          } else {
            response.send('Incorrect Password');
          }
        }
      } else {
        response.send('Incorrect Email Address');
      }
      response.end();
    });
  } else {
    response.send('Please Enter Email Address and Password Details');
    response.end();
  }
});

router.get('/logout', function(request, response, next){
  request.session.destroy(function(err) {
    if (err) {
      return next(err);
    }
    response.redirect("/");
  });
});

module.exports = router;
