import multer from "multer";


const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

// file to name storage is important
const upload = multer({storage})

export default upload