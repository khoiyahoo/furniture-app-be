import * as services from '../services/product'

export const getAllProduct = async (req, res) => {
  try {
    const response = await services.getAllProducts()
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at post controller: ' + error,
    })
  }
}

export const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      supplier,
      price,
      imageUrl,
      product_location,
    } = req.body
    if (
      !title ||
      !description ||
      !supplier ||
      !price ||
      !imageUrl ||
      !product_location
    ) {
      return res.status(400).json({
        err: -1,
        msg: 'Missing input',
      })
    }
    const response = await services.createProduct(req.body)
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Failed at one product controller: ' + error,
    })
  }
}
