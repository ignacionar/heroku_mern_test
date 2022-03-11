import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  test: {
    type: String
  }
})

const Test = mongoose.model('Test', TestSchema, 'tests')

export default Test