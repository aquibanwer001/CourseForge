import jwt from 'jsonwebtoken';
import { User } from '../models/user.js';

export const isAuth = async(req,res,next)=>{
    try {
        const token =req.headers.token;

        if(!token)
          return res.status(403).json({
            message: "Please Login"
        }); 
        
        const decodeData=jwt.verify(token,process.env.Jwt_sec);

        req.user= await User.findById(decodeData._id);

        next()
    } catch (error) {
        res.status(500).json({
            message: "Login First"
        });
        
    }
};


export const isAdmin =(req,res,next)=>{
    try {
        if(req.user.role !=="admin")
            return res.status(403).json({
        message:"You are not admin",
    });

    next();
        
    } catch (error) {
         res.status(500).json({
            message: error.message,
        });
    }
}