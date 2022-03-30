import {Response,Request,NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();


 export default function verify(request : Request,responsoe : Response,next :NextFunction){

    let secret = process.env.secret || "ssankdlkdkajllshlahfdfhu";
    try {
        
        let payload = request.headers.authorization || "ss";
        let decodedToken:any = jwt.verify(payload, secret);
        request.body.email = decodedToken.email;
        console.log(decodedToken);
        next();

    } catch (error) {

        responsoe.send("You are not authenticated please login/signup");
    }
    
}