import mongoose from "mongoose"
interface ConnectionObj {
  isConnected: number
}

export const connectToDB = async () => {
  const connection: ConnectionObj = {
    isConnected: 0
  }
  try {
    if(connection.isConnected) return
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/testiglesia')
    connection.isConnected = db.connections[0].readyState
  } catch (error) {
    throw new Error(error as string)
  }
}
