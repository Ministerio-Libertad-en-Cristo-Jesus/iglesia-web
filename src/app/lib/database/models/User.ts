import mongoose, { Schema, model } from 'mongoose'

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['pastor', 'lider'],
    default: 'lider',
  },
  assignedtasks: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  },
  imposedtasks: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  }
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.password
  }
})

const User = mongoose.models.user || model('user', userSchema)

export default User
