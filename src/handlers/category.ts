import prisma from '../db'

export const createCategory = async (req, res) => {
  try {
    const category = await prisma.category.create({  
      data: {
        category_name:req.params.name,
      }
    })
    res.json({ message: 'created', data: { category } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}
export const getAllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({})
    res.json({ data: { categories } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: e })
  }
}
