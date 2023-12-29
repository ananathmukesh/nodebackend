//create token and saving that in cookies
const httpstatus = require("./httpstatus");
const jwt = require("jsonwebtoken");

const sendToken = (user, statusCode, res) => {
    users = {
        id:user.id,
        email:user.email
    }
    const token = jwt.sign(users, process.env.ACTIVATION_SECRET, { expiresIn: '1h' }); // Expires in 1 hour


    //options for cookies
    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }

   

    var json = httpstatus.successRespone({
        message: "Successfully Loged",user,token
      });
      return res.send(json);
}

module.exports = sendToken;