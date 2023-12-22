import prisma from '../db'

export const createProduct = async (req, res) => {
  try {
    await prisma.product.create({
      data: {
        description: req.body.product_description,
        price: req.body.product_price,
        category_id: req.body.category_id
      }
    })
    res.json({ message: 'created'})
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}
export const associateProduct = async (req, res) => {
  try {
    
    const product = await prisma.product.update({
      data: {
        category_id: req.body.category_id
      },
      where: {
        product_id: req.body.product_id
      }
    })
    res.json({ message: 'updated', data: { product } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}

export const getAllProducts = async (req, res) => {
  try {
    
    const products = await prisma.product.findMany({})
    res.json({ data: { products } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}
export const updateProduct = async (req, res) => {
  try {
    console.log(req.body.description+'ardababa')
    const product = await prisma.product.update({
      where: {
        product_id: req.params.id
      },
      data: {
        description: req.body.description,
        price: req.body.price,
        category_id: req.body.category_id
      }
    })
    res.json({ message: 'updated', data: { product } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}
export const deleteProduct = async (req, res) => {
  try {
    const product = await prisma.product.delete({
      where: {
        product_id: req.params.id
      }
    })
    res.json({ message: 'deleted', data: { product } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}
export const filterProducts = async (req, res) => {
  try {
    const product = await prisma.product.findMany({
      include: {
        belongtoCategory: true
      },
      where: {
        OR: [
          { description: req.params.filter },
          { belongtoCategory: { category_name: req.params.filter } }
        ]
      }
    })
    res.json({ message: 'query', data: { product } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}
