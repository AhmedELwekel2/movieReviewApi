const mongoose=require('mongoose')
import { stringify } from "querystring";


const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:[true,'please tell us your name']
    },
    email:{
        type:String,
        required:[true,'please provide your email '],
        validate: [validator.isEmail, 'Please provide a valid email'],
        unique:true

    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        select:false,
        minlength: 8

    },
    confirmPassword:{
        type:String,
        required:[true,'please confirm your password'],
        validate:{
            validator:function(el){
                return el=this.password
            },
            message:'password are not the same'
        }

    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'

    },
    image:{
        type:String,

    },


    
})

const User=mongoose.model('User',userSchema)

module.exports=User;