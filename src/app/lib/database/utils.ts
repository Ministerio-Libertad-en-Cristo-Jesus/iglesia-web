import mongoose from "mongoose"
interface ConnectionObj {
  isConnected: number
}

export const connectToDB = async () => {
  const connection: ConnectionObj = {
    isConnected: 0
  }
  const mongoUrl = process.env.MONGO_URL || ''
  try {
    if(connection.isConnected) return
    const db = await mongoose.connect(mongoUrl)
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    throw new Error(error as string)
  }
}
