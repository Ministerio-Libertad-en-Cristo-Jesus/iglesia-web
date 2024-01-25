import mongoose, { Schema, model } from 'mongoose'

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    encoding: "utf8mb4"
  },
  image: {
    type: String,
    required: true,
    encoding: "utf8mb4"
  },
  content: {
    type: [String],
    required: true,
    encoding: "utf8mb4"
  },
  type: {
    type: String,
    required: true,
    enum: ['news', 'preach']
  },
  author: {
    type: String,
    required: true,
    encoding: "utf8mb4"
  }
}, { timestamps: true })

articleSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Article = mongoose.models.article || model('article', articleSchema)

export default Article
