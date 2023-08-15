import db from '../models'
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
