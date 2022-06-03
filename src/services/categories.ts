import { db } from '../utils'
import { collection, query, getDocs } from 'firebase/firestore'

export interface Category {
  id: string
  image: string
  title: string
  questionsCount: string
  description: string
}

export const getCategoriesService = async (): Promise<Array<Category>> => {
  try {
    const q = query(collection(db, `categories`))

    const qureySnapshot = await getDocs(q)
    const categories: Array<Category> = []
    qureySnapshot.docs.forEach(doc => {
      categories.push({
        id: doc.id,
        image: doc.data().image,
        title: doc.data().title,
        questionsCount: doc.data().questionsCount,
        description: doc.data().description,
      })
    })
    return categories
  } catch (err) {
    console.log(err)
    return []
  }
}
