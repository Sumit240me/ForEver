// in this middleware we will

import jwt from 'jsonwebtoken'

const authUser = async(req, res, next) => {
   
    const { token } = req.headers;
    if(!token){
        return res.json({ success: false, message: 'Not Authorized Login Again'})
    }

    try {
        // here we are taking out the user id from the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        // Now we are putting the token id into the req.body so that it can be fetched in next feild
       
        req.body.userId = token_decode.id
        //console.log(req.body.userId)
        next()

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
    
}

export default authUser