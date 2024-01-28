import { initializeApp } from "firebase/app"
import { deleteObject, getDownloadURL, getStorage, ref, uploadString } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.API_KEY || '',
  authDomain: process.env.AUTH_DOMAIN || '',
  projectId: process.env.PROJECT_ID || '',
  storageBucket: process.env.STORAGE_BUCKET || '',
  messagingSenderId: process.env.MESSAGING_SENDER_ID || '',
  appId: process.env.APP_ID || ''
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

export async function uploadImage(image: string, id: string): Promise<string> {
  const storageRef = ref(storage, `articles/${id}`)

  try {
    await uploadString(storageRef, image, 'data_url')
    const url = await getDownloadURL(storageRef)
    return url
  } catch (error) {
    throw new Error('Error al subir la imagen')
  }
}

export async function deleteImage(id: string): Promise<void> {
  const storageRef = ref(storage, `articles/${id}`)

  try {
    await deleteObject(storageRef)
  } catch (error) {
    throw new Error('Error al borrar la imagen')
  }
}
