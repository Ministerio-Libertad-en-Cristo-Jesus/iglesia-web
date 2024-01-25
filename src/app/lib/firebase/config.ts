import { initializeApp } from "firebase/app"
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_APP_ID || ''
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
