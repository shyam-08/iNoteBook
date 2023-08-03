var jwt= require("jsonwebtoken");
const JWT_SECRET="shyamisaking ";

const fetchUser=(req,res,next)=>{
// get the user from jwt token and add user id to req Object 
const token= req.header("auth-token")
if(!token)
    res.status("401").send({error:"canot find token"})
    try {
        const data =jwt.verify(token,JWT_SECRET)
        req.user=data.user
        next();        
    } catch (error) {
        res.status("401").send({error:"cannot find token"})
    }

}

module.exports = fetchUser;
