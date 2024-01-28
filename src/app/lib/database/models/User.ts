import mongoose, { Schema, model } from 'mongoose'

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20
  },
  phone: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    encoding: "utf8mb4"
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
