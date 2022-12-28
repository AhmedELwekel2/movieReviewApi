const mongoose=require('mongoose')

const directorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter the name of the director']

    },
    movies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Movie'

        }
    ],
    Bio:{
        type:String
    },
    images:{
        type:[String]
    }





    
})

const Director=mongoose.model('Director',directorSchema)

module.exports=Director