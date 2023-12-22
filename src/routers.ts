import { Router } from 'express'
import { associateProduct, createProduct, deleteProduct, filterProducts, getAllProducts, updateProduct } from './handlers/product'
import { createCategory, getAllCategories } from './handlers/category'

const router = Router()

router.post('/createProduct',createProduct)
router.post('/createCategory/:name',createCategory)
router.put('/associateProduct',associateProduct)
router.get('/getAllProducts',getAllProducts)
router.put('/updateProduct/:id',updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)
router.get("/getAllCategories",getAllCategories)
router.get('/filter/:filter',filterProducts)
export default router
