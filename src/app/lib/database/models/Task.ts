import mongoose, { Schema, model } from 'mongoose'

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    encoding: "utf8mb4"
  },
  description: {
    type: String,
    required: true,
    encoding: "utf8mb4"
  },
  importance: {
    type: String,
    required: true,
    enum: ['low', 'mid', 'high']
  },
  status: {
    type: String,
    required: true,
    enum: ['not_started', 'in_progress', 'completed'],
    default: 'not_started'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }
}, { timestamps: true })

taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Task = mongoose.models.task || model('task', taskSchema)

export default Task
