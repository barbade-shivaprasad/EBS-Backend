import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from './routes'
import mongoose from 'mongoose'

const app = express();

const url = "mongodb+srv://Shiva:Rgukt123@cluster0.juncu.mongodb.net/event-management?retryWrites=true&w=majority";

mongoose.connect(url)
.then((res: any) => console.log("successfully connected"))
  .catch((err: any) => {
     console.log(err.message)
  });

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(({ origin: ['http://localhost:3000','https://realshiva.rocks','http://realshiva.rocks','https://realshiva.rocks:3000', 'http://146.190.8.10:3000', 'http://192.168.137.61:3000', 'http://192.168.0.181:3000', 'http://192.168.30.134:3000', 'http://192.168.23.16:3000', 'http://192.168.43.207:3000', 'http://192.168.30.5:3000', 'http://192.168.6.42:3000', 'http://192.168.4.43:3000'], credentials: true })));
app.use(cookieParser())
app.use('/',routes)

export default app;