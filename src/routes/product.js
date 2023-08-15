import express from 'express'
import * as productControllers from '../controllers/product'

const router = express.Router()

router.get('/all', productControllers.getAllProduct)
router.get('/search/:key', productControllers.searchProduct)

// router.use(verifyToken)

router.post('/create-new', productControllers.createProduct)
export default router
