import { stat } from 'fs'
import * as products from '../handlers/product'
import supertest from 'supertest'

describe('product handler for creating product', () => {
  it('it should create a new product', async () => {
    const req = {
      body: {
        product_description: 'something',
        product_price: 10,
        category_id: null
      }
    }
    const res = {
      json ({ message }) {
        expect(message).toBe('created')
      },
      status (code) {
        expect(code).toBe(200)
      }
    }
    await products.createProduct(req, res)
  })
})
