import { Router } from 'express'
import { associateProduct, createProduct, deleteProduct, filterProducts, getAllProducts, updateProduct } from './handlers/product'
import { createCategory, editCategory, getAllCategories } from './handlers/category'
import { handleInputError,validationForProducts } from './validation_middleware'
import { body } from 'express-validator'
const router = Router()

router.post('/createProduct',body(validationForProducts).notEmpty(),handleInputError,createProduct)
router.post('/createCategory/:name',createCategory)
router.put('/associateProduct',associateProduct)
router.get('/getAllProducts',getAllProducts)
router.put('/updateProduct/:id',updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)
router.get("/getAllCategories",getAllCategories)
router.get('/filter/:filter',filterProducts)
router.put('/updateCategory/:id',editCategory)
export default router
