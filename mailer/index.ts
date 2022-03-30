import nodeMailer from 'nodemailer';
import fs from 'fs';
import path  from 'path';
import Handlebars from 'handlebars';

export default class mailer{
    static  mailer=async(payload : any,recepient:string,url:string)=>{

        let content = fs.readFileSync(path.join(__dirname,'/html/index.html'),'utf-8')
        const template = Handlebars.compile(content);
        const replacements = {
            eventId:payload.eventId,
            title:payload.title,
            date:payload.date
        }
        const htmlToSend = template(replacements);
        let transporter = nodeMailer.createTransport({
            service:'gmail',
            port: 587,
            secure: false,
            auth: {
                user: 'ofood.customerservice@gmail.com',
                pass: 'rgukt123'
            }
        })
        let mailOptions = {
            from: 'ofood.customerservice@gmail.com',
            to: recepient,
            subject: 'Event Registration',
            html: htmlToSend,
            attachments: [
                {
                    filename: "qrcode",
                    path: url,
                    cid: "img123"
                }
            ]
        };

        try{
            let info:any = await transporter.sendMail(mailOptions);
            info.statusCode = 200;
            return info;
        }
        catch(err:any){
     
            err.statusCode = 202;
            return err;
        }
    }
    static async mailer1(otp:string,recepient:string){

    let email = recepient;
    let parts = email.split("@");
    if (parts[parts.length - 1] !== "rgukt.ac.in")
        throw new Error("Please use rgukt domain mail");
       
       let transporter = nodeMailer.createTransport({
           service:'gmail',
           port: 587,
           secure: false,
           auth:{
               user:'ofood.customerservice@gmail.com',
               pass:'rgukt123'
           }
       })
    
       let mailOptions = {
           from:'ofood.customerservice@gmail.com',
           to:recepient,
           subject:'OTP for verification',
           text:`${otp} is your otp for verification \n\n Thank you.\n\n Regards,\n Ofood.` 
       }
    
       try{
           let info:any = await transporter.sendMail(mailOptions);
           info.statusCode = 200;
           return info;
       }
       catch(err:any){
    
           err.statusCode = 202;
           return err;
       }
       
    }
}
