const jwt = require('jsonwebtoken');
function authenticateJWT(req, res, next){
  const authHeader = req.headers.authorization;
  if(authHeader){
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
      if(err){
        res.sendStatus(403);
      }
      req.user=user;
      next();
    })
  }else{
    res.sendStatus(403);
  }
}

module.exports=authenticateJWT;