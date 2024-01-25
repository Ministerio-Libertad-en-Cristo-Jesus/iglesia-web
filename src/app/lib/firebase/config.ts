import { initializeApp } from "firebase/app"
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC0eYartlvH8_nhU0QYVGhwf6xdy3I3FoY",
  authDomain: "iglesia-web.firebaseapp.com",
  projectId: "iglesia-web",
  storageBucket: "iglesia-web.appspot.com",
  messagingSenderId: "251098738925",
  appId: "1:251098738925:web:9f54f58c04d4f81e4e9ce4"
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
