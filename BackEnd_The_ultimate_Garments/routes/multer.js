var multer=require('multer')
const { uuid } = require('uuidv4');
var serverpath=multer.diskStorage({ destination:(req,file,path)=>{
    path(null,'public/images')
},
filename:(req,file,path)=>{
    //path(null,file.originalname)
    path(null,uuid()+file.originalname.substring(file.originalname.lastIndexOf(".")))
} 
})
var upload=multer({storage:serverpath})
module.exports=upload
