import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firestore = {
  db: getFirestore(),
  storage: getStorage()
}

export default firestore
export const db = firestore.db
export const storage = firestore.storage
