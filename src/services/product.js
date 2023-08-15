import db from '../models'
import { Op } from 'sequelize'
export const getAllProducts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.findAll({
        raw: true,
        nest: true,
        attributes: [
          'id',
          'title',
          'description',
          'supplier',
          'price',
          'imageUrl',
          'product_location',
        ],
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Getting product is failed.',
        response,
      })
    } catch (err) {
      reject(error)
    }
  })

export const createProduct = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.create({
        title: body.title,
        description: body.description,
        supplier: body.supplier,
        imageUrl: body.imageUrl,
        price: body.price,
        product_location: body.product_location,
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Create product is failed.',
        response,
      })
    } catch (err) {
      reject(error)
    }
  })
export const searchProduct = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: '%' + params + '%' } },
            { price: { [Op.like]: '%' + params + '%' } },
            { supplier: { [Op.like]: '%' + params + '%' } },
            { description: { [Op.like]: '%' + params + '%' } },
            { product_location: { [Op.like]: '%' + params + '%' } },
          ],
        },
      })
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Search product successfully',
        response,
      })
    } catch (err) {
      reject(error)
    }
  })
