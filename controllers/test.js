import Test from "../models/TestModel.js";

export const createTest = async (req, res) => {
  try {
    const { test } = req.body;
    const newTest = await Test.create({ test: test })
    res.status(200).json({data: newTest, message: 'test created'})
  } catch(error) {
    console.error(error)
    res.status(404)
  }
}