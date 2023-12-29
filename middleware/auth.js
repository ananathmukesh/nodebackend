
const catchAsyncErrors = require("./catchAsyncErrors");
const Jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.isAuthenticate = catchAsyncErrors(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("Please Login to continue", 401));
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
})
