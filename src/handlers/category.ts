import prisma from '../db'
import logger from '../logger';
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
    res.json({ error: "something happened" })
    logger.error(`Error in createCategory: ${e.message}`);
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
    res.json({ error: "something happened" })
    logger.error(`Error in getAllCategories: ${e.message}`);
  }
}
export const editCategory = async (req, res) => {
  try {
    const categories = await prisma.category.update({
      where: {
        category_id: req.params.id,
      },
      data: {
        category_name: req.body.category_name,
      },
    })
    res.json({ data: { categories } })
    res.status(200)
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: "something happened" })
    logger.error(`Error in editCategory: ${e.message}`);
  }
}
