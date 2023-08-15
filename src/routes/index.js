import productRouter from './product'

const initRoutes = (app) => {
  app.use('/api/v1/products', productRouter)

  return app.use('/', (req, res) => {
    res.send('Server on....')
  })
}
export default initRoutes
