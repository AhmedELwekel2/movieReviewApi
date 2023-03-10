const express=require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const movieRouter=require('./routes/movieRouter')
const AppError=require('./utils/appError')
const globalErrorController=require('./controllers/errorController')
const actorRouter=require('./routes/actorRouter')
const directorRouter=require('./routes/directorRouter')
const userRouter=require('./routes/userRouter')
const reviewRouter=require('./routes/reviewRouter')
dotenv.config({path:'.env'})


const port=process.env.PORT;

const app=express();

const db=(process.env.DATABASE ).replace('<password>',process.env.DATABASE_PASSWORD )

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(300).send('Welcome to Movie Review Api')
})

app.use('/movie',movieRouter)

app.use('/actor',actorRouter)


app.use('/director',directorRouter)


app.use('/user',userRouter)

app.use('/review',reviewRouter)

mongoose.connect(db).then(()=>{
    console.log('DB connection succesfuly')
  })



app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

app.use(globalErrorController)