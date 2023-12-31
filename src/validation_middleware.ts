import { validationResult } from "express-validator"
//some validation schema and it's error handler
export const validationForProducts =['product_description','product_price']

export const handleInputError = (req,res,next) => {
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        res.status(400)
        res.json({errors:errors.array()})
    }
    else{
        next();
    }
}